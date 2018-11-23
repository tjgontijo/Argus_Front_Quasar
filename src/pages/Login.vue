<template>
<q-page-container>
  <q-page class="container flex flex-center docs-input row justify-center ">
    <div style="width: 500px; max-width: 90vw;">
      <q-card>
        <q-card-title>
          <p align="center">
            IMAGEM
          </p>
        </q-card-title>
        <q-card-main>
          <q-input v-model="user.email" type="email" float-label="E-mail" autofocus :after="[{icon: 'mail', handler () {}}]"/>
          <q-input v-model="user.password" type="password" @keyup.enter="login()" float-label="Senha" :after="[{icon: 'lock', handler () {}}]" />
        </q-card-main>
          <div class="row justify-between q-pa-md">
            <q-btn flat color="primary" to="/register" icon="" label="Registrar" />
            <q-btn flat color="primary" v-on:click="login()" label="Entrar" />
          </div>
      </q-card>
    </div>
  </q-page>
</q-page-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PageLogin',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios
        .post(`${process.env.API}/user/login`, {
          email: this.user.email,
          password: this.user.password
        })
        .then(response => {
          console.log(response)
          if (response.data.token) {
            sessionStorage.setItem('user', JSON.stringify(response.data))
            this.$router.push('admin/home')
          } else if (response.data.status === false) {
            alert('login não existe')
          } else {
            let errors = ''
            for (let error of Object.values(response.data)) {
              errors = error + ' ' + error
            }
            alert(errors)
          }
        })
        .catch(e => {
          console.log(e)
          alert('Servidor Fora')
        })
    }
  }
}
</script>

<style>
</style>
