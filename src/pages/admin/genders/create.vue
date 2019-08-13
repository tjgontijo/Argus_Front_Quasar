<template>
  <q-page padding>
    <div class="q-ma-xl">
      <div class="row justify-center">
        <div class="col">
          <q-card>
            <q-card-title>Adicionar</q-card-title>
            <q-card-separator />
            <q-card-main>
              <div class="row q-mt-xl justify-center">
                <div class="col-auto">
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
export default {
  data () {
    return {
      gender: []
    }
  },
  methods: {
    submit () {
      const name = this.gender.name
      this.$store.dispatch('genders/create', { name }).then((response) => {
        this.$router.push('/admin/genders')
      })
    }
  }
}
</script>
