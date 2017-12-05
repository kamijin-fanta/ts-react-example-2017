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
    (code, path) => {
      try {
        let {Linter, Configuration} = require("tslint");
        let linter = new Linter({
          fix: true,
        });
        let conf = Configuration.findConfiguration(undefined, path).results;
        linter.lint(path, code, conf);
        let res = linter.getResult();
        let {fixes} = res;
        let converted = fixes.length ? fixes[fixes.length-1].getRawLines() : code;
        console.log('# converted', res);
        return converted;
      } catch (e) {
        console.error('tslint error', e);
      }
      // throw new Error();
      return code;
    }
  ]
}
