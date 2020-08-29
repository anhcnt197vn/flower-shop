const next = require('next')
const { routes } = require('./routes.js')
const { createServer } = require('http')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const port = 8080
app.prepare().then(() => {
  createServer(handler).listen(port)
})