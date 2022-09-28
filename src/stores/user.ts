import { reactive } from "vue";
import { defineStore } from "pinia";

const user = reactive({
  authKey: "",
});

export const useUserStore = defineStore({
  id: "user",
  state: () => user,
  actions: {
    setAuthKey(newAuthKey: string) {
      this.authKey = newAuthKey;
    },
  },
});
