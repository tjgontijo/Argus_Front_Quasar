import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'
import events from './events'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      users,
      events
    }
  })

  return Store
}
