<template>
<div class="first-section">
  <BigCard
    :title="getBigCard[getIndex]['title']"
    :description="getBigCard[getIndex]['description']"
    :image="getBigCard[getIndex]['image']"
    @clickDecr="() => decrIndex()"
    @clickIncr="() => incrIndex()"
  />
</div>
</template>

<script>
import BigCard from "@/components/pages/ivanov_karavaev/components/BigCard.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FirstSection",
  components: {BigCard},
  computed: {
    ...mapGetters('bigCardStore', [
      'getBigCard',
      'getIndex'
    ])
  },
  methods: {
    ...mapActions('bigCardStore', [
      'incrIndex', 'decrIndex'
    ])
  }
}

</script>

<style scoped lang="less">
.first-section {
  margin-top: 20px;
}
</style>
