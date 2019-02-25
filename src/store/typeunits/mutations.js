export const SET_ALL_TYPE_UNITS = (state, dados) => {
  state.typeUnits = dados
}
export const SET_TYPE_UNIT_BY_ID = (state, dados) => {
  state.typeUnit = dados
}
export const EDIT_TYPE_UNIT = (state, dados) => {
  state.typeUnits = dados
}
export const ADD_TYPE_UNIT = (state, { typeUnit }) => {
  state.typeUnits.push(typeUnit)
}
export const DELETE_TYPE_UNIT = (state, { dados }) => {
  state.typeUnits.splice(dados)
}
