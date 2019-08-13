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
                    v-model="breed.name"
                    float-label="Raça, cor ou Etinia"
                    autofocus
                    @keyup.enter="submit"
                  />
                </div>
              </div>
              <div class="row justify-between q-pt-xl">
                <q-btn
                  color="warning"
                  label="Voltar"
                  block
                  @click="$router.push('/admin/breeds')"
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
      breed: []
    }
  },
  methods: {
    submit () {
      const name = this.breed.name
      this.$store.dispatch('breeds/create', { name }).then(response => {
        this.$router.push('/admin/breeds')
      })
    }
  }
}
</script>

<style>
</style>
