import { ref } from "vue";
import { defineStore } from "pinia";

const user = ref({
  authKey: "",
});

export const useUserStore = defineStore({
  id: "user",
  state: () => user,
  actions: {
    setAuthKey(newAuthKey: string) {
      user.value.authKey = newAuthKey;
    },
  },
  persist: true,
});
