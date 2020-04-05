module.exports = (api, options, rootOptions) => {
  // 扩展 pakage.json
  api.extendPackage({
    dependencies: {
      axios: "^0.18.0",
      "js-cookie": "^2.2.0",
      "normalize.css": "^8.0.1",
    },
    devDependencies: {
      "git-cz": "^2.0.0",
      "compression-webpack-plugin": "^2.0.0",
    },
    scripts: {
      dev: "vue-cli-service serve",
      "build:testing": "vue-cli-service build --mode testing",
      "build:staging": "vue-cli-service build --mode staging",
      "build:production": "vue-cli-service build",
      commit: "git add . && npx git-cz",
    },
    config: {
      commitizen: {
        path: "./node_modules/git-cz",
      },
    },
    gitHooks: {
      "commit-msg": "node scripts/verifyCommitMsg.js",
    },
  });
};
