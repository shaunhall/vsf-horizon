const path = require('path')
const fs = require('fs')
const pkg = require('./package.json')

const categories = [
  'browser',
  'node',
]

const baseFolder = 'prod'

const packageJSONTemplate = (category) =>
  `{
  "name": "@horizon-base-api/${category.replace('/','-')}",
  "version": "${pkg.version}",
  "main": "./index.js",
  "types": "./types/index.d.ts",
  "license": "${pkg.license}",
  "description": "${pkg.description}",
  "author": "${pkg.author}"
  ${pkg.dependencies ? ',"dependencies": ' + JSON.stringify(pkg.dependencies) : ''}
}
`.trim();

categories.forEach(async (category) => {
  fs.mkdir(`./${baseFolder}/${category}/types`, { recursive: true }, (err) => {
    if (err) {
      throw err
    }
    fs.writeFile(
      path.join(__dirname, `./${baseFolder}/${category}/package.json`),
      packageJSONTemplate(category),
      (err) => {
        if (err) {
          throw err
        }
      }
    )
    fs.copyFile(
      path.join(__dirname, `./types/${category}.d.ts`),
      path.join(__dirname, `./${baseFolder}/${category}/types/index.d.ts`),
      (err) => {
        if (err) {
          throw err
        }
      }
    )
    fs.copyFile(
      path.join(__dirname, `./types/apiTypes.ts`),
      path.join(__dirname, `./${baseFolder}/${category}/types/apiTypes.ts`),
      (err) => {
        if (err) {
          throw err
        }
      }
    )
    fs.copyFile(
      path.join(__dirname, `./types/apiBaseTypes.ts`),
      path.join(__dirname, `./${baseFolder}/${category}/types/apiBaseTypes.ts`),
      (err) => {
        if (err) {
          throw err
        }
      }
    )
  })
})
