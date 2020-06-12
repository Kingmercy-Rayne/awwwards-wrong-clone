<template>
  <div id='app'>
    <!-- The-Header is position fixed -->
    <The--Header />
    <router-view />
    <The--Navigation />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    'The--Header': TheHeader,
    'The--Navigation': TheNavigation,
  },
  mounted() {
    // Curb flashing by reenabling visibility that's been defaulted as hidden
    // without Js/GSAP, the body and html attributes remain hidden
    gsap.to('body', 0, { css: { visibility: 'visible' } });
  },
};
</script>

<style lang='stylus'>
@import url('./assets/css/global.css');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
