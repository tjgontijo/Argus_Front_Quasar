import Vue from 'vue'

export const setAllUnits = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `${process.env.API}/units`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        commit('SET_ALL_UNITS', response.data.units)
        resolve(response)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export const setUnit = ({ commit, dispatch }, id) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      data: id,
      url: `${process.env.API}/units/${id}`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        commit('SET_UNIT_BY_ID', response.data.unit)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export function create ({commit, dispatch}, type) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      data: type,
      url: `${process.env.API}/units`
    }
    this._vm.$axios(options)
      .then((response) => {
        const unit = response.data.unit
        commit('ADD_UNIT', unit)
      })
      .catch(err => {
        for (let value of Object.values(err.response.data.errors)) {
          this._vm.$q.notify({message: value[0], type: 'negative', position: 'top'})
        }
        reject(err)
      })
  })
}

export function edit ({commit, dispatch}, type) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'PUT',
      data: type,
      url: `${process.env.API}/units/${type.id}`
    }
    this._vm.$axios(options)
      .then(response => {
        const unit = response.data.unit
        commit('EDIT_UNIT', unit)
      })
      .catch(err => {
        for (let value of Object.values(err.response.data.errors)) {
          this._vm.$q.notify({message: value[0], type: 'negative', position: 'top'})
        }
        reject(err)
      })
  })
}

export function delUnit ({commit, dispatch}, id) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'DELETE',
      data: id,
      url: `${process.env.API}/units/${id}`
    }
    Vue.prototype.$axios(options)
      .then((res) => {
        commit('DELETE_UNIT', id)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}
