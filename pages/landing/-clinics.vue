<template>
  <section>
    <!-- Título -->
    <SectionDivider>
      INSTALACIONES DE ALTO NIVEL
    </SectionDivider>
    <div class="w-full flex flex-col md:flex-row">
      <!-- Lado izquierdo -->
      <div class="w-full md:w-2/3 p-4 md:p-8 flex items-end">
        <div class="w-full h-screen grid grid-rows-2 grid-cols-2 gap-2">
          <!-- Imágenes -->
          <div class="w-full rounded">
            <img class="rounded-lg w-full h-full object-cover object-center" src="@/assets/images/instalaciones/1.jpg" alt="">
          </div>
          <div class="w-full rounded">
            <img class="rounded-lg w-full h-full object-cover object-center" src="@/assets/images/instalaciones/3.jpg" alt="">
          </div>
          <div class="w-full rounded">
            <img class="rounded-lg w-full h-full object-cover object-center" src="@/assets/images/instalaciones/4.jpg" alt="">
          </div>
          <div class="w-full rounded">
            <img class="rounded-lg w-full h-full object-cover object-center" src="@/assets/images/instalaciones/2.jpg" alt="">
          </div>
        </div>
      </div>
      <!-- Lado derecho -->
      <div class="w-full p-4 md:p-8 md:w-1/3">
        <video
          class="w-full rounded-md"
          ref="videoPlayer"
          controls
        >
            <source src="@/assets/videos/instalaciones.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>