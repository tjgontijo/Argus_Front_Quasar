export const ORIENTATION_REQUEST = (state) => {
  state.status = 'loading'
}
export const ORIENTATION_ERROR = (state) => {
  state.status = 'error'
}
export const SET_ORIENTATIONS = (state, dados) => {
  state.status = 'success'
  state.orientations = dados
}
