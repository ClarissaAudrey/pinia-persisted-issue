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

// if (process.env.NODE_ENV === "production") {
//   module.exports.configureWebpack = {
//     plugins: [
//       new PrerenderSPAPlugin({
//         staticDir: path.join(__dirname, "dist"),

//         indexPath: path.join(__dirname, "dist", "index.html"),

//         // Required - Routes to render.
//         routes: ["/"],

//         renderer: new Renderer({
//           // Disabling timeout
//           navigationOptions: {
//             timeout: 0,
//           },
//         }),
//       }),
//     ],
//   };
// }
