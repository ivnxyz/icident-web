<template>
  <div>
    <section class="min-h-screen flex items-center justify-center max-w-5xl mx-6 lg:mx-auto">
      <article class="border-2 border-gray-200 rounded-lg text-gray-800 mt-24 mb-20 p-10">
        <h1 class="text-3xl font-bold text-center mb-10">Odontopediatría</h1>

        <p>
          Los dientes de leche de tu hijo son la guía para una sonrisa permanente, requieren especial cuidado, es muy importante que tu hijo tenga una primera visita al dentista a los 2 años de edad, quédate tranquilo nuestros especialistas saben cómo tratar a niños de temprana edad.
        </p>
        
        <p class="font-semibold mt-8">
          Enseñamos a los niños buenas prácticas de salud bucal
        </p>

        <p>
          Desde temprana edad, tu hijo debe aprender la importancia de mantener una buena salud bucal, aquí algunos consejos que ayudarán a tu hijo a tener una sonrisa saludable:
        </p>

        <ul class="list-disc list-inside my-8">
          <li>Se el ejemplo en casa, los niños siempre quieren imitar a los adultos</li>
          <li>Cuando erupcionen los primeros dientes límpialos con un paño suave, cuando erupcionan los dientes traseros usa un cepillo suave</li>
          <li>Has que tus hijos adquieran la rutina diaria de lavarse los dientes</li>
          <li>Enseña a tu hijo a usar el hilo dental a los ocho o nueve años debe ser capaz de usarlo por sí mismo</li>
          <li>Usa una pasta con fluoruro con un sabor que agrade a tu hijo, la cantidad de pasta debe ser del tamaño de un chícharo, recuérdale que no debe tragar la pasta</li>
          <li>Recuerda a tu hijo cepillarse y usar el hilo dental, dile lo bien que sus dientes se verán después de hacerlo</li>
        </ul>

        <!-- Botón para agendar cita -->
        <MainButton class="block mt-8 mx-auto shadow-lg transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-xl" :isCTA="true">
          Agenda tu cita ahora
        </MainButton>
      </article>
    </section>
  </div>
</template>