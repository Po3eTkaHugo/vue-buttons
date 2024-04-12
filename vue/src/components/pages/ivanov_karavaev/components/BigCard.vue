<template>
  <div class="big-card" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="big-card__title">
      <h2>
        {{ title }}
      </h2>
    </div>
    <div class="big-card__description">
      <h3>
        {{ description }}
      </h3>
    </div>
    <div class="big-card__book-btn">
      <router-link :to="{ name: routeNames.ISLANDTOUR, params: { id: 1 } }">
        <button class="big-card__book-btn__button">Book now</button>
      </router-link>
    </div>
    <div class="big-card__bottom">
      <div class="big-card__bottom__scroll-text">Scroll down</div>
      <div class="big-card__bottom__scroll-btn">
        <button class="big-card__bottom__scroll-btn__button">↓</button>
      </div>
      <div class="big-card__bottom__previous-btn">
        <button class="pagination-button" @click="() => clickLeft()">←</button>
      </div>
      <div class="big-card__bottom__next-btn">
        <button class="pagination-button" @click="() => clickRight()">→</button>
      </div>
    </div>
  </div>
</template>

<script>

import {RouteNames} from "@/router/routes";

export default {
  name: "BigCard",
  props: {
    title: {
      type: String,
      required: 'true'
    },
    description: {
      type: String,
      required: 'true'
    },
    image: {
      type: String,
      required: 'true'
    },

  },
  computed: {
    routeNames () {
      return RouteNames
    }
  },
  methods: {
    clickLeft () {
      this.$emit('clickDecr')
    },
    clickRight () {
      this.$emit('clickIncr')
    }
  }
}

</script>

<style scoped lang="less">
h2 {
  color: #fff;
  font-size: 148px;
}

h3 {
  color: #fff;
}

.big-card {
  display: grid;
  padding: 100px 60px 50px;
  border-radius: 20px;
  height: 90vh;
  background-size: cover;
  grid-template: 2fr repeat(4, 1fr) / 3fr 1fr;
  gap: 5px;

  &__title {
    grid-area: 1 / 1 / 2 / 2;
  }

  &__description {
    grid-area: 2 / 1 / 3 / 2;
    color: #fff;
  }

  &__book-btn {
    grid-area: 3 / 1 / 4 / 2;
    display: flex;
    align-items: center;

    &__button {
      height: 10vh;
      width: 30vw;
      border: none;
      background-color: #fff;
      border-radius: 30px;
      font-weight: 600;
      font-size: 32px;

      &:hover {
        filter: brightness(80%);
      }
    }
  }

  &__bottom {
    grid-area: 5 / 1 / 6 / 3;
    display: grid;
    grid-template: 1fr 3fr / 5% 5% auto 10%;
    column-gap: 25px;

    &__scroll-text {
      grid-area: 1 / 4 / 2 / 5;
      color: #fff;
      font-family: 'Cina GEO';
      font-weight: 200;
      font-style: normal;
      font-size: 14px;
      text-align: center;
    }

    &__scroll-btn {
      grid-area: 2 / 4 / 3 / 5;
      display: flex;
      justify-content: center;

      &__button {
        color: #fff;
        font-family: 'Cina GEO';
        font-weight: 100;
        font-style: normal;
        font-size: 32px;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 40px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(3px);

        &:hover {
          background-color: #fff;
          color: #1a1e18;
        }
      }
    }

    &__previous-btn {
      grid-area: 2 / 1 / 3 / 2;
    }

    &__next-btn {
      grid-area: 2 / 2 / 3 / 3;
    }
  }

  .pagination-button {
    color: #fff;
    font-family: 'Cina GEO';
    font-weight: 100;
    font-style: normal;
    font-size: 32px;
    background: none;
    border: solid 2px #fff;
    border-radius: 100%;
    height: 72px;
    width: 72px;

    &:hover {
      background-color: #fff;
      color: #1a1e18;
    }
  }
}

</style>