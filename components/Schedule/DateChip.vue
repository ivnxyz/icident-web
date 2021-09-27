<template>
  <div class="inline-block pr-2">
    <button class="bg-indigo-600 text-white px-5 py-2 rounded-full transition-all duration-400 transform hover:scale-105 hover:ml-4 cursor-pointer hover:shadow-xl">
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
    }
  }
}
</script>