export default {
  namespaced: true,
  state: {
    bigCardData: [
      {
        title: "Explore the sights of the Azores",
        description: "A place where nature and adventure unite",
        image: "https://klike.net/uploads/posts/2019-11/1574605311_20.jpeg"
      },
      {
        title: "Explore open spaces",
        description: "Feel the peace of being alone",
        image: "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696576815_gas-kvas-com-p-kartinki-ravnina-33.jpg"
      },
      {
        title: "Explore desert worlds",
        description: "Feel the warmth of the sand on yourself",
        image: "https://laplaya-rus.ru/wp-content/uploads/7/d/e/7deadb56f4c2973de147aded05c03e88.jpeg"
      }
    ],
    index: 0
  },

  getters: {
    getBigCard: (state) => state.bigCardData,
    getIndex: (state) => state.index
  },

  mutations: {
    incrIndex: (state) => {
      if (state.index === state.bigCardData.length - 1)
        state.index = 0
      else
        state.index += 1
    },
    decrIndex: (state) => {
      if (state.index === 0)
        state.index = state.bigCardData.length - 1
      else
        state.index -= 1
    }
  },

  actions: {
    incrIndex: ({commit}) => {
      commit('incrIndex')
    },
    decrIndex: ({commit}) => {
      commit('decrIndex')
    }
  }
}
