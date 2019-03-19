import Vue from 'vue'

export const setAllCourseTypes = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `${process.env.API}/course_types`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        // console.log('AXIOS', response.data)
        commit('SET_ALL_COURSE_TYPES', response.data.courseTypes)
        resolve(response)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export const setCourseType = ({ commit, dispatch }, id) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      data: id,
      url: `${process.env.API}/course_types/${id}`
    }
    Vue.prototype.$axios(options)
      .then((response) => {
        console.log('RESPONSE', response.data)
        commit('SET_COURSE_TYPE_BY_ID', response.data.courseType)
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
      url: `${process.env.API}/course_types`
    }
    this._vm.$axios(options)
      .then((response) => {
        const courseType = response.data.courseType
        commit('ADD_COURSE_TYPE', courseType)
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
      url: `${process.env.API}/course_types/${type.id}`
    }
    this._vm.$axios(options)
      .then(response => {
        const courseType = response.data.courseType
        commit('EDIT_COURSE_TYPE', courseType)
      })
      .catch(err => {
        for (let value of Object.values(err.response.data.errors)) {
          this._vm.$q.notify({message: value[0], type: 'negative', position: 'top'})
        }
        reject(err)
      })
  })
}

export function delCourseType ({commit, dispatch}, id) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'DELETE',
      data: id,
      url: `${process.env.API}/course_types/${id}`
    }
    Vue.prototype.$axios(options)
      .then((res) => {
        commit('DELETE_COURSE_TYPE', id)
      })
      .catch((err) => {
        console.error(err)
      })
  })
}
