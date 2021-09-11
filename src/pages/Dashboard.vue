<template>
    <div class="container">
        <h2>Vue3-ApexChart</h2>
        <br />
        <BarChart />
        <p>End</p>
    </div>
</template>

<script>
// Get chart components
import BarChart from 'components/Charts/BarChart'

export default {
  name: 'Dashboard',
  components: {
    // use barchart
    BarChart
  },
  data: function () {
    return {}
  }
}
</script>
