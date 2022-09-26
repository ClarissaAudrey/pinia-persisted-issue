import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../views/HomeScreen.vue";
import UserScreen from "../views/UserScreen.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeScreen",
      component: HomeScreen,
    },
    {
      path: "/user/:username",
      name: "UserScreen",
      component: UserScreen,
    },
  ],
});

export default router;
