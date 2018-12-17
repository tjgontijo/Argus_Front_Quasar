import Vue from 'vue'

export const setGenders = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    commit('GENDER_REQUEST')
    Vue.prototype.$axios.get(`${process.env.API}/genders`)
      .then((res) => {
        commit('SET_GENDERS', res.data.genders)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}

export const delGender = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    commit('GENDER_REQUEST')
    const options = {
      method: 'DELETE',
      data: id,
      url: `${process.env.API}/genders/${id}`
    }
    Vue.prototype.$axios(options)
      .then((res) => {
        commit('DELETE_GENDER', id)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}

export const addGender = ({ commit, dispatch }, gender) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      data: gender,
      url: `${process.env.API}/genders`
    }
    Vue.prototype.$axios.post(options)
      .then((res) => {
        commit('ADD_GENDER', gender)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}

export const updGender = ({ commit, dispatch }, gender) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'PUT',
      data: gender,
      url: `${process.env.API}/genders/${gender.id}`
    }
    Vue.prototype.$axios(options)
      .then((res) => {
        commit('EDIT_GENDER', gender)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}
