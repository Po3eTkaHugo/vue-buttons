<template>
  <div>
    <h1>ABOBA header1</h1>
    <h2>ABOBA header2</h2>
    <h3>ABOBA header3</h3>
    ABOBA regular
  </div>
</template>

<script>

export default {
  name: "IslandHomePage"
}
</script>

<style scoped lang="less">
@font-face {
  font-family: 'Cina GEO';
  src: url('../fonts/CinaGEO-Regular.eot');
  src: local('Cina GEO Regular'), local('CinaGEO-Regular'),
  url('../fonts/CinaGEO-Regular.eot?#iefix') format('embedded-opentype'),
  url('../fonts/CinaGEO-Regular.woff2') format('woff2'),
  url('../fonts/CinaGEO-Regular.woff') format('woff'),
  url('../fonts/CinaGEO-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Cina GEO';
  src: url('../fonts/CinaGEO-SemiBold.eot');
  src: local('Cina GEO SemiBold'), local('CinaGEO-SemiBold'),
  url('../fonts/CinaGEO-SemiBold.eot?#iefix') format('embedded-opentype'),
  url('../fonts/CinaGEO-SemiBold.woff2') format('woff2'),
  url('../fonts/CinaGEO-SemiBold.woff') format('woff'),
  url('../fonts/CinaGEO-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Cina GEO';
  src: url('../fonts/CinaGEO-ExtraBold.eot');
  src: local('Cina GEO ExtraBold'), local('CinaGEO-ExtraBold'),
  url('../fonts/CinaGEO-ExtraBold.eot?#iefix') format('embedded-opentype'),
  url('../fonts/CinaGEO-ExtraBold.woff2') format('woff2'),
  url('../fonts/CinaGEO-ExtraBold.woff') format('woff'),
  url('../fonts/CinaGEO-ExtraBold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

*{
  margin: 0;
  padding: 0;
  overflow: auto;
  box-sizing: border-box;
  font-family: 'Cina GEO';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
}

h1 {
  font-family: 'Cina GEO';
  font-weight: bold;
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