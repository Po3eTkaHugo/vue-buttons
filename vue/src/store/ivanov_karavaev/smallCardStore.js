import axios from "axios";

const state = {
  smallCardData: []
}

const getters = {
  getSmallCard: state => state.smallCardData
}

const mutations = {
  setSmallCardData: (state, payload) => {
    state.smallCardData = payload
  },
  addSmallCard: (state, newCard) => {
    state.smallCardData.push(newCard)
  }
}

const actions = {
  addSmallCard: ({commit}, newCard) => {
    commit('addSmallCard', newCard)
  },
  loadSmallCard: ({ commit }, payload) => {
    axios.get('http://localhost:3000/smallCardData', {
      params: {
        title:payload
      }
    })
    .then((res) => {
      commit('setSmallCardData', res.data)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Done")
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
