<template>
  <div class="relative overflow-hidden">
    <Home/>
    <Us id="us" />
    <Services id="servicios"/>
    <Gallery id="galeria"/>
    <Care id="cuidados"/>
    <Location class="mt-16" id="nosotros"/>
    <Clinics class="mt-16" id="Instalaciones" />
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
