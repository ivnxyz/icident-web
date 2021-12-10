<template>
  <div id v-if="showModal" class="h-screen w-full overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none justify-center items-start flex bg-black bg-opacity-40">
    <div class="my-auto w-auto mx-auto max-w-6xl">
      <!--content-->
      <div class="border-0 h-full my-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="closeModal">
            <span class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              <outline-x-icon class="w-6 h-6 inline text-black"/>
            </span>
          </button>
        </div>
        <!--body-->
        <p class="my-4 mx-6">
          Nuestro odontólogo general continuará con algunos cuestionamientos sobre tu situación de salud, alergias e intervenciones quirúrgicas previas, de esta manera tu historia clínica estará completa. Posteriormente, hará una revisión visual en tu boca y evaluará si el necesario tomar alguna placa de rayos X para tener un diagnóstico preciso. Una vez realizado el diagnóstico se te informará a detalle el resultado y lo más importante se te explicará a detalle el plan de tratamiento a seguir para que recuperes al 100% tu salud bucal.
        </p>
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
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
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