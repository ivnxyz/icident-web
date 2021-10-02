<template>
  <div :class="spinnerClass"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'blue-300'
    }
  },
  computed: {
    spinnerClass() {
      return 'w-12 h-12 border-4 rounded-full loader border-' + this.color
    }
  }
}
</script>

<style scoped>
  @keyframes loader-rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .loader {
      border-right-color: transparent;
      animation: loader-rotate 1s linear infinite;
  }
</style>