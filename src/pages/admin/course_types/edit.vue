<template>
  <q-page padding>
      <div class="q-my-xl q-mx-lg">
      <q-card>
          <q-card-title>
            Cadastrar novo Tipo de Curso
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <div class="row q-mt-xl justify-center">
                 <div class="col-5 q-px-md">
                    <q-input
                      v-model="courseType.name"
                      float-label="Nome"
                      autofocus
                    />
                  </div>
                  <div class="col-7 q-px-md">
                    <q-input
                      v-model="courseType.description"
                      float-label="Descrição"
                      @keyup.enter="submit"
                    />
                  </div>
              </div>
              <div class="row q-mt-xl justify">
                 <div class="col-5 q-px-md">
                    <q-input
                      v-model="courseType.type"
                      float-label="Executor"
                      autofocus
                    />
                  </div>
              </div>
              <div class="row q-py-lg justify-between">
                <q-btn color="warning" label="Voltar" block @click="$router.push('/admin/course-types')"/>
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
    this.setCourseType(this.id)
  },
  computed: {
    ...mapState('coursetypes', ['courseType'])
  },
  methods: {
    ...mapActions('coursetypes', ['setCourseType']),
    submit () {
      const id = this.id
      const name = this.courseType.name
      const description = this.courseType.description
      const type = this.courseType.type
      this.$store.dispatch('coursetypes/edit', {id, name, description, type})
      setTimeout(() => {
        this.$router.push('/admin/course-types')
      }, 1000)
    }
  }
}
</script>

<style>
</style>
