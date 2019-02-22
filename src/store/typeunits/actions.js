import Vue from 'vue'

export const setTypeUnits = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    commit('TYPEUNIT_REQUEST')
    Vue.prototype.$axios.get(`${process.env.API}/typeunits`)
      .then((res) => {
        commit('SET_TYPEUNIT', res.data.typeunits)
        resolve(res.data.typeunits)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}
