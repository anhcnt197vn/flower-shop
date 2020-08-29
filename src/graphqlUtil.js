import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

let cToken = null

let serverSaved = null
let clientSaved = null

export function setCookieToken(token) {
  cToken = token
}

export function getClient() {
  if (process.browser) {
    if (clientSaved) {
      return clientSaved
    } else {
      clientSaved = getNewClient()
      return clientSaved
    }
  } else {
    if (serverSaved) {
      return serverSaved
    } else {
      serverSaved = getNewClient()
      return serverSaved
    }
  }
}

function getNewClient() {
  return new ApolloClient({
    uri: 'http://localhost:4000',
    fetch: fetch,
    request: operation => {
      let userLocal = null
      let token = ''
      if (process.browser) {
        userLocal = window.localStorage.getItem('user')
        token = JSON.parse(userLocal || '{"token":""}').token
      }
      if (!process.browser && cToken) {
        token = cToken
      }
      operation.setContext({
        headers: {
          authorization: token && token !== '' ? `${token}` : ''
        }
      })
    }
  })
}
