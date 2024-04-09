<template>
    <div class="first-section">
      <BigCard/>
    </div>
</template>

<script>
import BigCard from "@/components/pages/ivanov_karavaev/components/BigCard.vue";

export default {
  name: "FirstSection",
  components: {BigCard}
}

</script>

<style scoped lang="less">
.first-section {
  margin-top: 20px;
}
</style>