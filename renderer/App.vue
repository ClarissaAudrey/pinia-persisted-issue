<template>
  <div id="app">
    <div class="content"><slot /></div>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Lato", sans-serif;
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: subpixel-antialiased;
  box-sizing: border-box;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", sans-serif;
  }
}
</style>
