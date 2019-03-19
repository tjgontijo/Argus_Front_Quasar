<template>
  <q-page padding class="container">
    <div class="row">
      <div class="col">
         <p class="q-display-1">Sexo</p>
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
                @click="delGender(props.row)"/>
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
                @click="createGender()"
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
export default {
  data () {
    return {
      genders: [],
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
      paginationControl: { rowsPerPage: 10, page: 1 },
      loading: false,
      dark: true,
      modal: {
        opened: false,
        title: '',
        submitButton: ''
      }
    }
  },
  mounted () {
    this.$store.dispatch('genders/setAllGenders').then(() => {
      this.genders = this.$store.getters['genders/getAllForTable']
    })
  },
  methods: {
    editGender (row) {
      const id = row.id
      this.$router.push(`gender/${id}`)
    },
    createGender () {
      this.$router.push(`gender`)
    },
    delGender (row) {
      const id = row.id
      const name = row.name
      this.$q.dialog({
        title: 'Excluir',
        message: `Tem certeza que deseja excluir o sexo: ${name}`,
        ok: 'Sim',
        cancel: 'Não'
      }).then(() => {
        this.$store.dispatch('genders/delGender', id)
        setTimeout(() => {
        // we're done, we reset loading state
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
