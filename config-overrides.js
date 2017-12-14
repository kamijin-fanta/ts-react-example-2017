const paths = require('react-scripts-ts/config/paths');

module.exports = {
  jest: function(config) {
    config.globals['ts-jest']['tsConfigFile'] = paths.appTsConfig;
    return config;
  },
};
