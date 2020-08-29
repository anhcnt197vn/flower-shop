const createRoutes = require('next-routes')
const routes = createRoutes()

routes
  .add('index', '/')
  .add('card', '/card')
  .add('checkout', '/checkout')
  .add('product', '/product')
  .add('product_detail', '/product_detail/:id')
  .add('signup_activate', '/signup_activate/:id')
  .add('history', '/history')
  .add('profile', '/profile')
  .add('wishlist', '/wishlist')

const Router = routes.Router
const Link = routes.Link

module.exports = {
  routes,
  Router,
  Link,
}
