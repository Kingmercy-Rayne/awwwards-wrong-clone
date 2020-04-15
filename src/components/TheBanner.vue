<template>
  <section class="main">
    <div class="container">
      <h2>
        <div class="line">
          <span class="subline">Creating Unique brands is </span>
        </div>
        <div class="line">
          <span class="subline">What we do</span>
        </div>
      </h2>
      <div class="btn">
        <a href="#">
          More about us
          <i class="fa fas fa-arrow-right more__icon"></i>
        </a>
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
  padding: 2em 8em 0;
  border: solid thin crimson;
  background-color: #fff;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

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

        .more__icon {
          font-size: 1rem;
          margin-left: 16px;
          border: solid 2px #333;
          width: 1em;
          padding: 0.3em 1.2em 0.3em 0.4em;
          border-radius: 100px;
          transition: 0.4s ease-in-out;

          @media screen and (max-width: 800px) {
            padding: 0.1em 0.9em 0.1em 0.1em;
          }

          @media screen and (max-width: 400px) {
            padding: 0.05em 0.6em 0.05em 0.05em;
          }
        }

        &:hover {
          .more__icon {
            background: #333;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
