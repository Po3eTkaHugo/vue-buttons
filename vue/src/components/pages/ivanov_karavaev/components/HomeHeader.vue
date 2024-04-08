<template>
  <header class="head">
    <div class="head__left-element">
      <h1>island*</h1>
    </div>
    <CenterButton class="head__center-element">Our tours</CenterButton>
    <CenterButton class="head__center-element">About us</CenterButton>
    <CenterButton class="head__center-element">Booking</CenterButton>
    <CenterButton class="head__center-element">FAQ</CenterButton>
    <CenterButton class="head__center-element">Add tour</CenterButton>
    <div class="head__right-element">
      <img src="../images/menu.png"
           alt="menu"
           class="head__right-element__menu-img">
    </div>
  </header>
</template>

<script>

import CenterButton from "@/components/pages/ivanov_karavaev/components/CenterButton.vue";

export default {
  name: "HomeHeader",
  components: {CenterButton}
}
</script>

<style scoped lang="less">
.head {
  display: grid;
  grid-template-columns: 1fr repeat(5, auto)  1fr;
  gap: 100px;
  align-items: center;

  &__right-element {
    text-align: right;

    &__menu-img {
      height: 5vh;
      overflow: hidden;
    }
  }
}


</style>