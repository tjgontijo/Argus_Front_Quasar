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
          <div slot="subtitle"></div>
        </q-toolbar-title>
        <q-btn flat round dense icon="exit_to_app" title="Sair" v-on:click="sair()"/>
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
        <q-list-header>
          <div class="row">
            <div class="col-11 offset-1">
              <a href="/">
                <img src="https://ubisafe.org/images/transparent-png-logo-6.png" alt="" class="row" width="90%">
              </a>
            </div>
          </div>
        </q-list-header>
        <q-item-separator />
         <q-item to="/admin/home">
          <q-item-side icon="fas fa-home" />
          <q-item-main label="Painel Inicial" sublabel="" />
        </q-item>
        <q-item-separator />
        <q-collapsible group="somegroup" icon="explore" label="Cadastro Base">
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Genêros" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Raça/Cor/Etinia" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Tipos de Telefones" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Tipos de E-mail" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Cores de Olhos" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Cores de Cabelos" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Ramos de Atividades" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Categoria de interesses" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Interesses" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Nível de Divulgador" sublabel="" />
          </q-item>
        </q-collapsible>
        <q-item-separator />
        <q-collapsible group="somegroup" icon="perm_identity" label="Usuários">
          <q-item to="/admin/users">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Cadastro de Usuários" sublabel="" />
          </q-item>
        </q-collapsible>
        <q-item-separator />
        <q-collapsible group="somegroup" icon="perm_identity" label="Divulgadores">
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Cadastro de Divulgadores" sublabel="" />
          </q-item>
        </q-collapsible>
        <q-item-separator />
        <q-collapsible group="somegroup" icon="shopping_cart" label="Eventos">
          <q-item to="#">
            <q-item-side icon="far fa-calendar-alt" />
            <q-item-main label="Calendario" sublabel="" />
          </q-item>
          <q-item to="#">
            <q-item-side icon="far fa-calendar-alt" />
            <q-item-main label="Cards de Eventos" sublabel="" />
          </q-item>
          <q-item to="/admin/events">
            <q-item-side icon="far fa-calendar-alt" />
            <q-item-main label="Cadastro de Eventos" sublabel="" />
          </q-item>
        </q-collapsible>
        <q-item-separator />
        <q-collapsible group="somegroup" icon="shopping_cart" label="Clientes">
           <q-item to="/admin/clients">
            <q-item-side icon="far fa-address-card" />
            <q-item-main label="Clientes" sublabel="" />
          </q-item>
        </q-collapsible>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      user: false
    }
  },
  methods: {
    sair () {
      sessionStorage.clear()
      this.user = false
      this.$router.push('/login')
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
