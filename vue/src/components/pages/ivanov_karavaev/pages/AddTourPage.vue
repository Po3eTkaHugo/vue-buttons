<template>
<div class="add-page island-styles">
  <HomeHeader/>
  <div class="add-page__content">
    <input
      v-model="title"
      type="text"
      placeholder="Place your title here"
      class="add-page__inputs__title window"
    />
    <input
      v-model="price"
      type="text"
      placeholder="Place your price here"
      class="add-page__inputs__price window"
    />
    <input
      v-model="rating"
      type="text"
      placeholder="Place your rating here"
      class="add-page__inputs__rating window"
    />
    <input
      v-model="image"
      type="text"
      placeholder="Place your image url here"
      class="add-page__inputs__image window"
    />
  <button class="add-page__create-btn" @click="() => create()">
    Create
  </button>
</div>
</div>
</template>

<script>
import HomeHeader from "@/components/pages/ivanov_karavaev/components/HomeHeader.vue";
import {mapActions} from "vuex";

export default {
  name: 'AddTourPage',
  components: {
    HomeHeader
  },
  data () {
    return {
      title: '',
      price: '',
      rating: '',
      image: ''
    }
  },
  methods: {
    ...mapActions('smallCardStore', [
      'addSmallCard'
    ]),
    create () {
      if (this.title === '' || this.price === '' || this.rating === '' || this.image === '') {
        alert('Данные введены некоректно')
      }
      else {
        const newTour = {
          title: this.title,
          price: this.price,
          rating: this.rating,
          image: this.image
        };
        this.addSmallCard(newTour);

        this.title = '';
        this.price = '';
        this.rating = '';
        this.image = '';
      }
    }
  }
}
</script>

<style scoped lang="less">
.add-page {
  padding: 20px 20px;
  height: 95.7vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  &__create-btn {
    align-self: center;
    width: 20%;
    background: none;
    border-radius: 10px;
    font-size: 58px;

    &:hover {
      backdrop-filter: brightness(50%);
    }
  }
}

.window {
  font-size: 48px;
  border-radius: 15px;
  width: 60%;
  height: auto;
}
</style>
