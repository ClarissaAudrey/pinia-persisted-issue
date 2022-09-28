<template>
  <div class="home">
    <WelcomeFriz msg="Welcome to Friz Dashboard 2.0" />
    <h1>This page will contain Friz dashboard 2.0.0</h1>
    <div class="home-users">
      <div
        class="home-users-profile"
        v-for="(profile, index) in USER_PROFILES"
        :key="index"
      >
        <!-- <router-link
          class="no-decoration"
          :to="{ path: '/user', params: { username: profile.username } }"
        > -->
        <UserProfileCompact
          :initial="profile.initial"
          :username="profile.username"
        />
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WelcomeFriz from "@/components/WelcomeFriz.vue";
import UserProfileCompact from "@/components/UserProfileCompact.vue";
import { USER_PROFILES } from "@/common/mockData";
</script>

<style lang="scss">
.home {
  &-users {
    display: flex;

    &-profile {
      margin-right: 2rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
