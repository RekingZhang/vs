module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: '58fe',
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
