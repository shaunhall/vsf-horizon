const gql = require('graphql-tag')
const path = require('path')
const fs = require('fs')
const { print } = require('graphql')


function expandFragments(source) {
  let sourceCopy = source
  const lines = source.split(/\r\n|\r|\n/)
  lines.forEach((line) => {
    if (line[0] === '#' && line.slice(1).split(' ')[0] === 'import') {
      const importFile = line.slice(1).split(' ')[1].replace('..', path.resolve(__dirname, 'src/graphql-operations'))
      const parseDocument = fs.readFileSync(importFile.replace(/"/g, ''))
      sourceCopy = source.replace(line, expandFragments(parseDocument.toString()))
    }
  })
  return sourceCopy
}

module.exports = function(source) {
  const doc = gql`${expandFragments(source)}`
  const fragments = doc.definitions.reduce((str, fragment) => {
    if (fragment.kind === 'FragmentDefinition') {
      str += '\n\n' + print(fragment)
    }
    return str
  }, '')
  const operationDefinitions = doc.definitions.filter(operation => operation.kind === 'OperationDefinition').length
  const operations = doc.definitions.reduce((output, operation) => {
    if (operation.kind === "OperationDefinition") {
      if (operationDefinitions === 1) {
        output.push(`export default \`${print(operation) + fragments}\``.replace(/ *\n */g, ' \n'))
      } else {
        output.push(`export const ${operation.name.value} = \`${print(operation) + fragments}\``.replace(/ *\n */g, ' \n'))
      }
    }
    return output
  }, [])

  return  operations.join("\n")
};
