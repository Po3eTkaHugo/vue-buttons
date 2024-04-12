<template>
<div class="pag-dots">
  <div
    v-for="(card, index) in getBigCard"
    :key="index"
    class="pag-dots__figure"
  >
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PaginationDot",
  computed: {
    ...mapGetters('bigCardStore', [
      'getBigCard',
      'getIndex'
    ])
  }
}

</script>

<style scoped lang="less">


</style>