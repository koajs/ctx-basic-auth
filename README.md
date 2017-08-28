# Koa Context Basic Auth

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/koajs/ctx-basic-auth.svg)](https://greenkeeper.io/)
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Augments Koa with `const { name, pass } = ctx.basicAuth` and `ctx.request.basicAuth`.

## Example

```js
const Koa = require('koa')

const app = new Koa()

require('koa-ctx-basic-auth')(app)

app.use(async (ctx, next) => {
  const { name, pass } = ctx.basicAuth
  // OR
  const { name, pass } = ctx.request.basicAuth

  await next()
})
```

[npm-image]: https://img.shields.io/npm/v/koa-ctx-basic-auth.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-ctx-basic-auth
[travis-image]: https://img.shields.io/travis/koajs/ctx-basic-auth/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/koajs/ctx-basic-auth
[codecov-image]: https://img.shields.io/codecov/c/github/koajs/ctx-basic-auth/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/koajs/ctx-basic-auth
[david-image]: http://img.shields.io/david/koajs/ctx-basic-auth.svg?style=flat-square
[david-url]: https://david-dm.org/koajs/ctx-basic-auth
[license-image]: http://img.shields.io/npm/l/koa-ctx-basic-auth.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/koa-ctx-basic-auth.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-ctx-basic-auth
