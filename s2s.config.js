require('@babel/register');
const tslint = require('s2s-hook-tslint').default;
const typedReactRouter = require('./src/plugins/s2s-typed-react-router').default;

module.exports = {
  watch: './**/*.(ts|tsx)',
  plugins: [
    {
      test: /actionTypes.ts$/,
      plugin: ['s2s-action-types-ts', {removePrefix: 'src/'}],
    },
    {
      test: /index.tsx?$/,
      plugin: typedReactRouter,
    },
  ],
  prettier: false,
  afterHooks: [
    tslint({
      test: /\.(ts|tsx)/,
    }),
  ],
};
