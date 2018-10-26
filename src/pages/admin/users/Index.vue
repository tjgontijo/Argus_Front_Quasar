<template>
  <q-page padding class="container">
    <div class="row">
      <div class="col">
         <p class="q-display-1">Usuários</p>
          <q-table
            :data="users"
            :columns="columns"
            :filter="filter"
            :visible-columns="visibleColumns"
            :separator="separator"
            row-key="name"
            color="secondary"
          >
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
            </template>
          </q-table>
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
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'ID',
          align: 'left',
          field: 'id',
          sortable: true
        },
        { name: 'name', label: 'Usuário', field: 'name', align: 'left', sortable: true },
        { name: 'email', label: 'E-mail', field: 'email', align: 'left' },
        { name: 'access_token', label: 'Token', field: 'access_token' }
      ],
      filter: '',
      visibleColumns: ['id', 'name', 'email'],
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
    this.setUsers()
  },
  computed: {
    ...mapState('users', ['users'])
  },
  methods: {
    ...mapActions('users', ['setUsers'])
  }
}
</script>
