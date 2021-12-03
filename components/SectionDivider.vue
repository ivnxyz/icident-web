<template>
  <div class="font-bold">
    <hr class="line-divider">
      <h2 class="tracking-wider my-4 text-gray-500 text-xl md:text-3xl text-center">
        <slot/>
      </h2>
    <hr class="line-divider">
  </div>
</template>

<style scoped>
.line-divider {
  height: 2px;
  background: lightgray;
}
</style>