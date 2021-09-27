<template>
  <button class="bg-pink-500 active:bg-pink-600 text-white px-8 py-4 rounded-lg font-medium tracking-widest" @click="onClick">
    <slot class="font-medium"></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>