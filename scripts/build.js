/* eslint-disable */
const path = require('path');
const esbuild = require('esbuild');
const yargs = require('yargs/yargs');
const graphqlLoaderPlugin = require('@luckycatfactory/esbuild-graphql-loader');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

function cwdResolve(name) {
  return path.resolve(process.cwd(), name);
}

const pkg = require(cwdResolve('package.json'));

esbuild.build({
  entryPoints: [
    cwdResolve(argv.file)
  ],
  outdir: 'lib',
  format: 'cjs',
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'node16',
  watch: Boolean(argv.watch),
  plugins: [graphqlLoaderPlugin.default()],
  logLevel: 'warning',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
});
