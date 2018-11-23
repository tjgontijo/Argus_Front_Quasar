export const GENDER_REQUEST = (state) => {
  state.status = 'loading'
}
export const GENDER_ERROR = (state) => {
  state.status = 'error'
}
export const SET_GENDERS = (state, dados) => {
  state.status = 'success'
  state.genders = dados
}
export const EDIT_GENDER = (state, dados) => {
  state.status = 'success'
  state.genders = dados
}
export const ADD_GENDER = (state, { gender }) => {
  state.projects.push(gender)
}
export const DELETE_GENDER = (state, { gender }) => {
  state.genders.splice(gender)
}
