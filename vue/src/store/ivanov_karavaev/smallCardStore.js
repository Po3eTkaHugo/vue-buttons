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
  }
}

const actions = {
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
  },
  loadSmallCardById: ({ commit }, payload) => {
    axios.get(`http://localhost:3000/smallCardData/${payload}`)
      .then((res) => {
        commit('setSmallCardData', res.data)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Done")
      })
  },
  addSmallCard: ({dispatch}, newCard) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/smallCardData', newCard)
        .then(res => {
          console.log(res.data);
          dispatch('loadSmallCard');
          resolve(res.data);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        })
        .finally(() => {
          console.log(1);
        })
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
