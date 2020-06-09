<template>
  <div class='header'>
    <div class='container'>
      <div class='row'>
        <div class='logo'>
          <a href='#'>AGENCY</a>
        </div>
        <div class='nav__toggle' @click='navToggle'>
          <span class='hamburger first'></span>
          <span class='hamburger second'></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Expo } from 'gsap';

export default {
  name: 'TheHeader',
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    navToggle() {
      this.isNavOpen = !this.isNavOpen;
      const tl = new TimelineLite();
      if (this.isNavOpen) {
        tl.to('nav', 0, { css: { display: 'block' } })
          .to('body', 0, { css: { overflow: 'hidden' } })
          .to('.hamburger.first', 0.3, {
            top: 2.5, rotation: 45, transformOrigin: 'center center', ease: Expo.ease,
          })
          .to('.hamburger.second', 0.3, {
            delay: -0.3, top: -2.5, rotation: -45, transformOrigin: 'center center', ease: Expo.ease,
          })
          .to('.home', 0.8, { delay: -0.4, y: '60vh', ease: Expo.easeInOut });
      } else {
        tl.to('.hamburger.first', 0.3, {
          top: 0, rotation: 0, ease: Expo.ease,
        })
          .to('.hamburger.second', 0.3, {
            delay: -0.3, top: 0, rotation: 0, ease: Expo.ease,
          })
          .to('.home', 0.8, { delay: -0.4, y: 0, ease: Expo.easeInOut })
          .to('body', 0, { css: { overflow: 'auto' } })
          .to('nav', 0, { css: { display: 'none' } });
      }
    },
  },
};
</script>

<style lang='stylus' scoped>
.header {
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;

  .container {
    max-width: 1560px;
    margin: 0 auto;
    height: 100%;
  }

  .row {
    height: 100%;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    a {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: var(--text-color-primary);
    }
  }

  .nav__toggle {
    // border: solid thin green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    flex-direction: column;
    padding: 12px 0 12px 12px;

    .hamburger {
      background: var(--primary-color);
      display: block;
      position: relative;
      height: 2px;
      width: 25px;
      margin-bottom: 5px;
    }
  }
}
</style>
