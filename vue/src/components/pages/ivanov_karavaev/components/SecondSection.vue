<template>
<div class="second-section">
<div class="second-section__title">
  <h2>Choose your tour</h2>
</div>
<div class="second-section__search">
  <input
      v-model="searchingWords"
      type="text"
      placeholder="Find your travel"
      class="second-section__search__input"
  />
</div>
<div class="second-section__cards">
  <SmallCard
    v-for="(card, index) in filteredCards"
    :key="index"
    :title="card.title"
    :price="card.price"
    :rating="card.rating"
    :image="card.image"
  />
</div>
<div class="second-section__see-all">
  <button class="second-section__see-all__button">See all</button>
</div>
</div>
</template>

<script>
import SmallCard from "@/components/pages/ivanov_karavaev/components/SmallCard.vue";
import {mapGetters} from "vuex";

export default {
  name: "SecondSection",
  components: {SmallCard},
  data () {
    return {
      searchingWords: ''
    }
  },
  computed: {
    ...mapGetters('smallCardStore', [
        'getSmallCard',
        'getFilteredCards'
    ]),
    filteredCards () {
      return this.getFilteredCards(this.searchingWords)
    }
  }
}

</script>

<style scoped lang="less">
h2 {
  font-size: 72px;
}

.second-section {
  display: grid;
  grid-template: 1fr auto 1fr / repeat(2, 1fr);
  margin-top: 100px;
  width: 90vw;
  align-self: center;

  &__title {
    grid-area: 1 / 1 / 2 / 2;
  }

  &__search {
    grid-area: 1 / 2 / 2 / 3;

    &__input {
      width: 100%;
      height: 100%;
      font-size: 32px;
    }
  }

  &__cards {
    grid-area: 2 / 1 / 3 / 3;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px 0;
  }

  &__see-all {
    grid-area: 3 / 1 / 4 / 3;
    display: flex;
    align-items: center;
    justify-content: center;

    &__button {
      border: solid #1a1e18 1px;
      background: none;
      color: #1a1e18;
      border-radius: 25px;
      width: 15%;
      height: 75%;
    }
  }

}

</style>