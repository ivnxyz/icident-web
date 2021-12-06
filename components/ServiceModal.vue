<template>
  <div id v-if="showModal" class="h-screen w-full overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none justify-center items-start flex bg-black bg-opacity-40">
    <div class="my-auto w-auto mx-auto max-w-6xl">
      <!--content-->
      <div class="border-0 h-full my-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <h3 class="text-3xl font-semibold">
            {{ service.title }}
          </h3>
          <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="closeModal">
            <span class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              <outline-x-icon class="w-6 h-6 inline text-black"/>
            </span>
          </button>
        </div>
        <!--body-->
        <component class="relative p-6 flex-auto" :is="componentInstance"></component>
        <!-- Botón para agendar cita -->
        <MainButton class="block mt-8 mb-8 mx-auto shadow-lg transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-xl" :isCTA="true">
          Agenda tu cita aquí
        </MainButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      requied: true
    },
    service: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
  computed: {
    componentInstance () {
      const serviceUrl = this.service.url
      return () => import(`@/pages/servicios/${serviceUrl}.vue`)
    }
  },
  watch: {
    showModal(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }
 
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  }
}
</script>

<style>

</style>