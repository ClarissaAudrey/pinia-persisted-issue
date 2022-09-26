<template>
  <div class="home">
    <div v-if="!userStore.authKey">
      <WelcomeFriz msg="Friz Dashboard 2.0" />
      <h1>Please login to see Friz Dashboard 2.0</h1>
      <button @click="loginUser">Login</button>
    </div>
    <div v-else>
      <WelcomeFriz msg="Welcome to Friz Dashboard 2.0" />
      <h1>This page will contain Friz dashboard 2.0</h1>
      <div>
        <UserProfileCompact :username="'haha'" :initial="'h'" />
      </div>
      <button @click="logoutUser">logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserProfileCompact from "@/components/UserProfileCompact.vue";
import WelcomeFriz from "@/components/WelcomeFriz.vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const loginUser = () => {
  userStore.setAuthKey("12121");
};

const logoutUser = () => {
  userStore.setAuthKey("");
};
</script>
