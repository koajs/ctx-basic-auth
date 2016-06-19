'use strict'

/* eslint-env mocha */

const request = require('supertest')
const Koa = require('koa')

const basicAuth = require('..')

describe('Koa Context Basic Auth', () => {
  describe('ctx.request.basicAuth', () => {
    it('should return basic auth info', done => {
      const app = new Koa()
      basicAuth(app)

      app.use((ctx) => {
        const { name, pass } = ctx.request.basicAuth
        ctx.assert.equal(name, 'username')
        ctx.assert.equal(pass, 'password')

        ctx.status = 204
      })

      request(app.listen())
      .get('/')
      .auth('username', 'password')
      .expect(204, done)
    })
  })

  describe('ctx.basicAuth', () => {
    it('should return basic auth info', done => {
      const app = new Koa()
      basicAuth(app)

      app.use((ctx) => {
        const { name, pass } = ctx.basicAuth
        ctx.assert.equal(name, 'username')
        ctx.assert.equal(pass, 'password')

        ctx.status = 204
      })

      request(app.listen())
      .get('/')
      .auth('username', 'password')
      .expect(204, done)
    })
  })
})
