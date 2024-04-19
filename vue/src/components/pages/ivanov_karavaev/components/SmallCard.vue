<template>
  <div class="small-card">
    <img
      :src= image
      alt="trip.jpg"
      class="small-card__pic"
    />
    <div class="small-card__description">
      <div class="small-card__description__rating">
        <div class="small-card__description__rating__place">
          {{ rating }}
          <img
            src="../images/star.png"
            alt="star.png"
            class="small-card__description__rating__place__star"
          />
        </div>
      </div>
      <div class="small-card__description__title">
        {{ title }}
      </div>
      <div class="small-card__description__price">
        <span class="small-card__description__price__count">
          ${{ price }}
        </span>
        <span class="small-card__description__price__slash">/</span>
        <span class="small-card__description__price__person">person</span>
      </div>
      <div class="small-card__description__goto">
        <RouterLink :to="{ name: routeNames.ISLANDTOUR, params: { id: 1 } }">
          <button class="small-card__description__goto__button">→</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {RouteNames} from "@/router/routes";

export default {
  name: "SmallCard",
  props: {
    title: {
      type: String,
      require: 'true'
    },
    price: {
      type: Number,
      require: 'true'
    },
    rating: {
      type: String,
      require: 'true'
    },
    image: {
      type: String,
      require: 'true'
    }
  },
  computed: {
    ...mapGetters('smallCardStore', [
      'getSmallCard'
    ]),
    routeNames () {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">
.small-card {
  border: #e1e1e1 solid 2px;
  border-radius: 20px;
  width: 16vw;
  height: 50vh;
  display: grid;

  &__pic {
    object-fit: cover;
    width: 100%;
    height: 75%;
    border-radius: 20px;
    grid-area: 1 / 1 / 2 / 2;
  }

  &__description {
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    width: 100%;
    height: 100%;
    padding: 20px;
    grid-template: 80% repeat(2, 10%) / 2fr 1fr;

    &__rating {
      grid-area: 1 / 2 / 2 / 3;

      &__place {
        height: 40px;
        border-radius: 20px;
        background-color: rgba(108, 108, 108, 0.25);
        backdrop-filter: blur(5px);
        color: #fff;
        padding: 5px 15px;
        font-weight: 300;
        display: flex;
        align-items: center;

        &__star {
          height: 70%;
          padding-left: 6px;
        }
      }
    }

    &__title {
      grid-area: 2 / 1 / 3 / 2;
      font-weight: 600;
      display: flex;
      align-items: end;
      font-size: 18px;
    }

    &__price {
      grid-area: 3 / 1 / 4 / 2;
      display: flex;
      align-items: end;
      font-size: 10px;
      line-height: 20px;

      &__count {
        font-weight: 700;
      }

      &__slash {
        font-weight: 200;
        font-size: 20px;
      }

      &__person {
        font-size: 12px;
      }
    }

    &__goto {
      grid-area: 2 / 2 / 4 / 3;
      display: flex;
      justify-content: end;
      align-items: end;

      &__button {
        border: none;
        background-color: #1a1e18;
        width: 5vh;
        height: 5vh;
        border-radius: 100%;
        color: #fff;
        font-weight: 200;

        &:hover {
          filter: brightness(200%);
        }
      }
    }
  }
}
</style>
