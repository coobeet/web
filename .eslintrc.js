module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: [`@coobeet`],
  settings: {
    next: {
      rootDir: [`apps/*/`],
    },
  },
};
