<template>
  <div class="inline-block pr-2">
    <button @click="onClick" :class="buttonClass">
      {{ date }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click', this.date)
    }
  },
  computed: {
    buttonClass() {
      const baseClass = "text-white px-5 py-2 rounded-full transition-all duration-400 transform hover:scale-105 hover:ml-4 cursor-pointer hover:shadow-xl "

      if (!this.isSelected) {
        return baseClass + "bg-indigo-600"
      }

      return baseClass + "bg-pink-500"
    },
  }
}
</script>