<template>
<div class="first-section">
    <BigCard v-if="bigCards.length > 0"
        :currentIndex="currentIndex"
        :arraySize="bigCards.length"
        :bigCard="currentBigCard"
        @clickDecr="() => decrIndex()"
        @clickIncr="() => incrIndex()"
        @selectCard="(index) => selectCard(index)"
    />
</div>
</template>

<script>
import BigCard from "@/components/pages/ivanov_karavaev/components/BigCard.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FirstSection",
  components: {
    BigCard
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    ...mapGetters('bigCardStore', [
      'getBigCard'
    ]),
    bigCards () {
      return this.getBigCard
    },
    currentBigCard () {
      return this.bigCards[this.currentIndex]
    }
  },
  methods: {
    ...mapActions('bigCardStore', [
      'loadBigCard'
    ]),
    incrIndex ()  {
      if (this.currentIndex === this.getBigCard.length - 1) {
        this.currentIndex = 0
      }
      else {
        this.currentIndex += 1
      }
    },
    decrIndex () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.getBigCard.length - 1
      }
      else {
        this.currentIndex -= 1
      }
    },
    selectCard (index) {
      this.currentIndex = index
    }
  },
  created () {
    this.loadBigCard()
  }
}
</script>

<style scoped lang="less">
.first-section {
  margin-top: 20px;
}
</style>
