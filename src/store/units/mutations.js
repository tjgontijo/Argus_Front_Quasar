export const SET_ALL_UNITS = (state, dados) => {
  state.units = dados
}
export const SET_UNIT_BY_ID = (state, dados) => {
  state.unit = dados
}
export const EDIT_UNIT = (state, dados) => {
  state.unit = dados
}
export const ADD_UNIT = (state, { unit }) => {
  state.unit.push(unit)
}
export const DELETE_UNIT = (state, { dados }) => {
  state.unit.splice(dados)
}
