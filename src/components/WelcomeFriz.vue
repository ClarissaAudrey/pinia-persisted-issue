<template>
  <div class="friz">
    <h1>{{ msg }}</h1>
    <p>-- Coming Soon --</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class WelcomeFriz extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
