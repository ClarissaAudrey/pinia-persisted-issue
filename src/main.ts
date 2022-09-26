import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.mount("#app");
