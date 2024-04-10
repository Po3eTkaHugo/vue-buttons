export default {
  namespaced: true,
  state: {
    smallCardData: [
      {
        title: "Near the shore of the strait",
        price: 100,
        rating: (5.0).toFixed(1),
        image: "https://travel-dom.ru/wp-content/uploads/2019/07/iStock-645374604.jpg"
      },
      {
        title: "Alone with nature",
        price: 150,
        rating: (5.0).toFixed(1),
        image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
      },
      {
        title: "Walk through the mountain savannah",
        price: 135,
        rating: (4.9).toFixed(1),
        image: "https://mebellka.ru/wp-content/uploads/b/7/5/b7568bf35260cb115edbad2cf0f0bd25.jpeg"
      },
      {
        title: "Kayaking on a mountain river",
        price: 80,
        rating: (4.4).toFixed(1),
        image: "https://i.pinimg.com/originals/59/e0/9b/59e09b2791980e268d38ef3694be3a6e.jpg"
      },
      {
        title: "The mountains are calling",
        price: 85,
        rating: (4.9).toFixed(1),
        image: "https://i.pinimg.com/originals/14/49/f5/1449f501d15e8f7ac7adf4fa54763786.jpg"
      }
    ]
  },

  getters: {
    getSmallCard: state => state.smallCardData,
    getFilteredCards: state => findingWords => state.smallCardData.filter(smallCard => smallCard.title.toLowerCase().includes(findingWords.toLowerCase()))
  },

  mutations: {
  },

  actions: {
  }
}
