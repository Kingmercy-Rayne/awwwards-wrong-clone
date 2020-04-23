<template>
  <nav>
    <div class="container">
      <div class="nav-columns">
        <div class="nav-column">
          <div class="nav-label">Menu</div>
          <ul class="nav__links">
            <li>
              <router-link to="/case-studies">Case Studies</router-link>
            </li>
            <li>
              <router-link to="/approach">Approach</router-link>
            </li>
            <li>
              <router-link to="/services">Services</router-link>
            </li>
            <li>
              <router-link to="/about-us">About us</router-link>
            </li>
          </ul>
        </div>
        <div class="nav-column">
          <div class="nav-label">Contact</div>
          <div class="nav-infos">
            <ul class="nav-info">
              <li class="nav-info-label">Email</li>
              <li>
                <router-link to="/contact">Get in touch with us</router-link>
              </li>
              <li>
                <router-link to="/audit">Get a free audit</router-link>
              </li>
            </ul>
            <ul class="nav-info">
              <li class="nav-info-label">Headquarters</li>
              <li>Route du Jura 49</li>
              <li>1700 Fribourg</li>
              <li>Switzerland</li>
            </ul>
            <ul class="nav-info">
              <li class="nav-info-label">Phone</li>
              <li>+41 (0) 75 510 28 70</li>
            </ul>
            <ul class="nav-info">
              <li class="nav-info-label">Legal</li>
              <li>Privacy and Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation',
};
</script>

<style lang="stylus" scoped>
nav {
  position: fixed;
  left: 0;
  top: -1px;
  width: 100%;
  height: 100%;
  z-index: 1;
  // display:none;
  overflow: hiden;
  background: var(--yellow);

  a {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: #222;
      transition: 0.4s ease;
    }

    &:hover {
      color: pink;

      &:after {
        width: 100%;
        left: 0;
        background: #222;
      }
    }
  }

  .nav-columns {
    transform: translateY(125px);
    display: flex;
    padding: 0 32px;

    @media screen and (max-width: 654px) {
      flex-direction: column;
    }

    @media screen and (max-width: 480px) {
      padding: 0 16px;
    }

    .nav-column {
      width: 45%;

      @media screen and (max-width: 654px) {
        width: 100%;
      }

      &:last-child {
        width: 55%;

        @media screen and (max-width: 654px) {
          width: 100%;
        }
      }

      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;

        @media screen and (max-width: 800px) {
          font-size: 1rem;
          margin-bottom: 1.4rem;
        }

        @media screen and (max-width: 480px) {
          font-size: 0.875rem;
          margin-bottom: 1.2rem;
        }
      }

      .nav__links {
        li {
          margin-bottom: 2.4rem;

          @media screen and (max-width: 480px) {
            margin-bottom: 1.6rem;
          }

          a {
            font-weight: 600;
            font-size: 2.8rem;
            text-decoration: none;
            color: var(-text-color-primary);

            @media screen and (max-width: 480px) {
              font-size: 2rem;
            }
          }
        }
      }

      .nav-infos {
        display: flex;
        flex-wrap: wrap;

        @media screen and (max-width: 654px) {
          justify-content: space-between;
        }

        .nav-info {
          width: 50%;

          &:nth-child(2), &:nth-child(3) {
            @media screen and (max-width: 654px) {
              display: none;
            }
          }

          .nav-info-label {
            font-weight: 600;
          }

          li {
            font-weight: 300;
            font-size: 1.4rem;
            margin-bottom: 1.4rem;

            @media screen and (max-width: 800px) {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }

            @media screen and (max-width: 480px) {
              font-size: 1rem;
              margin-bottom: 0.875rem;
            }
          }
        }
      }
    }
  }
}
</style>
