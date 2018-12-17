import Vue from 'vue'

const setUsers = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/users`)
      .then((res) => {
        commit('SET_USERS', res.data.users)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}
const setUserInfo = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      data: id,
      url: `${process.env.API}/users/${id}`
    }
    Vue.prototype.$axios(options)
      .then((res) => {
        commit('SET_USER_INFO', res.data.user)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}

const delUsers = ({ commit }) => {
  return 'ok'
}

const updUsers = ({ commit }) => {
  return 'ok'
}
export {
  setUsers,
  delUsers,
  updUsers,
  setUserInfo
}
