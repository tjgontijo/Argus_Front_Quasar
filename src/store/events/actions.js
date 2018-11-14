import Vue from 'vue'

const setEvents = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/events`)
      .then((res) => {
        commit('SET_EVENTS', res.data.events)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}
export {
  setEvents
}
