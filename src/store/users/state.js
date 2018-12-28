export default {
  users: [],
  userLogged: sessionStorage.getItem('userLogged') ? JSON.parse(sessionStorage.getItem('userLogged')) : null
}
