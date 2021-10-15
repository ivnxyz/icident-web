<template>
  <div>
    <Home/>
    <Us id="us" />
    <Services id="servicios"/>
    <Gallery id="galeria"/>
    <Care id="cuidados"/>
    <Footer class="mt-16" id="contacto"/>
  </div>
</template>

<script>
// Importar componentes
import Home from './landing/-home.vue'
import Us from './landing/-us.vue'
import Services from './landing/-services.vue'
import Gallery from './landing/-gallery.vue'
import Care from './landing/-care.vue'

export default {
  components: {
    Home,
    Us,
    Services,
    Gallery,
    Care
  }
}
</script>
