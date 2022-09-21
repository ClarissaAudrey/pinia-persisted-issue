<template>
  <div class="home">
    <div v-if="!authKey">
      <WelcomeFriz msg="Friz Dashboard 2.0" />
      <h1>Please login to see Friz Dashboard 2.0</h1>
      <button @click="loginUser">Login</button>
    </div>
    <div v-else>
      <WelcomeFriz msg="Welcome to Friz Dashboard 2.0" />
      <h1>This page will contain Friz dashboard 2.0</h1>
      <UserProfileCompact :username="username" :initial="userInitial" />
      <button @click="logoutUser">logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { USER_PROFILES } from "@/common/mockData";
import { commitSetAuthKey, commitUserReset, readAuthKey } from "@/store/user";
import { store } from "@/store";

import UserProfileCompact from "@/components/UserProfileCompact.vue";
import WelcomeFriz from "@/components/WelcomeFriz.vue";
import router from "@/router";

@Options({
  components: {
    UserProfileCompact,
    WelcomeFriz,
  },
})
export default class User extends Vue {
  private authKey = readAuthKey(store);
  private username = "";
  private userProfiles = USER_PROFILES;
  private userInitial = "";

  created() {
    this.unsubscribe();
    this.username = router.currentRoute.value.params.username.toString();
    const userProfile = USER_PROFILES.find(
      (value) => value.username == this.username
    );
    this.userInitial = userProfile?.initial ?? "";
  }

  beforeUnmount() {
    this.unsubscribe();
  }

  private unsubscribe() {
    store.subscribe((mutation) => {
      switch (mutation.type) {
        case "user/setAuthKey":
          this.authKey = readAuthKey(store);
          break;
        case "user/reset":
          this.authKey = readAuthKey(store);
          break;
      }
    });
  }

  loginUser() {
    commitSetAuthKey(store, "hoho");
  }

  logoutUser() {
    commitUserReset(store);
  }
}
</script>
