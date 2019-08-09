<template>
  <q-page padding>
      <div class="q-my-xl q-mx-lg">
        <span class="text-center">
          <div class="q-display-1">Cadastrar novo Sexo</div>
        </span>
        <div class="row q-mt-xl justify-center">
          <div class="col-5 q-px-md">
            <q-input
              v-model="gender.name"
              float-label="Sexo"
              autofocus
              @keyup.enter="submit"
            />
          </div>
        </div>
        <div class="row q-py-lg justify-between">
                <q-btn color="warning" label="Voltar" block @click="$router.push('/admin/genders')"/>
                <q-btn color="primary" label="Salvar" block @click="submit"/>
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

<style>
</style>
