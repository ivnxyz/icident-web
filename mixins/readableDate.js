// Importar dependencias
import Vue from 'vue'
import dayjs from '~/utils/day.js'

// Exportar funciones
export default {
  methods: {
    capitalize(str) {
      const firstLetter = str[0].toUpperCase()
      return firstLetter + str.slice(1)
    },
    getReadableDate(date) {
      return this.capitalize(dayjs(date, 'YYYY-MM-DD').format('dddd D'))
    }
  }
}