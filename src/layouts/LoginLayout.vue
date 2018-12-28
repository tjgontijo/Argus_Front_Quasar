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
      user: ''
    }
  },
  created () {
    let usuario = this.$store.getters['users/getUserLogged']
    if (usuario) {
      this.user = this.$store.getters['users/getUserLogged']
      this.$router.push('admin/home')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
<style>
</style>
