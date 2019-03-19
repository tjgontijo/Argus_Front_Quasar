export const SET_ALL_COURSE_TYPES = (state, dados) => {
  state.courseTypes = dados
}
export const SET_COURSE_TYPE_BY_ID = (state, dados) => {
  state.courseType = dados
}
export const EDIT_COURSE_TYPE = (state, dados) => {
  state.courseType = dados
}
export const ADD_COURSE_TYPE = (state, { dados }) => {
  state.courseType.push(dados)
}
export const DELETE_COURSE_TYPE = (state, { dados }) => {
  state.courseType.splice(dados)
}
