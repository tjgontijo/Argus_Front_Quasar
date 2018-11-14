<template>
  <q-page padding class="container">
    <div class="q-pa-md">
      <div class="row">
      <div class="col">
         <p class="q-display-1">Eventos</p>
          <q-table
            :data="events"
            :columns="columns"
            :filter="filter"
            :visible-columns="visibleColumns"
            :separator="separator"
            row-key="id"
            color="secondary"
          >
           <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
            </q-tr>
          <template slot="top-right" slot-scope="props">
            <q-btn
                @click="OpenAddEventModal()"
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
      <div style="padding: 50px; width: 70vw">
          <div class="q-display-1 q-mb-md text-center">Cadastrar Evento</div>
          <q-input v-model="event.name" type="text" float-label="Nome do Evento" autofocus/>
          <q-input v-model="event.description" type="textarea" :max-height="50" rows="5" float-label="Descrição" />
          <q-input v-model="event.local" type="text" float-label="Local"  />
          <q-datetime v-model="event.dt_event" type="datetime" float-label="Data" format24h/>
          <q-input v-model="event.courtesies" type="number" float-label="N° de Cortesias"/>
          <q-input v-model="event.benefits" type="textarea" :max-height="50" rows="5" float-label="Beneficios"/>
        <div class="row justify-between" style="margin-top: 25px">
          <q-btn color="warning" v-on:click="minimizedModal = false" label="Voltar" />
          <q-btn color="primary" label="Cadastrar" v-on:click="registerEvent()" />
        </div>
      </div>
    </q-modal>
    <template>
      <q-action-sheet
        v-model="actionSheet"
        title=""
        @ok="onOk"
        @show="onShow"
        @hide="onHide"
        :actions="[
          {
            label: 'Visualizar',
            icon: 'search',
            color: 'primary',
            handler: viewAction
          },
          {
            label: 'Editar',
            icon: 'edit',
            color: 'green',
            handler: editAction
          },
          {},
          {
            label: 'Delete',
            icon: 'delete',
            color: 'red',
            handler: deleteAction
          },
        ]"
      />
      <!--
        there's an optional "title" slot if you have
        something very specific for the ActionSheet title
        (it replaces "title" prop)
      -->
    </template>
   </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
import { date } from 'quasar'
export default {
  data () {
    return {
      minimizedModal: false,
      actionSheet: false,
      event: {
        name: '',
        description: '',
        local: '',
        dt_event: '',
        courtesies: '',
        benefits: ''
      },
      columns: [
        { name: 'id', required: true, label: 'ID', align: 'left', field: 'id', sortable: true },
        { name: 'name', label: 'Evento', field: 'name', align: 'left', sortable: true },
        { name: 'description', label: 'Descrição', field: 'description', align: 'left' },
        { name: 'local', label: 'Local', field: 'local', align: 'left' },
        { name: 'date', label: 'Data', field: 'dt_event', align: 'left' },
        { name: 'courtesies', label: 'Cortesias', field: 'courtesies', align: 'left' },
        { name: 'benefits', label: 'Beneficios', field: 'benefits', align: 'left' }
      ],
      filter: '',
      visibleColumns: ['id', 'name', 'description', 'local', 'date', 'courtesies', 'benefits'],
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
    this.setEvents()
  },
  computed: {
    ...mapState('events', ['events'])
  },
  methods: {
    ...mapActions('events', ['setEvents']),
    OpenAddEventModal () {
      this.minimizedModal = true
    },
    registerEvent () {
      axios.post(`${process.env.API}/events`, {
        name: this.event.name,
        description: this.event.description,
        local: this.event.local,
        dt_event: date.formatDate(this.event.dt_event, 'YYYY-MM-DD HH:mm:ss'),
        courtesies: this.event.courtesies,
        benefits: this.event.benefits
      })
        .then(response => {
          if (response.data) {
            this.$q.notify({
              color: 'secondary',
              icon: 'add_circle',
              message: `Evento criado com sucesso!`
            })
            this.minimizedModal = false
          } else if (response.data === '') {
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
        })
    },
    rowClick (row) {
      this.actionSheet = true
    },
    deleteAction () {
      // @ok event will still be triggered
      console.log(this.selectedRow)
      this.$q.notify('Deleting...')
    },

    // user picked one of the actions
    onOk (item) {
      if (item.handler) {
        // if we've already triggered a handler
        return
      }
      this.$q.notify({
        color: 'secondary',
        message: `Clicked on "${item.label}"`
      })
    },
    onShow () { },
    onHide () { },
    viewAction () { },
    editAction () { }
  }
}
</script>
