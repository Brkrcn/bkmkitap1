import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ec353a0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _1e1d2274 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _309f67d0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _191acc99 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _51729838 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _1e860530 = () => interopDefault(import('..\\pages\\secret.vue' /* webpackChunkName: "pages/secret" */))
const _5698b398 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _660cb431 = () => interopDefault(import('..\\pages\\products-details\\_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _4f732982 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _4ec353a0,
    name: "cart"
  }, {
    path: "/checkout",
    component: _1e1d2274,
    name: "checkout"
  }, {
    path: "/contact",
    component: _309f67d0,
    name: "contact"
  }, {
    path: "/login",
    component: _191acc99,
    name: "login"
  }, {
    path: "/products",
    component: _51729838,
    name: "products"
  }, {
    path: "/secret",
    component: _1e860530,
    name: "secret"
  }, {
    path: "/signup",
    component: _5698b398,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _660cb431,
    name: "products-details-id"
  }, {
    path: "/",
    component: _4f732982,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
