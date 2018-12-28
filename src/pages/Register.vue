<template>
  <q-page class="flex flex-center docs-input row justify-center ">
    <div style="width: 500px; max-width: 90vw;">
      <q-card>
        <q-card-title>
          <p align="center">IMAGEM</p>
        </q-card-title>
        <q-card-main>
          <q-input v-model="user.name" type="text" float-label="Nome Completo" :after="[{icon: 'font_download', handler () {}}]" autofocus/>
          <q-input v-model="user.email" type="email" float-label="E-mail" :after="[{icon: 'mail', handler () {}}]"/>
          <q-input v-model="user.password" type="password" float-label="Senha" :after="[{icon: 'lock', handler () {}}]" />
          <q-input v-model="user.password_confirmation" type="password" float-label="Confirmar Senha" :after="[{icon: 'lock', handler () {}}]" />
        </q-card-main>
          <div class="row justify-between q-pa-md">
            <q-btn flat color="warning" to="/login" icon="" label="Já tenho conta" />
            <q-btn flat color="primary" icon-right="" label="Registrar" v-on:click="register()" />
          </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PageRegister',
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    register () {
      axios.post(`${process.env.API}/users`, {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      })
        .then(response => {
          console.log(response)
          if (response.data.token) {
            sessionStorage.setItem('user', JSON.stringify(response.data))
            this.$store.commit('users/SET_USERS', response.data)
            this.$router.push('admin/home')
          } else if (response.data.status === false) {
            alert('Erro no Cadastro, tente novamente mais tarde.')
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
