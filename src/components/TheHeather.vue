<template>
  <div class="heather__container">
    <div class="logo">
      <a href="#">AGENCY.</a>
    </div>
    <div class="nav__toggle">
      <span class="hamburger"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeather',
};
</script>

<style lang="stylus" scoped>
.heather__container {
  padding: 0 8em;
  margin-top: 2em;
  position: fixed;
  width: 100%;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    // border: solid thin blue;
    padding: 1em;

    a {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: var(--text-color-primary);
    }
  }

  .nav__toggle {
    width: 8%;
    // border: solid thin green;
    display: flex;
    justify-content: center;
    align-items: center;

    .hamburger {
      background: var(--primary-color);
      display: block;
      position: relative;
    }

    .hamburger:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 6px;
      background: var(--primary-color);
    }

    .hamburger, .hamburger::before {
      height: 0.2rem;
      width: 1.4rem;
    }
  }
}
</style>
