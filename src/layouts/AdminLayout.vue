<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="tertiary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          dMb
          <div slot="subtitle">Divulga Maiz Brazil</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header></q-list-header>
        <q-item to="/admin/home">
          <q-item-side icon="fas fa-home" />
          <q-item-main label="Painel Inicial" sublabel="" />
        </q-item>
        <q-item to="/admin/users">
          <q-item-side icon="fas fa-user-friends" />
          <q-item-main label="Usuários" sublabel="" />
        </q-item>
        <q-item to="/admin/events">
          <q-item-side icon="far fa-calendar-alt" />
          <q-item-main label="Eventos" sublabel="" />
        </q-item>
        <q-item to="/admin/clients">
          <q-item-side icon="far fa-address-card" />
          <q-item-main label="Clientes" sublabel="" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
