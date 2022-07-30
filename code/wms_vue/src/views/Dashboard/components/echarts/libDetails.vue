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
  provide: {
    // [THEME_KEY]: 'dark'
  },
  data() {
    return {
      option: {
        color: ['#0081ff', '#52d4f3', '#5d7092', '#ffb200', '#ff7100'],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: 'right',
          top: 'center',
          formatter: function (name) {
            const data = [
              { value: 348, name: '拣货区' },
              { value: 487, name: '出货区' },
              { value: 677, name: '暂存库区' },
              { value: 126, name: '进货暂存区' },
              { value: 298, name: '出货暂存区' }
            ]
            // console.log(data, 'data')
            let total = 0
            let tarValue
            for (let i = 0; i < data.length; i++) {
              total += data[i].value
              if (data[i].name === name) {
                tarValue = data[i].value
              }
            }
            const v = tarValue
            // 计算出百分比
            const p = Math.round((tarValue / total) * 100) + '%'
            return `${name}           ${p}            ${v}`
            // name是名称，v是数值
          }
        },
        series: [
          {
            label: {
              show: true,
              position: 'inner',
              formatter: '{c}',
              color: '#fff'
            },
            type: 'pie',
            radius: '50%',
            data: []
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('echarts', ['optAreaUse'])
  },
  watch: {
    optAreaUse(value) {
      this.option.series[0].data = this.optAreaUse
    }
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>