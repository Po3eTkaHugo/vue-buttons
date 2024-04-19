<template>
<div class="tour island-styles">
  <HomeHeader/>
  <div class="tour__card" :style="cardImage">
    <h2 class="tour__card__title">
      {{ getSmallCard[$route.params.id]['title'] }}
    </h2>
    <p class="tour__card__rating">
      Rating: {{ getSmallCard[$route.params.id]['rating'] }}
    </p>
    <p class="tour__card__price">
      Price: ${{ getSmallCard[$route.params.id]['price'] }} per person
    </p>
    <button class="tour__card__book">BOOK NOW</button>
  </div>
</div>
</template>

<script>
import HomeHeader from "@/components/pages/ivanov_karavaev/components/HomeHeader.vue";
import {mapGetters} from "vuex";

export default {
  name: "TourPage",
  components: {HomeHeader},
  computed: {
    ...mapGetters('smallCardStore', [
      'getSmallCard'
    ]),
    cardImage() {
      return { backgroundImage: 'url(' + this.getSmallCard[this.$route.params.id]['image'] + ')' };
    }
  }
}
</script>

<style scoped lang="less">
.tour {
  padding: 20px 20px;
  height: 95.7vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  &__card {
    margin-top: 20px;
    padding: 10px 50px;
    flex: 1 1 auto;
    flex-direction: column;
    border-radius: 20px;
    background-size: cover;
    line-height: 130px;

    &__title {
      color: #fff;
      font-size: 148px;
      text-align: center;
    }

    &__rating {
      color: #fff;
      font-size: 96px;
    }

    &__price {
      color: #fff;
      font-size: 96px;
    }

    &__book {
      background: none;
      color: #fff;
      border: #fff solid 3px;
      border-radius: 20px;
      font-size: 48px;
      font-weight: 700;
      width: 30%;
      height: 10%;

      &:hover {
        background: #fff;
        color: #1a1e18;
      }
    }
  }
}
</style>
