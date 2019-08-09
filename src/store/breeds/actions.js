import Vue from 'vue'

export const setBreeds = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
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

export const setBreed = ({ commit, dispatch }, id) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      data: id,
      url: `${process.env.API}/breeds/${id}`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        commit('SET_BREED_BY_ID', response.data.breed)
        resolve(response)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export function edit ({commit, dispatch}, breed) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'PUT',
      data: breed,
      url: `${process.env.API}/breeds/${breed.id}`
    }
    this._vm.$axios(options)
      .then(response => {
        const breed = response.data.breed
        commit('EDIT_BREED', breed)
        let result = {status: 'success', message: 'Raça, cor ou Etinia editada com sucesso', type: 'positive'}
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

export function create ({commit, dispatch}, name) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      data: name,
      url: `${process.env.API}/breeds`
    }
    this._vm.$axios(options)
      .then((response) => {
        const breed = response.data
        commit('ADD_BREED', breed)
        let result = {status: 'success', message: 'Raça, cor ou Etinia atualizado com sucesso', type: 'positive'}
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

export function delBreed ({commit, dispatch}, id) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'DELETE',
      data: id,
      url: `${process.env.API}/breeds/${id}`
    }
    Vue.prototype.$axios(options)
      .then((res) => {
        commit('DELETE_BREED', id)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}
