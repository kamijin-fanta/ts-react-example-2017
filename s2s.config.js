require('@babel/register');
const path = require('path');
const tslint = require('s2s-hook-tslint').default;
const typedReactRouter = require('./src/plugins/s2s-typed-react-router').default;

function dir(...p) {
  return path.resolve(process.cwd(), 'src', ...p);
}

module.exports = {
  watch: './**/*.(ts|tsx)',
  plugins: [
    {
      test: /containers[\/\\].+[\/\\]actionTypes\.tsx$/,
      plugin: ['s2s-action-types-ts', {
        removePrefix: 'src/',
      }],
    },
    {
      test: /containers[\/\\].+[\/\\]actionTypes\.tsx$/,
      output: 'actions.tsx',
      plugin: ['s2s-action-creator-ts'],
    },
    {
      test: /containers[\/\\].+[\/\\]actionTypes\.tsx$/,
      input: dir('containers/action.tsx'),
      output: dir('containers/action.tsx'),
      plugin: ['s2s-action-root-ts', {
        input: 'src/containers/**/actionTypes.+(ts|tsx)',
        output: dir('containers/action.tsx'),
      }],
    },
    {
      test: /containers[\/\\].+epic\.tsx$/,
      input: dir('containers/epics.tsx'),
      output: dir('containers/epics.tsx'),
      plugin: ['babel-plugin-s2s-some-root-ts', {
        input: 'src/containers/**/epic.+(ts|tsx)',
        output: dir('containers/epics.tsx'),
        exportType: 'array',
        importName: 'epic',
        exportName: 'epics',
      }],
    },
    {
      test: /routes[\/\\]index\.tsx?$/,
      plugin: typedReactRouter,
    },
  ],
  prettier: false,
  afterHooks: [
    // tslint({
    //   test: /\.(ts|tsx)/,
    // }),
  ],
  templates: [
    {test: /containers[\/\\].*[\/\\]index.tsx$/, input: 'container.tsx'},
    {test: /containers[\/\\].*[\/\\]epic.tsx$/, input: 'epic.tsx'},
    {test: /containers[\/\\].*[\/\\]actionTypes.tsx$/, input: 'actionTypes.tsx'},
    {test: /containers[\/\\].*[\/\\]reducer.tsx$/, input: 'reducer.tsx'},
    {test: /components[\/\\].*[\/\\][A-Z].+.tsx$/, input: 'component.tsx'},
  ],
};
