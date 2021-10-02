<template>
  <button class="bg-pink-500 active:bg-pink-600 text-white px-8 py-4 rounded-lg font-medium tracking-widest flex justify-center items-center" @click="onClick">
    <!-- Spinner -->
    <Spinner v-if="loading" size="8" color="white"/>
    <!-- Contenido del botón -->
    <slot v-else class="font-medium"></slot>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    isCTA: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onClick() {
      if (!this.loading) {
        console.log('hola')
        console.log(this.isCTA)
        // Enviar a la agenda si es call to action
        if (this.isCTA) {
          this.$router.push('/agenda/formulario')
          return
        }

        this.$emit('click')
      }
    }
  }
}
</script>