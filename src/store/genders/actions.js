import Vue from 'vue'

export const setAllGenders = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `${process.env.API}/genders`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        const genders = response.data.genders
        commit('SET_GENDERS', genders)
        resolve(response)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export const setGender = ({ commit, dispatch }, id) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      data: id,
      url: `${process.env.API}/genders/${id}`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        commit('SET_GENDER_BY_ID', response.data.gender)
        resolve(response)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export function create ({commit, dispatch}, name) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      data: name,
      url: `${process.env.API}/genders`
    }
    this._vm.$axios(options)
      .then((response) => {
        const gender = response.data
        commit('ADD_GENDER', gender)
        let result = {status: 'success', message: 'Sexo adicionado com sucesso', type: 'positive'}
        resolve(result)
      })
      .catch(err => {
        for (let value of Object.values(err.response.data.errors)) {
          this._vm.$q.notify({message: value[0], type: 'negative', position: 'top'})
        }
        reject(err)
      })
  })
}

export function edit ({commit, dispatch}, gender) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'PUT',
      data: gender,
      url: `${process.env.API}/genders/${gender.id}`
    }
    this._vm.$axios(options)
      .then(response => {
        const gender = response.data.gender
        commit('EDIT_GENDER', gender)
        let result = {status: 'success', message: 'Sexo editado com sucesso', type: 'positive'}
        resolve(result)
      })
      .catch(err => {
        for (let value of Object.values(err.response.data.errors)) {
          this._vm.$q.notify({message: value[0], type: 'negative', position: 'top'})
        }
        reject(err)
      })
  })
}

export function delGender ({commit, dispatch}, id) {
  return new Promise((resolve, reject) => {
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
