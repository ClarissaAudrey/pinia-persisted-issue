<template>
  <div class="user-profile-compact">
    <div class="avatar">
      <p>{{ initial }}</p>
    </div>
    {{ username }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    initial: String,
    username: String,
  },
})
export default class UserProfileCompact extends Vue {
  msg!: string;
  username!: string;
}
</script>
