<template>
  <q-page padding class="container">
    <div class="row">
      <div class="col">
         <p class="q-display-1">Sexos</p>
          <q-table
            :data="genders"
            :columns="columns"
            :filter="filter"
            :visible-columns="visibleColumns"
            :separator="separator"
            row-key="id"
            color="secondary"
          >
          <q-td
              slot="body-cell-action"
              slot-scope="props"
              :props="props">
             <q-btn
                color="positive"
                flat
                round
                show
                @click="showGender(props.row)"
                icon="far fa-eye"></q-btn>
              <q-btn
                color="amber"
                flat
                round
                edit
                @click="editGender(props.row)"
                icon="fas fa-edit"></q-btn>
                 <q-btn
                color="negative"
                flat
                round
                delete
                icon="delete"
                @click="deleteGender(props.row)"/>
            </q-td>
            <template slot="top-left" slot-scope="props">
              <q-search
                hide-underline
                color="secondary"
                v-model="filter"
                class="col-6"
              />
            </template>
            <template slot="top-right" slot-scope="props">
              <q-table-columns
                color="secondary"
                class="q-mr-sm"
                v-model="visibleColumns"
                :columns="columns"
              />
              <q-select
                color="secondary"
                v-model="separator"
                :options="[
                  { label: 'Horizontal', value: 'horizontal' },
                  { label: 'Vertical', value: 'vertical' },
                  { label: 'Cell', value: 'cell' },
                  { label: 'None', value: 'none' }
                ]"
                hide-underline
              />
              <q-btn
                flat round dense
                :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen"
              />
              <q-btn
                @click="OpenGenderModalAdd()"
                icon="add_circle"
                size="16px"
                color="primary"
                label="Adicionar" />
            </template>
          </q-table>
          <q-modal v-model="minimizedModalAdd" minimized ref="minimizedModalAdd">
            <div style="padding: 50px; width: 50vw">
                <div class="q-display-1 q-mb-md text-center">Cadastrar Sexo</div>
                <q-input v-model="gender.name" type="text" float-label="Sexo:" :after="[{icon: 'font_download', handler () {}}]" autofocus/>
               <div class="row justify-between" style="margin-top: 25px">
                <q-btn color="warning" @click="minimizedModalAdd = false" label="Voltar" />
                <q-btn color="primary" label="Cadastrar" v-on:click="addGender()" />
              </div>
            </div>
    </q-modal>
      </div>
    </div>
     <q-modal v-model="minimizedModal" minimized ref="modalRef">
      <div style="padding: 50px; width: 30vw">
          <div class="q-display-1 q-mb-md text-center">Editar Sexo</div>
          <q-input v-model="gender.name" type="text" float-label="Sexo" :after="[{icon: 'font_download', handler () {}}]" autofocus/>
          <div class="row justify-between" style="margin-top: 25px">
          <q-btn color="warning" @click="minimizedModal = false" label="Voltar" />
          <q-btn color="primary" label="Cadastrar" v-on:click="updateGender(gender)" />
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
      minimizedModalAdd: false,
      gender: {
        id: '',
        name: ''
      },
      columns: [
        { name: 'id', required: true, label: 'ID', align: 'left', field: 'id', sortable: true },
        { name: 'name', label: 'Nome', field: 'name', align: 'left', sortable: true },
        { name: 'action', label: 'Ações', align: 'right', field: 'action' }
      ],
      filter: '',
      visibleColumns: ['id', 'name', 'action'],
      separator: 'horizontal',
      selection: 'multiple',
      pagination: {
        page: 2
      },
      paginationControl: { rowsPerPage: 3, page: 1 },
      loading: false,
      dark: true
    }
  },
  mounted () {
    this.setGenders()
  },
  computed: {
    ...mapState('genders', ['genders'])
  },
  methods: {
    ...mapActions('genders', ['setGenders']),
    OpenGenderModalEdit () {
      this.minimizedModal = true
    },
    OpenGenderModalAdd () {
      this.minimizedModalAdd = true
    },
    addGender () {
      axios.post(`${process.env.API}/genders`, {
        name: this.gender.name
      })
        .then(response => {
          if (response.data.status === true) {
            this.$q.notify({
              color: 'secondary',
              icon: 'add_circle',
              message: `Sexo criado com sucesso!`
            })
            this.minimizedModalAdd = false
            location.reload()
          } else {
            alert('Erro no Cadastro, tente novamente mais tarde.')
          }
        })
        .catch(e => {
          console.log(e)
          alert('Servidor Fora')
        })
    },
    deleteGender (row) {
      const id = row.id
      const name = row.name
      this.$q.dialog({
        title: 'Excluir',
        message: `Tem certeza que deseja excluir o gênero: ${name}`,
        ok: 'Sim',
        cancel: 'Não'
      }).then(() => {
        this.$store.dispatch('genders/delGender', id)
        this.$q.notify(`Gênero ${name} excluido com sucesso!`)
        location.reload()
      }).catch(() => {
        this.$q.notify(`Favor tentar novamente mais tarde.`)
      })
    },
    editGender (row) {
      this.minimizedModal = true
      this.gender.id = row.id
      this.gender.name = row.name
    },
    updateGender () {
      const id = this.gender.id
      const name = this.gender.name
      this.$store.dispatch('genders/updGenders', {id, name})
        .then(response => {
          if (response.status === true) {
            this.$q.notify({message: response.message, type: 'positive', position: 'top'})
          }
        })
        .catch(e => {
          console.log(e)
        })
      this.minimizedModal = false
    },
    showGender (row) {
      this.$q.dialog({
        title: 'Detalhes',
        message: `ID: ${row.id}, gênero: ${row.name}`,
        ok: 'Voltar'
      }).then(() => {
        // this.$q.notify(`Gênero ${row.name} excluido com sucesso!`)
      }).catch(() => {
        // this.$q.notify(`Favor tentar novamente mais tarde.`)
      })
    }
  }
}
</script>
