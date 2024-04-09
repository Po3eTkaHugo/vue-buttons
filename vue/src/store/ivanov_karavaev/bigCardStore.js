export default {
  namespaced: true,
  state: {
    bigCardData: [
      {
        id: 0,
        title: "Explore the sights of the Azores",
        description: "A place where nature and adventure unite",
        image: "https://klike.net/uploads/posts/2019-11/1574605311_20.jpeg"
      },
      {
        id: 1,
        title: "Explore open spaces",
        description: "Feel the peace of being alone",
        image: "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696576815_gas-kvas-com-p-kartinki-ravnina-33.jpg"
      },
      {
        id: 2,
        title: "Explore desert worlds",
        description: "Feel the warmth of the sand on yourself",
        image: "https://laplaya-rus.ru/wp-content/uploads/7/d/e/7deadb56f4c2973de147aded05c03e88.jpeg"
      }
    ]
  },
  getters: {
    getBigCard: (state) => state.bigCardData
  },
  mutations: {

  },
  actions: {

  }
}