<template>
  <q-page padding>
      <div class="q-my-xl q-mx-lg">
        <span class="text-center">
          <div class="q-display-1">Cadastrar nova Raça, cor ou Etinia</div>
        </span>
        <div class="row q-mt-xl justify-center">
          <div class="col-5 q-px-md">
            <q-input
              v-model="breed.name"
              float-label="Raça, cor ou Etinia"
              autofocus
              @keyup.enter="submit"
            />
          </div>
        </div>
        <div class="row q-py-lg justify-between">
                <q-btn color="warning" label="Voltar" block @click="$router.push('/admin/breeds')"/>
                <q-btn color="primary" label="Salvar" block @click="submit"/>
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
      this.$store.dispatch('breeds/create', { name }).then((response) => {
        this.$router.push('/admin/breeds')
      })
    }
  }
}
</script>

<style>
</style>
