<template>
  <q-page padding>
      <div class="q-my-xl q-mx-lg">
        <q-card>
          <q-card-title>
            Editar Tipo de Unidade
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <div class="row q-mt-xl justify-center">
                  <div class="col-4 q-px-md">
                    <q-input
                      v-model="typeUnit.name"
                      float-label="Tipo de Unidade"
                      autofocus
                    />
                  </div>
                  <div class="col-8 q-px-md">
                    <q-input
                      v-model="typeUnit.description"
                      float-label="Descrição"
                      @keyup.enter="submit"
                    />
                  </div>
              </div>
               <div class="row q-mt-xl justify">
                <div class="col q-px-md">
                  <p class="caption">É Unidade com Encargo de Ensino ?</p>
                  <q-radio v-model="typeUnit.isTeach" val="Sim" color="secondary" label="Sim" />
                  <q-radio v-model="typeUnit.isTeach" val="Não" color="negative" label="Não" style="margin-left: 10px" />
                </div>
              </div>
              <div class="row q-py-lg justify-between">
                <q-btn color="warning" label="Voltar" block @click="$router.push('/admin/type-units')"/>
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
    this.setTypeUnit(this.id)
  },
  computed: {
    ...mapState('typeunits', ['typeUnit'])
  },
  methods: {
    ...mapActions('typeunits', ['setTypeUnit']),
    submit () {
      const id = this.id
      const name = this.typeUnit.name
      const description = this.typeUnit.description
      const isTeach = this.typeUnit.isTeach
      this.$store.dispatch('typeunits/edit', {id, name, description, isTeach})
      setTimeout(() => {
        this.$router.push('/admin/type-units')
      }, 1000)
    }
  }
}
</script>

<style>
</style>
