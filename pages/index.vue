<template>
  <div class="relative overflow-hidden">
    <!-- Botón de WhatsApp -->
    <WhatsAppButton class="z-10 fixed bottom-4 left-4 md:bottom-6 md:left-6" />
    <!--  -->
    <Home/>
    <Us />
    <Services id="servicios"/>
    <Gallery id="galeria"/>
    <Care id="visita"/>
    <Location class="mt-16" id="nosotros"/>
    <Clinics class="mt-16" id="instalaciones" />
    <Contact class="mt-32" id="contacto" />
    <Footer/>
  </div>
</template>

<script>
// Importar componentes
import Home from './landing/-home.vue'
import Us from './landing/-us.vue'
import Services from './landing/-services.vue'
import Gallery from './landing/-gallery.vue'
import Care from './landing/-care.vue'
import Location from './landing/-location.vue'
import Clinics from './landing/-clinics.vue'
import Contact from './landing/-contact.vue'

export default {
  components: {
    Home,
    Us,
    Services,
    Gallery,
    Care,
    Location,
    Clinics,
    Contact
  }
}
</script>
