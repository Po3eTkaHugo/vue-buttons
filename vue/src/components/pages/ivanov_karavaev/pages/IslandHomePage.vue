<template>
  <div class="home-page">
    <HomeHeader />
  </div>
</template>

<script>
import "../fonts/cinaGeoStylesheet.css"
import HomeHeader from "@/components/pages/ivanov_karavaev/components/HomeHeader.vue";

export default {
  name: "IslandHomePage",
  components: {HomeHeader}
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  overflow: auto;
  box-sizing: border-box;
  font-family: 'Cina GEO';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  color: #1a1e18;
  background-color: #fff;
}

h1 {
  font-family: 'Cina GEO';
  font-weight: 700;
  font-style: normal;
}

h2 {
  font-family: 'Cina GEO';
  font-weight: 600;
  font-style: normal;
}

h3 {
  font-family: 'Cina GEO';
  font-weight: 600;
  font-style: normal;
}

</style>