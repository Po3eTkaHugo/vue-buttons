<template>
  <div class="container">
    <div class="first-section">
      <div class="first-section__title">
        <h2>Explore the sights of the Azores</h2>
      </div>
      <div class="first-section__description">
        <h3>A place where nature and adventure unite</h3>
      </div>
      <div class="first-section__book-btn">
        <button class="first-section__book-btn__button">Book now</button>
      </div>
      <div class="first-section__scroll-text">D</div>
      <div class="first-section__plugination-btns">E</div>
      <div class="first-section__scroll-btn">G</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSection"
}

</script>

<style scoped lang="less">
.container {
  background-color: red;
  margin: 0 auto;
}

.first-section {
  display: grid;
  margin-top: 20px;
  padding: 100px 60px 50px;
  border-radius: 20px;
  width: 80vw;
  height: 80vh;
  background-image: url("../images/nature1.jpg");
  background-size: cover;
  grid-template: 2fr repeat(4, 1fr) / 3fr 1fr;
  gap: 5px;

  &__title {
    grid-area: 1 / 1 / 1 / 1;
    border: solid red;
  }

  &__description {
    grid-area: 2 / 1 / 2 / 1;
    border: solid red;
    color: #fff;
  }

  &__book-btn {
    grid-area: 3 / 1 / 3 / 1;
    border: solid red;
    display: flex;
    align-items: center;

    &__button {
      height: 80%;
      width: 30%;
      border: none;
      background-color: #fff;
      border-radius: 35px;
      font-weight: 600;
    }
  }

  &__scroll-text {
    grid-area: 4 / 2 / 4 / 2;
    border: solid red;
  }

  &__plugination-btns {
    grid-area: 5 / 1 / 5 / 1;
    border: solid red;
  }

  &__scroll-btn {
    grid-area: 5 / 2 / 5 / 2;
    border: solid red;
  }


}
</style>