<template>
  <section class="main">
    <div class="container">
      <div class="row">
        <h2>
          <div class="line">
            <span>Creating unique brands is </span>
          </div>
          <div class="line">
            <span>what we do.</span>
          </div>
        </h2>
        <div class="btn">
          <a href="#">
            More about us
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheBanner',
};
</script>

<style lang="stylus" scoped>
.main {
  height: 50vh;
  background-color: #fff;

  .container {
    width: 100%;
    max-width: 1560px;
    margin: 0 auto;
    height: 100%;

    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding: 0 32px;
    }

    h2 {
      font-size: 3rem;
      line-height: 4.2rem;
      font-weight: 700;
      z-index: 10;
      color: #fff;
      mix-blend-mode: difference;

      @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 2.4rem;
      }

      @media screen and (max-width: 800px) {
        font-size: 1.7rem;
        line-height: 2.2rem;
        // debatable
        margin-top: 72px;
      }

      .line {
        margin-bottom: 8px;
        height: 56px;
        position: relative;
        overflow: hidden;

        // border: solid thin cyan;
        @media screen and (max-width: 800px) {
          height: 48px;
        }

        @media screen and (max-width: 400px) {
          height: 32px;
        }

        span {
          position: absolute;
        }
      }
    }

    .btn {
      width: 256px;
      position: relative;
      z-index: 2;

      a {
        font-size: 1.6rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 600;
        color: #333;

        @media screen and (max-width: 800px) {
          font-size: 1.3rem;
        }

        @media screen and (max-width: 800px) {
          font-size: 1.1rem;
        }

        svg {
          margin-left: 16px;
          border: 2px solid #000;
          padding: 12px;
          height: 52px;
          width: 52px;
          border-radius: 100px;
          transition: 0.4s ease-in-out;
        }

        &:hover {
          svg {
            background: #333;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
