<template>
<div class="second-section">
<div class="second-section__title">
  <h2>Choose your tour</h2>
</div>
<div class="second-section__search">B</div>
<div class="second-section__cards">
  <SmallCard/>
</div>
<div class="second-section__see-all">
  <button class="second-section__see-all__button">See all</button>
</div>
</div>
</template>

<script>
import SmallCard from "@/components/pages/ivanov_karavaev/components/SmallCard.vue";

export default {
  name: "SecondSection",
  components: {SmallCard}
}

</script>

<style scoped lang="less">
h2 {
  font-size: 72px;
}

.second-section {
  display: grid;
  grid-template: 0.5fr 2fr 0.5fr / repeat(2, 1fr);
  margin-top: 100px;
  width: 90vw;
  align-self: center;

  &__title {
    grid-area: 1 / 1 / 2 / 2;
    border: red solid 1px;
  }

  &__search {
    grid-area: 1 / 2 / 2 / 3;
    border: red solid 1px;
  }

  &__cards {
    grid-area: 2 / 1 / 3 / 3;
    border: red solid 1px;
  }

  &__see-all {
    grid-area: 3 / 1 / 4 / 3;
    border: red solid 1px;
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