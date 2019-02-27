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
export default {
  data () {
    return {
      unit: []
    }
  },
  methods: {
    submit () {
      const shortName = this.unit.shortName
      const name = this.unit.name
      const isTeach = this.unit.isTeach
      this.$store.dispatch('units/create', {shortName, name, isTeach})
      setTimeout(() => {
        this.$router.push('/admin/units')
      }, 500)
    }
  }
}
</script>

<style>
</style>
