<template>
  <div id="app">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <back-canvas></back-canvas>
      <div class="main-container">
        <router-view/>
      </div>
      <!-- <front-canvas></front-canvas> -->
  </div>
</template>

<script>
import BackCanvas from '@/components/BackCanvasCmp.vue';
import FrontCanvas from '@/components/FrontCanvasCmp.vue';

export default {
  name: 'App',
  components: {
    BackCanvas,
    FrontCanvas,
  },
};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

@font-face {
  font-family: Corben;
  src: url('../lib/fonts/Corben/Corben-Regular.ttf');
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-container {
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  // background-color: #2c3e5010;
}
</style>
