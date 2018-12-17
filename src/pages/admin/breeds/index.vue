<template>
  <q-page padding class="container">
    <div class="row">
      <div class="col">
         <p class="q-display-1">Raças, cores e etinias</p>
          <q-table
            :data="breeds"
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
                color="amber"
                flat
                round
                edit
                @click="editBreed(props.row)"
                icon="fas fa-edit"></q-btn>
                  <q-btn
                color="negative"
                flat
                round
                delete
                icon="delete"
                @click="deleteBreed(props.row)"/>
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
              <q-btn
                @click="OpenBreedModalAdd()"
                icon="add_circle"
                size="16px"
                color="primary"
                label="Adicionar" flat rounded/>
            </template>
          </q-table>
           <q-modal v-model="minimizedModal" minimized ref="modalRef">
            <div style="padding: 50px; width: 30vw">
                <div class="q-display-1 q-mb-md text-center">Adicionar</div>
                <q-input v-model="breed.name" type="text" float-label="Raças, cores e etinias" :after="[{icon: 'font_download', handler () {}}]" autofocus/>
                <div class="row justify-between" style="margin-top: 25px">
                <q-btn color="warning" @click="minimizedModal = false" label="Voltar" />
                <q-btn color="primary" label="Adicionar" v-on:click="addBreed(breed)" />
              </div>
              </div>
          </q-modal>
      </div>
    </div>
   </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      breed: {
        name: ''
      },
      modalAdd: false,
      minimizedModal: false,
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
    this.setBreeds()
  },
  computed: {
    ...mapState('breeds', ['breeds'])
  },
  methods: {
    ...mapActions('breeds', ['setBreeds']),
    OpenBreedModalAdd () {
      this.minimizedModal = true
      console.log('Add click')
    },
    addBreed (breed) {
      console.log(breed)
    }
  }
}
</script>
