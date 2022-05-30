const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const config = require('./nuxt.config.js');

const app = express();
config.dev = false;
process.env.SERVER_SIDE = 'true';

const setCache = (req, res, next) => {
  if (req.headers['cache-bypass'] && req.headers['cache-bypass'] === process.env.CACHE_BYPASS) {
    res.set('Cache-control', 'public, max-age=0, s-maxage=0, stale-while-revalidate=0');
  } else {
    res.set('Cache-control', 'public, max-age=600, s-maxage=3600, stale-while-revalidate=86400');
  }

  next();
};

const setLambdaHeaders = (req, res, next) => {
  const traceId = process.env._X_AMZN_TRACE_ID;
  let lambdaName = process.env.AWS_LAMBDA_FUNCTION_NAME;
  lambdaName = lambdaName ? lambdaName.substring(lambdaName.length - 12, lambdaName.length) : lambdaName;
  const lambdaVersion = process.env.AWS_LAMBDA_FUNCTION_VERSION;

  res.set('l-trace', traceId);
  res.set('l-name', lambdaName);
  res.set('l-version', lambdaVersion);

  next();
};

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(setCache);
  app.use(setLambdaHeaders);

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

module.exports = { app, start };
