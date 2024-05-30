import axios from "axios"

const state = {
  bigCardData: []
}

const getters = {
  getBigCard: (state) => state.bigCardData
}

const mutations = {
  setBigCardData: (state, payload) => {
    state.bigCardData = payload
  }
}

const actions = {
  loadBigCard: ({ commit }) => {
    axios.get('http://localhost:3000/bigCardData')
      .then((res) => {
        commit('setBigCardData', res.data)
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