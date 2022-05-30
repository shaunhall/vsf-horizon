
const { ArgumentParser } = require('argparse')
const lambdaFunction = require('./edge.js')

const parser = new ArgumentParser({
  description: 'Send a local lambda event defined in a file'
})

parser.add_argument('-f', '--file', { nargs: 1, help: 'file to send (without .json)', required: true, type: String })

const params = parser.parse_args()

const apiGatewayEvent = require('./local_events/' + params.file[0] + '.json')

const context = {
  succeed: (v) => {
    console.info(v)
    process.exit(0)
  }
}
const server = lambdaFunction.handler(apiGatewayEvent, context).then((e, v) => {
  if (e) {
    console.error(e)
    process.exit(1)
  }
  if (v) { console.info(v) }
  process.exit(0)
})

process.stdin.resume()

function exitHandler (options, err) {
  if (options.cleanup && server && server.close) {
    server.close()
  }

  if (err) { console.error(err.stack) }
  if (options.exit) { process.exit() }
}

process.on('exit', exitHandler.bind(null, { cleanup: true }))
process.on('SIGINT', exitHandler.bind(null, { exit: true })) // ctrl+c event
process.on('SIGTSTP', exitHandler.bind(null, { exit: true })) // ctrl+v event
process.on('uncaughtException', exitHandler.bind(null, { exit: true }))
