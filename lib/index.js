'use strict'

const basicAuth = require('basic-auth')

module.exports = app => {
  Object.defineProperty(app.request, 'basicAuth', {
    get () {
      return basicAuth(this.req)
    }
  })

  Object.defineProperty(app.context, 'basicAuth', {
    get () {
      return basicAuth(this.req)
    }
  })

  return app
}
