<template>
  <div class="home">
    <HomeHeader/>
    <FirstSection class="home__first-section"/>
  </div>
</template>

<script>
import "../fonts/cinaGeoStylesheet.css"
import HomeHeader from "@/components/pages/ivanov_karavaev/components/HomeHeader.vue";
import FirstSection from "@/components/pages/ivanov_karavaev/components/FirstSection.vue";

export default {
  name: "IslandHomePage",
  components: {FirstSection, HomeHeader}
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Cina GEO';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  color: #1a1e18;
}

h1 {
  font-family: 'Cina GEO';
  font-weight: 700;
  font-style: normal;
  font-size: 32px;
}

h2 {
  font-family: 'Cina GEO';
  font-weight: normal;
  font-style: normal;
  color: #fff;
  font-size: 98px;
  line-height: 102%;
}

h3 {
  font-family: 'Cina GEO';
  font-weight: 300;
  font-style: normal;
  color: #fff;
}

.home {
  padding: 20px 20px;
  height: 100vh;
  background-color: #fff;
}

</style>
