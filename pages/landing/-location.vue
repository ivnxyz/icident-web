<template>
  <section class="w-full flex flex-col md:flex-row">
    <!-- Lado izquierdo -->
    <div class="w-full md:w-2/3 p-4 md:p-8 flex items-end">
      <div class="w-full h-screen">
        <!-- Título -->
        <div class="h-1/3 relative">
          <img class="h-full object-contain absolute -left-24 -top-8" src="@/assets/conocenos.png" alt="Conócenos: Av. Tiburón 160-interior 21, Costa de Oro, 94299 Boca del Río, Ver.">
        </div>
        <!-- Imagen de google maps -->
        <img class="h-2/3 bg w-full object-cover rounded-md" src="@/assets/ubicacion.png" alt="Imagen con la ubicación en Google Maps">
      </div>
    </div>
    <!-- Lado derecho -->
    <div class="w-full p-4 md:p-8 md:w-1/3">
      <video
        class="w-full rounded-md"
        ref="videoPlayer"
        controls
      >
          <source src="@/assets/videos/como-llegar.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
}
</script>