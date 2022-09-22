/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import '~@/scss/main.scss';",
      },
    },
  },
};
