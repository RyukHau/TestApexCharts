import { boot } from 'quasar/wrappers'
import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp({})

// set boot to default set apexchart
export default boot(({ app }) => {
  app.use(VueApexCharts)
  app.mount('#app')
})

export { app }
