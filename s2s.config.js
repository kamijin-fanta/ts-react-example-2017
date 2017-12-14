require('babel-register');
const tslint = require('s2s-hook-tslint').default;

module.exports = {
  watch: './**/*.ts',
  plugins: [
    {
      test: /actionTypes.ts$/,
      plugin: ['s2s-action-types-ts', { removePrefix: 'src/' }],
    },
  ],
  prettier: false,
  afterHooks: [
    tslint({
      test: /\.(ts|tsx)/,
    })
  ]
}
