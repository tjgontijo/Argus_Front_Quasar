<template>
  <q-page padding>
    <div class="q-my-xl q-mx-lg">
      <div class="row justify-center">
        <div class="col-5">
          <q-card>
            <q-card-title>Editar</q-card-title>
            <q-card-separator />
            <q-card-main>
              <div class="row q-mt-xl justify-center">
                <div class="col-5 q-px-md">
                  <q-input
                    v-model="gender.name"
                    float-label="Sexo"
                    @keyup.enter="submit"
                    autofocus
                  />
                </div>
              </div>
              <div class="row justify-between q-pt-xl">
                <q-btn
                  color="warning"
                  label="Voltar"
                  block
                  @click="$router.push('/admin/genders')"
                />
                <q-btn
                  color="primary"
                  label="Salvar"
                  block
                  @click="submit"
                />
              </div>
            </q-card-main>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      id: this.$route.params.id,
      form: []
    }
  },
  mounted () {
    this.setGender(this.id)
  },
  computed: {
    ...mapState('genders', ['gender'])
  },
  methods: {
    ...mapActions('genders', ['setGender']),
    submit () {
      const id = this.id
      const name = this.gender.name
      this.$store.dispatch('genders/edit', { id, name })
        .then((response) => {
          this.$router.push('/admin/genders')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style>
</style>
