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
    },
    size: {
      type: String,
      rquired: false,
      default: "12"
    }
  },
  computed: {
    spinnerClass() {
      return `border-4 rounded-full loader border-${this.color} ${this.spinnerSizeClass}`
    },
    spinnerSizeClass() {
      return `w-${this.size} h-${this.size}`
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