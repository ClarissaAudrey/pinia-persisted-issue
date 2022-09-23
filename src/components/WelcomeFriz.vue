<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="friz">
    <h1>{{ msg }}</h1>
    <p>-- Coming Soon --</p>
  </div>
</template>

<style lang="scss">
.friz {
  h1 {
    font-size: 3rem;
  }

  p {
    margin: 2rem 0;
    font-size: 2rem;
  }
}
</style>
