
const withStylus = require('@zeit/next-stylus')
const withESLint = require('next-eslint')

module.exports = withStylus(withESLint())
