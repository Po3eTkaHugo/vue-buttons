<template>
  <header class="head">
    <div class="head__left-element">
      <router-link :to="{ name: routeNames.ISLANDHOME }">
        <button class="head__left-element__home-btn">island*</button>
      </router-link>
    </div>
    <CenterButton class="head__center-element">Our tours</CenterButton>
    <CenterButton class="head__center-element">About us</CenterButton>
    <CenterButton class="head__center-element">Booking</CenterButton>
    <CenterButton class="head__center-element">FAQ</CenterButton>
    <router-link :to="{ name: routeNames.ISLANDADDTOUR }">
      <CenterButton class="head__center-element">Add tour</CenterButton>
    </router-link>
    <div class="head__right-element">
      <img src="../images/menu.png"
           alt="menu"
           class="head__right-element__menu-img">
    </div>
  </header>
</template>

<script>

import CenterButton from "@/components/pages/ivanov_karavaev/components/CenterButton.vue";
import {RouteNames} from "@/router/routes";

export default {
  name: "HomeHeader",
  computed: {
    routeNames () {
      return RouteNames
    }
  },
  components: {CenterButton}
}
</script>

<style scoped lang="less">
.head {
  display: grid;
  grid-template-columns: 1fr repeat(5, auto)  1fr;
  gap: 100px;
  align-items: center;

  &__left-element__home-btn {
    border: none;
    background: none;
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;
  }

  &__right-element {
    text-align: right;

    &__menu-img {
      height: 5vh;
      overflow: hidden;
    }
  }
}


</style>