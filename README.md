## Simulating an API Gateway/Lambda invocation

Run the following command from the `app` folder:

`NUXT_TELEMETRY_DISABLED=1 node server/send-local-event.js -f "product-api"`

Where the file argument corresponds to the name of the file in the `local_events` folder without the `.json` extension.

## Running a local express server in isr mode

Run the following command from the `app` folder:

`npm run build-isr-express`

This will trigger a `nuxt build` followed by launching the express server. To launch the server only, run `npm run isr-express`