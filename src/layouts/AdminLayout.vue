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

        <q-toolbar-title class="row">
          <div class="col-6 offset-5">
            <img src="https://argus.iscp.edu.br/img/site/logo.png" width="120vw">
          </div>
          <div slot="subtitle"></div>
        </q-toolbar-title>
        <q-btn
          round
          @click="toggleMenuUser" icon="more_vert">
          <q-popover v-model="showing">
            <q-list
              highlight
              link>
              <!-- notice `v-close-overlay` which closes popover -->
              <!--<q-item v-close-overlay @click.native="doSomething">-->
              <q-item
                v-for="item in items"
                :to="item.to"
                @click.native="item.click"
                :key="item.title"
                :disabled="item.disabled"
                separator
                v-close-overlay
                >
                <q-item-side
                  left
                  v-if="item.icon"
                  :icon="item.icon"
                  :color="item.color">
                </q-item-side>
                <q-item-main
                  :label="item.title"
                  :sublabel="item.subtitle"/>
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
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
                <img src="assets/logo.png" class="row" width="90%">
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
        <q-collapsible group="somegroup" icon="remove" label="Cadastro Base">
          <q-item to="genders">
            <q-item-side icon="face" />
            <q-item-main label="Sexos" sublabel="" />
          </q-item>
          <q-item to="breeds">
            <q-item-side icon="adjust" />
            <q-item-main label="Raça/Cor/Etinia" sublabel="" />
          </q-item>
          <q-item to="units">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Unidades" sublabel="" />
          </q-item>
          <!-- <q-item to="type-units">
            <q-item-side icon="phone" />
            <q-item-main label="Tipos de Unidades" sublabel="" />
          </q-item> -->
          <q-item to="#">
            <q-item-side icon="alternate_email" />
            <q-item-main label="Tipos de E-mail" sublabel="" />
          </q-item>
          <!-- <q-item to="#">
            <q-item-side icon="far fa-eye" />
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
          </q-item> -->
          <!-- <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Nível de Divulgador" sublabel="" />
          </q-item> -->
        </q-collapsible>
        <q-item-separator />
        <q-collapsible group="somegroup" icon="remove" label="Usuários">
          <q-item to="/admin/users">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Cadastro de Usuários" sublabel="" />
          </q-item>
          <q-item to="/admin/users/profile-edit">
            <q-item-side icon="perm_identity" />
            <q-item-main label="Editar Perfil" sublabel="" />
          </q-item>
        </q-collapsible>
        <q-item-separator />
        <!-- <q-collapsible group="somegroup" icon="perm_identity" label="Divulgadores">
          <q-item to="#">
            <q-item-side icon="fas fa-user-friends" />
            <q-item-main label="Cadastro de Divulgadores" sublabel="" />
          </q-item>
        </q-collapsible> -->
        <!-- <q-item-separator />
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
        <q-item-separator /> -->
        <!-- <q-collapsible group="somegroup" icon="shopping_cart" label="Clientes">
           <q-item to="/admin/clients">
            <q-item-side icon="far fa-address-card" />
            <q-item-main label="Clientes" sublabel="" />
          </q-item>
        </q-collapsible> -->
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
      user: '',
      items: [
        {
          icon: 'far fa-user',
          disabled: false,
          to: '#',
          title: 'Perfil',
          color: 'primary',
          subtitle: '',
          click: (e) => {
            console.log(e)
          }
        },
        {
          icon: 'fas fa-cog',
          disabled: false,
          to: '#',
          title: 'Configurações',
          color: 'green',
          subtitle: '',
          click: (e) => {
            console.log(e)
          }
        },
        {
          icon: 'fas fa-sign-out-alt',
          to: '#',
          title: 'Sair',
          color: 'red',
          subtitle: '',
          click: (e) => {
            this.$store.commit('users/SET_USER_LOGGED', null)
            this.$router.push('/login')
            sessionStorage.clear()
          }
        }
      ],
      showing: false
    }
  },
  methods: {
    sair () {
    },
    toggleMenuUser () {
      this.showing = !this.showing
    }
  },
  created () {
    let usuario = this.$store.getters['users/getUserLogged']
    if (usuario) {
      this.user = this.$store.getters['users/getUserLogged']
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
