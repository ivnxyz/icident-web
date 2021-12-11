<template>
  <section class="w-full flex flex-col md:flex-row">
    <!-- Lado izquierdo -->
    <div class="w-full md:w-2/3 p-4 md:p-4 flex items-end">
      <div class="w-full h-screen">
        <!-- Título -->
        <div class="h-1/3 relative">
          <img class="h-full object-contain absolute -left-24 -top-8" src="@/assets/conocenos.png" alt="Conócenos: Av. Tiburón 160-interior 21, Costa de Oro, 94299 Boca del Río, Ver.">
        </div>
        <!-- Imagen de google maps -->
        <!-- <img class="" src="@/assets/ubicacion.png" alt="Imagen con la ubicación en Google Maps"> -->
        <GMap
        ref="gMap"
        class="h-full bg w-full object-cover rounded-md"
        language="es"
        :center="{lat: location.lat, lng: location.lng}"
        :zoom="19"
      >
        <GMapMarker :position="{lat: location.lat, lng: location.lng}">
          <GMapInfoWindow :options="{maxWidth: 200}">
            <h4 class="font-medium text-lg">
              ICI clínica dental
            </h4>
            <br>
            <a class="text-blue-400 text-secondary font-medium hover:text-secondary-dark" target="_blank" href="https://www.google.com/maps/place/ICI+Cl%C3%ADnica+Dental/@19.1580506,-96.1087074,21z/data=!4m5!3m4!1s0x85c3418b052584fb:0x67277dc9da175814!8m2!3d19.1581478!4d-96.1084761">
              Ver en mapas <outline-chevron-right-icon class="inline w-6 h-6" />
            </a>
          </GMapInfoWindow>
        </GMapMarker>
      </GMap>
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
  data: () => ({
    location: {
      lat: 19.15812247367335,
      lng: -96.1084852073412
    }
  })
}
</script>