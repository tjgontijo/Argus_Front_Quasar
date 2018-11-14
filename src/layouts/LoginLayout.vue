<template>
    <q-layout>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>

<script>
export default {
  name: 'LoginLayout',
  data () {
    return {
    }
  },
  created () {
    let usuario = sessionStorage.getItem('user')
    if (usuario) {
      this.user = JSON.parse(usuario)
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
