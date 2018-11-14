const SET_EVENTS = (state, dados) => {
  state.events = dados
}
const CHANGE_USER = (state, payload) => {
  state.events = payload
}
export {
  SET_EVENTS,
  CHANGE_USER
}
