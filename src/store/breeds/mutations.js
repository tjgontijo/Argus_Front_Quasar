export const BREED_REQUEST = (state) => {
  state.status = 'loading'
}
export const BREED_ERROR = (state) => {
  state.status = 'error'
}
export const SET_BREEDS = (state, dados) => {
  state.status = 'success'
  state.breeds = dados
}
