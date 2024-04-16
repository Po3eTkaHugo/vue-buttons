<template>
<div class="big-card" :style="cardImage">
  <div class="big-card__title">
    <h2 class="big-card__title--head">
      {{ bigCardArray[currentIndex]['title'] }}
    </h2>
  </div>
  <div class="big-card__description">
    <h3 class="big-card__description--text">
      {{ bigCardArray[currentIndex]['description'] }}
    </h3>
  </div>
  <div class="big-card__book-btn">
    <RouterLink :to="{ name: routeNames.ISLANDTOUR, params: { id: 1 } }">
      <button class="big-card__book-btn__button">Book now</button>
    </RouterLink>
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
    <div class="big-card__bottom__dots">
      <div
          v-for="(card, index) in bigCardArray"
          :key="index"
          class="big-card__bottom__dots__figure"
          :class="{ 'big-card__bottom__dots__figure--current': index === currentIndex }"
          @click="() => move(index)"
      >
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {RouteNames} from "@/router/routes";

export default {
  name: "BigCard",
  props: {
    currentIndex: {
      type: Number,
      required: 'true'
    },
    bigCardArray: {
      type: Array,
      required: 'true'
    }
  },
  computed: {
    routeNames () {
      return RouteNames
    },
    cardImage() {
      return { backgroundImage: 'url(' + this.bigCardArray[this.currentIndex]['image'] + ')' }
    }
  },
  methods: {
    clickLeft () {
      this.$emit('clickDecr')
    },
    clickRight () {
      this.$emit('clickIncr')
    },
    move (index) {
      this.$emit('selectCard', index)
    }
  }
}

</script>

<style scoped lang="less">
.big-card {
  display: grid;
  padding: 100px 60px 50px;
  border-radius: 20px;
  height: 90vh;
  background-size: cover;
  grid-template: 60% repeat(4, auto) / 3fr 1fr;
  gap: 5px;

  &__title {
    grid-area: 1 / 1 / 2 / 2;

    &--head {
      color: #fff;
      font-size: 148px;
    }
  }

  &__description {
    grid-area: 2 / 1 / 3 / 2;
    color: #fff;

    &--text {
      color: #fff;
    }
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
      font-family: "Jost", sans-serif;
      font-optical-sizing: auto;
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
        font-family: "Jost", sans-serif;
        font-optical-sizing: auto;
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

    &__dots {
      grid-area: 2 / 3 / 3 / 4;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;

      &__figure {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        background: #fff;
        opacity: 50%;
        cursor: pointer;

        &--current {
          opacity: 100%;
        }
      }
    }
  }
}

.pagination-button {
  color: #fff;
  font-family: "Jost", sans-serif;
  font-optical-sizing: auto;
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
</style>
