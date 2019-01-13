const merge = require('webpack-merge')

const common = require('./common')
const development = require('./development')
const production = require('./production')

const { isDev } = require('./utils')

const config = () => {
  if (isDev) {
    return merge(common, development)
  } else {
    return merge(common, production)
  }
}

module.exports = config