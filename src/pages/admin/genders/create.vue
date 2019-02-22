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
        <div class="row justify-center">
          <div class="col-2 q-my-xl">
            <q-btn
              color="primary"
              label="Salvar"
              block
              class="full-width"
              @click="submit"
            />
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import AppModal from 'components/AppModal'
export default {
  components: {
    AppModal
  },
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
