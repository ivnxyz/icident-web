<template>
  <div>
    <NavBar/>
    <Home/>
    <Us id="us" />
    <Services id="servicios"/>
    <Care id="cuidados"/>
  </div>
</template>

<script>
// Importar componentes
import Home from './landing/-home.vue'
import Us from './landing/-us.vue'
import Services from './landing/-services.vue'
import Care from './landing/-care.vue'

export default {
  components: {
    Home,
    Us,
    Services,
    Care
  }
}
</script>
