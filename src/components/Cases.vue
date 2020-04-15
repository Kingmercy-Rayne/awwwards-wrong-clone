<template>
  <section class="cases">
    <div class="cases__navigation">
      <div class="cases__arrow cases__arrow--prev disabled">
        <i class="fa fas fa-arrow-left direction__svg"></i>
      </div>
      <div class="cases__arrow cases__arrow--next">
        <i class="fa fas fa-arrow-right direction__svg"></i>
      </div>
    </div>

    <div class="row">
      <div v-for="(item, index) in caseStudies" class="case" :key="index">
        <div class="case__details">
          <span>{{ item.subtitle }}</span>
          <h2 class="case__title">{{ item.title }}</h2>
        </div>
        <div class="case__img">
          <img
            :src="require(`@/assets/img/${item.img}.png`)"
            :alt="item.title"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheCases',
  data() {
    return {
      caseStudies: [
        {
          id: 1,
          subtitle: 'Curology',
          title: "A custom Formula for your skin's unique needs",
          img: 'curology-min',
        },
        {
          id: 2,
          subtitle: 'Yourspace',
          title: 'Open space floor plans for your next venture',
          img: 'yourspace-min',
        },
        {
          id: 3,
          subtitle: 'Lumin',
          title: 'For your best look ever',
          img: 'lumin-min',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.cases {
  height: 50vh;
  width: 100%;
  position: relative;

  .cases__navigation {
    // border: solid thin blue;
    position: absolute;
    width: 100%;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;
    padding: 1.8rem;

    @media screen and (max-width: 800px) {
      display: none;
    }

    .cases__arrow {
      background: rgba(0, 0, 0, 0.4);
      height: 72px;
      width: 72px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .direction__svg {
        color: #fff;
        font-size: 1.4rem;
      }

      &.disabled {
        opacity: 0.3;
      }
    }
  }

  .row {
    display: flex;

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }

    .case {
      position: relative;
      background: #333;
      cursor: pointer;
      width: 33.3%;

      &:hover {
        .case__img {
          opacity: 0.4;
        }
      }

      @media screen and (max-width: 800px) {
        width: 100%;
      }

      .case__details {
        width: 80%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 32px;
        z-index: 1;
        position: relative;

        @media screen and (max-width: 800px) {
          width: 100vw;
        }

        @media screen and (max-width: 400px) {
          padding: 16px;
        }

        .case__title {
          font-size: 2.4rem;
          line-height: 3.4rem;
          width: 85%;
          margin-top: 16px;
          color: #ddd;

          @media screen and (min-width: 800px) and (max-width: 1920px) {
            font-size: 2rem;
            line-height: 2.4rem;
          }

          @media screen and (max-width: 400px) {
            font-size: 1.7rem;
            line-height: 2.2rem;
            margin-top: 8px;
          }
        }

        span {
          font-size: 1.6rem;
          margin-top: 156px;
          opacity: 0.8;
          color: #ddd;
          font-weight: 600;

          @media screen and (min-width: 800px) and (max-width: 1920px) {
            font-size: 1.4rem;
          }

          @media screen and (max-width: 400px) {
            font-size: 1.2rem;
            line-height: 2.2rem;
          }
        }
      }

      .case__img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        opacity: 0.65;
        transition: 0.4s cubic-bezier(0.6, -0.5, 0.1, 0.95);

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
