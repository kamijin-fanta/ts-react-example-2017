const paths = require('react-scripts-ts/config/paths');

module.exports = {
  jest: function(config) {
    // do not use tsconfig.test.json at test time
    config.globals['ts-jest']['tsConfigFile'] = paths.appTsConfig;

    // include JS files for testing
    config.testMatch.push('<rootDir>/src/**/?(*.)(spec|test).js');
    config.transform['^.+\\.js$'] = 'babel-jest';

    // ignore watch
    config.watchPathIgnorePatterns = [
      '.*\/node_modules\/.*',
    ];

    return config;
  },
};
