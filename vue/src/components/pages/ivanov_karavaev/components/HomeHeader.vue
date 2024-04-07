<template>
  <header class="head">
    <div class="head__left-element">A</div>
    <CenterButton class="head__center-element">Our tours</CenterButton>
    <CenterButton class="head__center-element">About us</CenterButton>
    <CenterButton class="head__center-element">Booking</CenterButton>
    <CenterButton class="head__center-element">FAQ</CenterButton>
    <CenterButton class="head__center-element">Add</CenterButton>
    <div class="head__right-element">A</div>
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
head {
  display: grid;
  grid-template-columns: 1fr auto 1fr;

}

</style>