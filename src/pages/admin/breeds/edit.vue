<template>
  <q-page padding>
      <div class="q-my-xl q-mx-lg">
        <span class="text-center">
          <div class="q-display-1">Raça, cor ou Etinia</div>
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
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      id: this.$route.params.id,
      form: []
    }
  },
  mounted () {
    this.setBreed(this.id)
  },
  computed: {
    ...mapState('breeds', ['breed'])
  },
  methods: {
    ...mapActions('breeds', ['setBreed']),
    submit () {
      const id = this.id
      const name = this.breed.name
      this.$store.dispatch('breeds/edit', {id, name})
        .then((response) => {
          this.$router.push('/admin/breeds')
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
