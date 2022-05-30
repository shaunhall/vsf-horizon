const serverlessExpress = require('@vendia/serverless-express');
process.env.NODE_ENV = 'production';
const { app, start } = require('./express.js');

let serverlessExpressInstance;

async function setup (event, context) {
  await start();
  serverlessExpressInstance = serverlessExpress({ app });
  console.log('Inside Setup', new Date().toUTCString());
  return serverlessExpressInstance(event, context);
}

module.exports.handler = async (event, context) => {
  // set to a modern browser so nuxt serves the modern bundles
  console.log('Start of request', new Date().toUTCString());
  console.log('Request path: %s', event.path);
  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36';
  event.headers['User-Agent'] = userAgent;
  context['user-agent'] = userAgent;
  event.multiValueHeaders['User-Agent'] = [userAgent];
  if (event.path[0] === '/' && event.path.length > 1) {
    event.path = event.path.slice(1, event.path.length);
    event.requestContext.path = event.path;
    event.pathParameters.proxy = event.path;
    console.log('Modified request path: %s', event.path);
  }
  console.log('After header mutation', new Date().toUTCString());
  if (serverlessExpressInstance) {
    return serverlessExpressInstance(event, context);
  }
  console.log('After Serverless Express creation', new Date().toUTCString());
  return await setup(event, context);
};
