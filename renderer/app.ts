import { createSSRApp, defineComponent, h } from "vue";
import App from "./App.vue";
import { setPageContext } from "./usePageContext";
import type { PageContext } from "./types";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export { createApp };

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(
        App,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  const store = createPinia();
  store.use(piniaPluginPersistedstate);
  app.use(store);

  return { app, store };
}
