<template>
  <div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart
])

export default {
  name: 'HelloWorld',
  components: {
    VChart
  },
  provide: {},
  data() {
    return {
      option: {
        color: ['#e4dbda', '#ffaa00'],
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            label: {
              show: false
            },
            radius: ['50%', '70%'],
            data: []
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('echarts', ['opStockUse'])
  },
  watch: {
    opStockUse: {
      deep: true,
      immediately: true,
      handler() {
        this.option.series[0].data = this.opStockUse
      }
    }
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>