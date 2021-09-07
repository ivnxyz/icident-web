<template>
  <section 
    class="h-screen flex flex-col items-center justify-center bg-no-repeat bg-center"
    :style="sectionStyle"
  >
    <div class="m-8 text-center flex flex-col items-center justify-center flex-grow">
      <!-- Cita -->
      <blockquote class="mb-4 text-right tracking-wide">
        <h1 class="font-serif text-3xl font-semibold text-white">
          "La paz comienza con una sonrisa."
        </h1>
      </blockquote>
      <figcaption class="text-right tracking-wide">
        <p class="font-serif text-lg text-white">
          Madre Teresa de Calcuta
        </p>
      </figcaption>
      <!-- CTA -->
      <MainButton class="mt-10">
        Agenda tu cita ahora
      </MainButton>
    </div>
    <div class="mb-6 flex flex-col items-center">
      <p class="text-white text-md tracking-widest"> Descubre nuestros servicios</p>
      <p class="text-white text-3xl">v</p>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    sectionStyle() {
      return "background: url('https://i.ibb.co/gSpPF98/big-smile.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover;"
    }
  }
}
</script>