<template>
  <div id="app">
    <Intro--Overlay />
    <The--Heather />
    <The--Banner />
    <The--Cases />
    <router-view />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import TheHeather from './components/TheHeather.vue';
import TheBanner from './components/TheBanner.vue';
import TheCases from './components/Cases.vue';
import IntroOverlay from './components/IntroOverlay.vue';

export default {
  components: {
    'The--Heather': TheHeather,
    'The--Banner': TheBanner,
    'The--Cases': TheCases,
    'Intro--Overlay': IntroOverlay,
  },
  mounted() {
    // Curb flashing by preventing default visibility

    gsap.to('body', 0, { css: { visibility: 'visible' } });
    const tl = gsap.timeline();

    tl.from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to('.overlay__top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4,
      })
      .to('.overlay__bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      });
  },
};
</script>

<style lang="stylus">
@import url('./assets/css/global.css');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.intro-overlay {
  .top {
    height: 50vh;
    position: absolute;
    width: 100%;
    z-index: 8;

    .overlay__top {
      // has roots at the bottom and grows up
      // the animation creates a wipe-down/peel-from-the-top effect
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background: #111;
      bottom: 0;
      left: 0;
      right: 0;

      @media screen and (max-width: 800px) {
        width: 100vw;
      }

      &:nth-child(2) {
        left: 33.333%;

        @media screen and (max-width: 800px) {
          display: none;
        }
      }

      &:nth-child(3) {
        left: 66.666%;

        @media screen and (max-width: 800px) {
          display: none;
        }
      }
    }
  }

  .bottom {
    height: 50vh;
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 8;

    .overlay__bottom {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background: #111;
      bottom: 0;
      right: 66.666%;

      @media screen and (max-width: 800px) {
        width: 100vw;
        right: 0;
      }

      &:nth-child(2) {
        right: 33.333%;

        @media screen and (max-width: 800px) {
          width: 100vw;
          top: 100%;
          right: 0;
        }
      }

      &:nth-child(3) {
        right: 0;

        @media screen and (max-width: 800px) {
          width: 100vw;
          top: 200%;
        }
      }
    }
  }
}
</style>
