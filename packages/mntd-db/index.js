'use strict'

const Redis = require('ioredis')
const db = require('./models')

db.createRedisClient = () => {
  return new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_URI,
    password: process.env.REDIS_PASS
  })
}

module.exports = db
