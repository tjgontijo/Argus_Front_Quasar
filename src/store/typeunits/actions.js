import Vue from 'vue'

export const setAllTypeUnits = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `${process.env.API}/type_units`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        // console.log(response.data)
        commit('SET_ALL_TYPE_UNITS', response.data.typeUnits)
        resolve(response)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export const setTypeUnit = ({ commit, dispatch }, id) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      data: id,
      url: `${process.env.API}/type_units/${id}`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        console.log(response)
        commit('SET_TYPE_UNIT_BY_ID', response.data.typeUnit)
        resolve(response)
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
      url: `${process.env.API}/type_units`
    }
    this._vm.$axios(options)
      .then((response) => {
        const typeUnit = response.data.typeUnit
        commit('ADD_TYPE_UNIT', typeUnit)
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
      url: `${process.env.API}/type_units/${type.id}`
    }
    this._vm.$axios(options)
      .then(response => {
        const typeUnit = response.data.typeUnit
        commit('EDIT_TYPE_UNIT', typeUnit)
      })
      .catch(err => {
        for (let value of Object.values(err.response.data.errors)) {
          this._vm.$q.notify({message: value[0], type: 'negative', position: 'top'})
        }
        reject(err)
      })
  })
}

export function delTypeUnit ({commit, dispatch}, id) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'DELETE',
      data: id,
      url: `${process.env.API}/type_units/${id}`
    }
    Vue.prototype.$axios(options)
      .then((res) => {
        commit('DELETE_TYPE_UNIT', id)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}
