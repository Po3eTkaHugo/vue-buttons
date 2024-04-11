export default {
  namespaced: true,
  state: {
    smallCardData: [
      {
        title: "Near the shore of the strait",
        price: 100,
        rating: 5.0,
        image: "https://travel-dom.ru/wp-content/uploads/2019/07/iStock-645374604.jpg"
      },
      {
        title: "Alone with nature",
        price: 150,
        rating: 5.0,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
      },
      {
        title: "Walk through the mountain savannah",
        price: 135,
        rating: 4.9,
        image: "https://mebellka.ru/wp-content/uploads/b/7/5/b7568bf35260cb115edbad2cf0f0bd25.jpeg"
      },
      {
        title: "Kayaking on a mountain river",
        price: 80,
        rating: 4.4,
        image: "https://i.pinimg.com/originals/59/e0/9b/59e09b2791980e268d38ef3694be3a6e.jpg"
      },
      {
        title: "The mountains are calling",
        price: 85,
        rating: 4.9,
        image: "https://i.pinimg.com/originals/14/49/f5/1449f501d15e8f7ac7adf4fa54763786.jpg"
      },
      {
        title: "Mountain health trail",
        price: 50,
        rating: 4.8,
        image: "https://www.rollingstone.com/wp-content/uploads/2020/01/AdobeStock_117789390.jpeg"
      },
      {
        title: "Mountain Lake",
        price: 90,
        rating: 4.9,
        image: "https://i.pinimg.com/originals/9d/6f/35/9d6f3573d5cda94f04a759e2b3ff7d6e.jpg"
      },
      {
        title: "Desert Caravan",
        price: 150,
        rating: 4.3,
        image: "https://moroccotouring.com/wp-content/uploads/2019/03/desert-tour-3-day-main.jpg"
      },
      {
        title: "Mystical stone pillars",
        price: 125,
        rating: 5.0,
        image: "https://supersnimki.ru/images/pub/2021/08/07/e957d6c8-f728-11eb-a3f5-c9c4d3922d68_original.jpg?971152"
      }
    ]
  },

  getters: {
    getSmallCard: state => state.smallCardData,
    getFilteredCards: state => findingWords => state.smallCardData.filter(smallCard => smallCard.title.toLowerCase().includes(findingWords.toLowerCase()))
  },

  mutations: {
    addSmallCard: (state, newCard) => {
      state.smallCardData.push(newCard)
    }
  },

  actions: {
    addSmallCard: ({commit}, newCard) => {
      commit('addSmallCard', newCard)
    }
  }
}
