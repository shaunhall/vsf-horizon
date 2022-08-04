const fs = require('fs');
console.log(__dirname);
const queries = fs.readdirSync(__dirname + '/queries');
const mutations = fs.readdirSync(__dirname + '/mutations');

const operations = {};

queries.filter(name => name.endsWith('.js')).forEach((queryFile) => {
  const queryName = queryFile.replace('.js', '');
  // eslint-disable-next-line global-require
  const query = require('./queries/' + queryFile);
  operations[`${queryName}-query`] = ({ variables, metaData }) => {
    variables = { ...variables, ...metaData };
    return {
      operation: query,
      variables
    };
  };
});

mutations.filter(name => name.endsWith('.js')).forEach((mutationFile) => {
  const mutationName = mutationFile.replace('.js', '');
  // eslint-disable-next-line global-require
  const mutation = require('./mutations/' + mutationFile);
  operations[`${mutationName}-mutation`] = ({ variables, metaData }) => {
    variables = { ...variables, ...metaData };
    return {
      operation: mutation,
      variables
    };
  };
});

console.log(operations);

module.exports = operations;
