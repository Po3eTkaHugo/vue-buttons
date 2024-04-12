<template>
<footer class="foot">
  <div class="foot__island">
    <h1>island*</h1>
    <p>A place where nature and adventure unite</p>
  </div>
  <div class="foot__about">
    <p class="p-header">About us</p>
    <p>Our guides</p>
    <p>Blog</p>
    <p>Contact us</p>
  </div>
  <div class="foot__faq">
    <p class="p-header">FAQ</p>
    <p>Personal trip</p>
    <p>Group trip</p>
    <p>Tour payment</p>
  </div>
  <div class="foot__further">
    <p class="p-header">Further information</p>
    <p>Terms of use</p>
    <p>Health & safety</p>
    <p>Privacy policy</p>
  </div>
  <div class="foot__hr">
  </div>
  <div class="foot__copyright">
    <p>Copyright 2023 islandLLC-1101 12th, New York, USA</p>
  </div>
  <div class="foot__contacts">
    <img
      src="../images/facebook.svg"
      alt="facebook.svg"
      class="foot__contacts__icons"
    >
    <img
      src="../images/instagram.png"
      alt="instagram.svg"
      class="foot__contacts__icons"
    >
    <img
      src="../images/youtube.png"
      alt="youtube.png"
      class="foot__contacts__icons"
    >
  </div>
</footer>
</template>

<script>
export default {
  name: "HomeFooter"
}

</script>

<style scoped lang="less">
.foot {
  display: grid;
  margin-top: 100px;
  height: 40vh;
  background-color: #f4f4f4;
  padding: 65px 80px 45px;
  border-radius: 20px;
  grid-template: 3fr 1fr / repeat(6, 1fr);

  &__island {
    grid-area: 1 / 1 / 2 / 2;
  }
  &__about {
    grid-area: 1 / 4 / 2 / 5;
  }
  &__faq {
    grid-area: 1 / 5 / 2 / 6;
  }
  &__further {
    grid-area: 1 / 6 / 2 / 7;
  }
  &__hr {
    grid-area: 2 / 1 / 3 / 7;
    border-bottom: #1a1e18 solid 1px;
  }
  &__copyright {
    grid-area: 3 / 1 / 4 / 6;
    display: flex;
    align-items: center;
  }
  &__contacts {
    padding: 10px 0;
    grid-area: 3 / 6 / 4 / 7;
    display: grid;
    grid-template: auto / repeat(3, 1fr);

    &__icons {
      width: 50px;
    }
  }
}

p {
  margin: 5px 0;
  font-size: 16px;
}
.p-header {
  font-weight: 700;
}
</style>
