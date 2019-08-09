export const SET_GENDERS = (state, dados) => {
  state.genders = dados
}
export const SET_GENDER_BY_ID = (state, dados) => {
  state.gender = dados
}
export const EDIT_GENDER = (state, gender) => {
  state.status = gender
}
export const ADD_GENDER = (state, { gender }) => {
  state.genders.push(gender)
}
export const DELETE_GENDER = (state, { gender }) => {
  state.genders.splice(gender)
}
