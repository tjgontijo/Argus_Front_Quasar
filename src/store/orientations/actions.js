import Vue from 'vue'

export const setOrientations = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    commit('ORIENTATION_REQUEST')
    Vue.prototype.$axios.get(`${process.env.API}/orientations`)
      .then((res) => {
        commit('SET_ORIENTATIONS', res.data.orientations)
        resolve(res.data.orientations)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}
