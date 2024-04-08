<template>
  <div class="home">
    <HomeHeader/>
    <FirstSection/>
    <SecondSection/>
  </div>
</template>

<script>
import "../fonts/cinaGeoStylesheet.css"
import HomeHeader from "@/components/pages/ivanov_karavaev/components/HomeHeader.vue";
import FirstSection from "@/components/pages/ivanov_karavaev/components/FirstSection.vue";
import SecondSection from "@/components/pages/ivanov_karavaev/components/SecondSection.vue";

export default {
  name: "IslandHomePage",
  components: {SecondSection, FirstSection, HomeHeader}
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
}

h3 {
  font-family: 'Cina GEO';
  font-weight: 300;
  font-style: normal;
}

.home {
  padding: 20px 20px;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

</style>
