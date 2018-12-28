<template>
  <q-page padding class="docs-input row justify-center">
     <div class="q-pa-md">
      <div class="row">
      <div class="col">
         <div style="width: 70vw; max-width: 90vw;">
           <q-card>
            <q-card-title>
              <p class="q-display-1">Atualizar Cadastro</p>
            </q-card-title>
            <q-card-separator />
            <q-card-main>
               <div class="row q-py-md justify-between">
              <div class="col-md-5 col-sm-12 col-xs-12">
                <q-input v-model="user.username" stack-label="Nome" />
              </div>
              <div class="col-md-5 col-sm-12 col-xs-12">
                <q-input v-model="user.email" stack-label="E-mail" />
              </div>
            </div>
            <div class="row q-py-md justify-between">
              <div class="col-md-3 col-sm-12 col-xs-12">
                <q-input v-model="user.cpf" type="text" v-mask="'###.###.###-##'" stack-label="CPF" />
              </div>
              <div class="col-md-3 col-sm-12 col-xs-12">
                <q-input v-model="user.rg" type="number" stack-label="RG" />
              </div>
              <div class="col-md-3 col-sm-12 col-xs-12">
                <q-datetime minimal v-model="user.dt_birth" type="date" format="D/MM/YYYY" default-view="year" stack-label="Data de Nascimento"/>
              </div>
            </div>
            <div class="row q-py-md justify-between">
              <div class="col-md-3 col-sm-12 col-xs-12">
                <q-select v-model="user.gender_id" clearable separator stack-label="Gênero" :options="genders" />
              </div>
              <div class="col-md-3 col-sm-12 col-xs-12">
                <q-select v-model="user.breed_id" clearable separator stack-label="Raça / Cor / Etinia" :options="breeds" />
              </div>
              <div class="col-md-3 col-sm-12 col-xs-12">
                <q-select v-model="user.orientation_id" clearable separator stack-label="Orientação" :options="orientations" />
              </div>
            </div>
            <div class="row q-py-lg justify-between">
                <q-btn color="warning" to="/admin" icon="skip_previous" label="Voltar" />
                <q-btn color="primary" icon-right="loop" label="Atualizar" />
            </div>
            </q-card-main>
          </q-card>
          </div>
        </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  directives: { mask },
  data () {
    return {
      user: {
        name: '',
        username: '',
        rg: '',
        cpf: '',
        dt_birth: '',
        gender_id: '',
        breed_id: '',
        orientation_id: ''
      },
      genders: [
      ],
      breeds: [
      ],
      orientations: [
      ]
    }
  },
  mounted () {
    this.getGenders()
    this.getBreeds()
    this.getOrientations()
  },
  methods: {
    getGenders () {
      this.$store.dispatch('genders/setGenders').then(() => {
        this.genders = this.$store.getters['genders/getAllGenders']
      })
    },
    getBreeds () {
      this.$store.dispatch('breeds/setBreeds').then(() => {
        this.breeds = this.$store.getters['breeds/getAllBreeds']
      })
    },
    getOrientations () {
      this.$store.dispatch('orientations/setOrientations').then(() => {
        this.orientations = this.$store.getters['orientations/getAllOrientations']
      })
    }
  }
}
</script>
