export const SET_BREEDS = (state, dados) => {
  state.status = 'success'
  state.breeds = dados
}
export const EDIT_BREED = (state, breed) => {
  state.status = breed
}
export const ADD_BREED = (state, { breed }) => {
  state.breeds.push(breed)
}
export const SET_BREED_BY_ID = (state, dados) => {
  state.breed = dados
}
export const DELETE_BREED = (state, { breed }) => {
  state.breeds.splice(breed)
}
