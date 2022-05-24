const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: path.resolve('./loader.js'),
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.gql'],
  }
}

const nodeConfig = {
  target: 'node',
  entry: {
    'node/index': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: '[name].js',
    libraryTarget: 'umd',
  }
}

const webConfig = {
  target: 'web',
  entry: {
    'browser/index': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  }
}

module.exports = () => {
  Object.assign(nodeConfig, config)
  Object.assign(webConfig, config)
  return [nodeConfig, webConfig]
}
