import 'cross-fetch/polyfill'

class UnauthorisedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorisedError';
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

const fetchAPI =
  async (operation, variables, options, overrideProtectedFetch) => {
    const opts = Object.assign({}, { protectedFetch: overrideProtectedFetch }, options)
    const overrideQuery = (opts.operationName && operation.replace(/^([a-z]+ )[a-zA-Z]+/, '$1' + opts.operationName)) || operation
    let operationName
    if (opts.operationName) {
      operationName = opts.operationName
    } else {
      const operationNameRegexArray = operation.match(/^[a-z]+ ([a-zA-Z]+)/) || []
      operationName = operationNameRegexArray.pop() || 'undefinedOperation'
    }
    let headers = opts.headers ? opts.headers : {}
    headers['Content-Type'] = 'application/json'
    const res = await fetch((process.env.apiURL || 'https://horizon-api.www.lyleandscott.com') + '/graphql?' + new URLSearchParams({
      operationName
    }), {
      method: 'POST',
      body: JSON.stringify({ query: overrideQuery, variables }),
      headers: headers,
      credentials: 'include'
    }).then((res) => {
      if (res.status >= 400) {
        throw new NetworkError(`${res.status} (${res.statusText})`)
      }
      return res.json()
    })
    if (
      (opts.protectedFetch && res.extensions && res.extensions.flags && !res.extensions.flags.includes('LOGGED_IN'))
      || (opts.protectedFetch && !res.extensions)) {
      throw new UnauthorisedError('User is not logged in')
    }
    return res
  }

export default fetchAPI
