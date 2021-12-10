<template>
  <section class="">
    <!-- Modal con la información -->
    <DiagnosisModal :showModal="showModal" @close-modal="closeModal" />
    <!-- Título -->
    <SectionDivider>
      ¿QUÉ DEBES ESPERAR EN TU PRIMERA VISITA?
    </SectionDivider>
    <!-- Contenido -->
    <div class="grid grid-rows-4 gap-8 md:gap-8 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 mx-8 md:mx-10 mt-8 md:mt-0">
      <!-- Registro -->
      <article class="grid grid-rows-2">
        <div class="flex flex-col justify-center items-center">
          <img class="object-contain object-center w-32 h-32" src="@/assets/icons/registro.svg" alt="">
          <p class="text-center mt-3 text-lg font-bold text-gray-500">REGISTRO</p>
        </div>
        <div class="bg-gray-200 rounded-lg p-3 shadow-lg">
          <p>
            Al llegar a clínica inicialmente es necesario cumplir con el protocolo de sanidad con el COVID 19, se tomará tu temperatura y se te pedirá aplicar gel antibacterial en manos, posteriormente se te pedirán algunos datos de registro que formarán parte de tu historia clínica.
          </p>
        </div>
      </article>
      <!-- Diagnóstico -->
      <article class="grid grid-rows-2">
        <div class="flex flex-col justify-center items-center">
          <img class="w-32 h-32" src="@/assets/icons/diagnostico.svg" alt="">
          <p class="mt-2 text-lg font-bold text-gray-500">DIAGNÓSTICO</p>
        </div>
        <div class="bg-gray-200 rounded-lg p-3 shadow-lg">
          <p>
            Nuestro odontólogo general continuará con algunos cuestionamientos sobre tu situación de salud, alergias e intervenciones quirúrgicas previas, de esta manera tu historia clínica estará completa. Posteriormente, hará una revisión visual en tu boca y evaluará...
          </p>
          <button @click="toggleModal" class="text-center w-full font-bold mt-3 mb-2 text-gray-400 underline">
            Ver más
          </button>
        </div>
      </article>
      <!-- Formas de pago -->
      <article class="grid grid-rows-2">
        <div class="flex flex-col justify-center items-center">
          <img class="object-contain object-center w-32 h-32" src="@/assets/icons/formas-de-pago.svg" alt="">
          <p class="mt-2 text-lg font-bold text-gray-500">FORMAS DE PAGO</p>
        </div>
        <div class="bg-gray-200 rounded-lg p-3 shadow-lg">
          <div class="step">
            <div>
                <div class="circle">
                  <img src="@/assets/icons/check.svg" alt="Icono de verificación">
                </div>
            </div>
            <div>
                <div class="title">Efectivo</div>
            </div>
          </div>
          <div class="step step-active">
            <div>
                <div class="circle">
                  <img src="@/assets/icons/check.svg" alt="Icono de verificación">
                </div>
            </div>
            <div>
                <div class="title">Transferencias</div>
            </div>
          </div>
          <div class="step">
            <div>
                <div class="circle">
                  <img src="@/assets/icons/check.svg" alt="Icono de verificación">
                </div>
            </div>
            <div>
                <div class="title">Tarjeta de crédito<br>o débito</div>
            </div>
          </div>
        </div>
      </article>
      <!-- Financiamiento -->
      <article class="grid grid-rows-2">
        <div class="flex flex-col justify-center items-center">
          <img class="object-contain object-center w-32 h-32" src="@/assets/icons/financiamiento.svg" alt="">
          <p class="mt-2 text-lg font-bold text-gray-500">FINANCIAMIENTO</p>
        </div>
        <div class="bg-gray-200 rounded-lg p-3 shadow-lg">
          <p>
            En ICI el paciente es nuestra prioridad, en el caso de un tratamiento largo y con un presupuesto elevado tenemos alternativas de financiamiento ya sea directamente con nosotros o a través de nuestro aliado Alivio Capital financiera especializada en otorgar préstamos para tratamiento de salud.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    showModal: false,
  }),
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.step {
  position: relative;
  min-height: 1em;
}
.title {
  line-height: 1.5em;
}
.caption {
  font-size: 0.8em;
}
.step + .step {
  margin-top: 1.5em
}
.step > div:first-child {
  position: static;
  height: 0;
}
.step > div:not(:first-child) {
  margin-left: 1.5em;
  padding-left: 1em;
}

.circle {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  text-align: center;
}

.circle:after {
  content: '';
  position: absolute;
  display: block;
  top: -2px;
  right: 50%;
  bottom: 1px;
  left: calc(50% - calc(3px/2));
  height: 100%;
  width: 3px;
  transform: scale(1, 2);
  transform-origin: 50% -100%;
  background-color: rgba(0,0,0);
}

.step:last-child .circle:after {
  display: none
}
</style>