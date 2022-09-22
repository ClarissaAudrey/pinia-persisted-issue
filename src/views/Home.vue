<template>
  <div class="home">
    <WelcomeFriz msg="Welcome to Friz Dashboard 2.0" />
    <h1>This page will contain Friz dashboard 2.0.0</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WelcomeFriz from "@/components/WelcomeFriz.vue";

@Options({
  components: {
    WelcomeFriz,
  },
})
export default class Home extends Vue {}
</script>
