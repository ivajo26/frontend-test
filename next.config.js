
const withStylus = require('@zeit/next-stylus')
const withESLint = require('next-eslint')
const autoprefixer = require('autoprefixer-stylus')
const nib = require('nib')


module.exports = withStylus(withESLint(
  {
    stylusLoaderOptions: {
      use: [nib(), autoprefixer({hideWarnings: true})]
    },
  }
))
