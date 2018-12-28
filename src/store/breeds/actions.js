import Vue from 'vue'

const setBreeds = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    commit('BREED_REQUEST')
    Vue.prototype.$axios.get(`${process.env.API}/breeds`)
      .then((res) => {
        commit('SET_BREEDS', res.data.breeds)
        resolve(res.data.breeds)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
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
