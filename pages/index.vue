<template>
  <div>
    <NavBar/>
    <Home/>
    <Services id="servicios"/>
  </div>
</template>

<script>
// Importar componentes
import Home from './landing/-home.vue'
import Services from './landing/-services.vue'

export default {
  components: {
    Home,
    Services
  }
}
</script>
