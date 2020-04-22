<template>
  <div class="home">
    <!-- Intro--overlay is positioned absolute to #app -->
    <Intro--Overlay v-if="!animationCompleted" />
    <!-- Banner takes up half the VH -->
    <The--Banner />
    <!-- Cases takes up half the VH -->
    <The--Cases />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import TheBanner from '../components/TheBanner.vue';
import TheCases from '../components/Cases.vue';
import IntroOverlay from '../components/IntroOverlay.vue';

export default {
  name: 'Services',
  components: {
    'The--Banner': TheBanner,
    'The--Cases': TheCases,
    'Intro--Overlay': IntroOverlay,
  },
  mounted() {
    // Init timeline as tl
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
      })
      .to('.intro-overlay', 0, { css: { display: 'none' } })
      .from('.case__img img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -2,
        stagger: {
          amount: 0.4,
        },
        onComplete: this.setAnimationComplete,
      });
  },
  data() {
    return {
      animationCompleted: false,
    };
  },
  methods: {
    setAnimationComplete() {
      this.animationCompleted = 1;
    },
  },
};
</script>

<style lang="stylus">
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
      // create all three boxes in the mid-section the separate from there
      position: absolute;
      bottom: 0;
      right: 66.666%;
      height: 100%;
      width: 33.333vw;
      background: #111;

      @media screen and (max-width: 800px) {
        width: 100vw;
        right: 0;
      }

      &:nth-child(2) {
        // techinically, this becomes the first overlay in the row
        // The right value of nth(2) could be swapped with the default right value of the class
        right: 33.333%;

        @media screen and (max-width: 800px) {
          width: 100vw;
          // Vertical origin at the bottom of the first box
          top: 100%;
          right: 0;
        }
      }

      &:nth-child(3) {
        // Trailing overlay box
        right: 0;

        @media screen and (max-width: 800px) {
          width: 100vw;
          // Vertical origin at the bottom of the secons box
          top: 200%;
        }
      }
    }
  }
}
</style>
