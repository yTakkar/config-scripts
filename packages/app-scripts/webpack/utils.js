const path = require('path')
const fs = require('fs')

const env = process.env.NODE_ENV

const isDev = env === 'development'
const isProd = env === 'production'

const projectDir = fs.realpathSync(process.cwd())

const resolvePath = relativePath => path.resolve(projectDir, relativePath)

module.exports = {
  env,
  isDev,
  isProd,
  projectDir,
  resolvePath
}