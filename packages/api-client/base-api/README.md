#Horizon Base API

This is an abraction layer on top of horizon to provide pre-built queries and mutations to end users.

##Usage

This repository will spawn modules, 1 for the browser environment and 1 for the node environment:
- Browser Modules:
  - `@horizon-base-api/browser`
- Node Modules:
  - `@horizon-base-api/node`

##Options

The default api URL is `https://horizon-api.www.lyleandscott.com`. You can override this by setting the `apiURL` environment variable.

##Development

Currently this is linked to storefront as a local module and bundled using Webpack. If a change is made to the base api source files, please run `npm run build:prod` to bundle these changes into the `prod` folder. 
