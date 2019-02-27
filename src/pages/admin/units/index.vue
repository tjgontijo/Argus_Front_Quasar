<template>
  <q-page padding class="container">
    <div class="row">
      <div class="col">
         <p class="q-display-1">Unidades</p>
          <q-table
            :data="units"
            :columns="columns"
            :filter="filter"
            :visible-columns="visibleColumns"
            :pagination.sync="paginationControl"
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
                @click="editUnit(props.row)"
                icon="fas fa-edit"></q-btn>
                 <q-btn
                color="negative"
                flat
                round
                delete
                icon="delete"
                @click="delUnit(props.row)"/>
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
                @click="createUnit()"
                icon="add_circle"
                size="16px"
                color="primary"
                label="Adicionar" flat rounded/>
            </template>
          </q-table>
      </div>
    </div>
   </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      columns: [
        { name: 'id', required: true, label: 'ID', align: 'left', field: 'id', sortable: true },
        { name: 'shortName', label: 'Sigla', field: 'shortName', align: 'left', sortable: true },
        { name: 'name', label: 'Nome', field: 'name', align: 'left', sortable: true },
        { name: 'isTeach', label: 'Tem Encargo de Ensino', field: 'isTeach', align: 'left', sortable: true },
        { name: 'action', label: 'Ações', align: 'right', field: 'action' }
      ],
      filter: '',
      visibleColumns: ['id', 'shortName', 'name', 'isTeach', 'action'],
      separator: 'horizontal',
      selection: 'multiple',
      pagination: {
        page: 2
      },
      paginationControl: { rowsPerPage: 10, page: 1 },
      loading: false,
      dark: true
    }
  },
  mounted () {
    this.setAllUnits()
  },
  computed: {
    ...mapState('units', ['units'])
  },
  methods: {
    ...mapActions('units', ['setAllUnits']),
    ...mapGetters('units', ['getAllForTable']),
    editUnit (row) {
      const id = row.id
      this.$router.push(`unit/${id}`)
    },
    createUnit () {
      this.$router.push(`unit`)
    },
    delUnit (row) {
      const id = row.id
      const name = row.name
      this.$q.dialog({
        title: 'Excluir',
        message: `Tem certeza que deseja excluir a Unidade: ${name}`,
        ok: 'Sim',
        cancel: 'Não'
      }).then(() => {
        this.$store.dispatch('units/delUnit', id)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
