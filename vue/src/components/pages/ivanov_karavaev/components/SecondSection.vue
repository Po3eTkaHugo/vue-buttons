<template>
  <div class="second-section">
    <div class="second-section__title">
      <h2 class="second-section__title--header">Choose your tour</h2>
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
        v-for="(card, index) in smallCards"
        :key="index"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import SmallCard from "@/components/pages/ivanov_karavaev/components/SmallCard.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SecondSection",
  components: {
    SmallCard
  },
  data() {
    return {
      searchingWords: ''
    }
  },
  computed: {
    ...mapGetters('smallCardStore', [
      'getSmallCard'
    ]),
    smallCards () {
      return this.getSmallCard
    }
  },
  methods: {
    ...mapActions('smallCardStore', [
      'loadSmallCard'
    ])
  },
  created () {
    this.loadSmallCard('')
  },
  watch: {
    searchingWords(words) {
      this.loadSmallCard(words)
    }
  }
}
</script>

<style scoped lang="less">
.second-section {
  display: grid;
  grid-template: 1fr auto / repeat(2, 1fr);
  margin-top: 100px;
  width: 90vw;
  align-self: center;

  &__title {
    grid-area: 1 / 1 / 2 / 2;

    &--header {
      font-size: 72px;
    }
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
    row-gap: 35px;
  }
}

</style>
