<template>
  <div class="user-profile-compact">
    <div class="avatar">
      <p>{{ initial }}</p>
    </div>

    <p class="user-profile-compact-username">
      {{ username }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  initial: string;
  username: string;
}>();
</script>

<style lang="scss">
.user-profile-compact {
  @include flexCenter;
  flex-direction: column;

  &-username {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
}
</style>
