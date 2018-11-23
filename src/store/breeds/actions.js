import Vue from 'vue'

const setBreeds = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/breeds`)
      .then((res) => {
        commit('SET_BREEDS', res.data.breeds)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}

const delBreeds = ({ commit }) => {
  return 'ok'
}

const updBreeds = ({ commit }) => {
  return 'ok'
}
export {
  setBreeds,
  delBreeds,
  updBreeds
}
