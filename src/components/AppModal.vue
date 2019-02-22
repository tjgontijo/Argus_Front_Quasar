<template>
  <q-modal
    color="tertiary"
    v-model="opened"
    :content-css="{minWidth: '60vw', minHeight: '50vh'}"
    @hide="closeModal"
  >
    <q-modal-layout>
      <q-toolbar slot="header" color="tertiary">
        <q-toolbar-title>
          {{ title.toUpperCase() }}
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          v-close-overlay
          icon="clear"
        />
      </q-toolbar>

      <slot/>

    </q-modal-layout>
  </q-modal>
</template>

<script>
import {QModal, QModalLayout} from 'quasar'
export default {
  name: 'AppModal',
  components: {
    QModal,
    QModalLayout
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    opened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style>
</style>
