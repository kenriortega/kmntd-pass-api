'use strict'

const Redis = require('ioredis')
const db = require('./models')

db.createRedisClient = () => {
  return new Redis(process.env.REDIS_PORT, process.env.REDIS_URI)
}

module.exports = db
