<template>
  <q-page padding>
      <div class="q-my-xl q-mx-lg">
        <q-card>
          <q-card-title>
            Adicionar Unidade
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <div class="row q-mt-xl justify-center">
                 <div class="col-5 q-px-md">
                    <q-input
                      v-model="unit.shortName"
                      float-label="Sigla da Unidade"
                      autofocus
                    />
                  </div>
                  <div class="col-7 q-px-md">
                    <q-input
                      v-model="unit.name"
                      float-label="Nome da Unidade"
                      @keyup.enter="submit"
                    />
                  </div>
              </div>
              <div class="row q-mt-xl justify">
                <div class="col q-px-md">
                  <p class="caption">É Unidade com Encargo de Ensino ?</p>
                  <q-radio v-model="unit.isTeach" val="Sim" color="secondary" label="Sim" />
                  <q-radio v-model="unit.isTeach" val="Não" color="negative" label="Não" style="margin-left: 10px" />
                </div>
              </div>
              <div class="row q-py-lg justify-between">
                <q-btn color="warning" label="Voltar" block @click="$router.push('/admin/units')"/>
                <q-btn color="primary" label="Salvar" block @click="submit"/>
            </div>
            </q-card-main>
      </q-card>
      </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  mounted () {
    this.setUnit(this.id)
  },
  computed: {
    ...mapState('units', ['unit'])
  },
  methods: {
    ...mapActions('units', ['setUnit']),
    submit () {
      const id = this.id
      const shortName = this.unit.shortName
      const name = this.unit.name
      const isTeach = this.unit.isTeach
      this.$store.dispatch('units/edit', {id, shortName, name, isTeach})
      setTimeout(() => {
        this.$router.push('/admin/units')
      }, 1000)
    }
  }
}
</script>

<style>
</style>
