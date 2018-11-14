<template>
  <q-page padding class="container">
    <div class="q-pa-md">
      <div class="row">
      <div class="col">
         <p class="q-display-1">Usuários</p>
          <q-table
            :data="users"
            :columns="columns"
            :filter="filter"
            :visible-columns="visibleColumns"
            :separator="separator"
            row-key="id"
            color="secondary"
          >
          <template slot="top-right" slot-scope="props">
            <q-btn
                @click="OpenAddUserModal()"
                icon="add_circle"
                size="16px"
                color="primary"
                label="Adicionar" />
          </template>
          <template slot="top-left" slot-scope="props">
            <q-search
              hide-underline
              color="secondary"
              v-model="filter"
              class="col-6"
            />
          </template>
        </q-table>
      </div>
    </div>
    </div>
    <q-modal v-model="minimizedModal" minimized ref="modalRef">
      <div style="padding: 50px; width: 50vw">
          <div class="q-display-1 q-mb-md text-center">Cadastrar Usuário</div>
          <q-input v-model="user.name" type="text" float-label="Nome Completo" :after="[{icon: 'font_download', handler () {}}]" autofocus/>
          <q-input v-model="user.email" type="email" float-label="E-mail" :after="[{icon: 'mail', handler () {}}]"/>
          <q-input v-model="user.password" type="password" float-label="Senha" :after="[{icon: 'lock', handler () {}}]" />
          <q-input v-model="user.password_confirmation" type="password" float-label="Confirmar Senha" :after="[{icon: 'lock', handler () {}}]" />
        <div class="row justify-between" style="margin-top: 25px">
          <q-btn color="warning" @click="minimizedModal = false" label="Voltar" />
          <q-btn color="primary" label="Cadastrar" v-on:click="register()" />
        </div>
      </div>
    </q-modal>
   </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      minimizedModal: false,
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      columns: [
        {
          name: 'id',
          required: true,
          label: 'ID',
          align: 'left',
          field: 'id',
          sortable: true
        },
        { name: 'name', label: 'Usuário', field: 'name', align: 'left', sortable: true },
        { name: 'email', label: 'E-mail', field: 'email', align: 'left' }
      ],
      filter: '',
      visibleColumns: ['id', 'name', 'email'],
      separator: 'horizontal',
      pagination: {
        page: 2
      },
      paginationControl: { rowsPerPage: 3, page: 1 },
      loading: false,
      dark: true
    }
  },
  mounted () {
    this.setUsers()
  },
  computed: {
    ...mapState('users', ['users'])
  },
  methods: {
    ...mapActions('users', ['setUsers']),
    OpenAddUserModal () {
      this.minimizedModal = true
    },
    register () {
      axios.post(`${process.env.API}/users`, {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      })
        .then(response => {
          if (response.data.token) {
            sessionStorage.setItem('user', JSON.stringify(response.data))
            this.$q.notify({
              color: 'secondary',
              icon: 'add_circle',
              message: `Usuário criado com sucesso!`
            })
            this.minimizedModal = false
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
