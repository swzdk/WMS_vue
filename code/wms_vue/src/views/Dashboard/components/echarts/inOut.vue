<template>
  <div>
    <v-chart class="chart" :option="option" :autoresize="true" />
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
  mounted() {},
  data() {
    return {
      option: {
        color: ['#ff7100', '#ffb200'],
        tooltip: {
          // 触发类型  经过轴触发axis
          trigger: 'axis',
          axisPointer: {
            // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果
            type: 'shadow'
          }
        },
        legend: {
          orient: 'horizontal',
          x: 'center',
          y: 'bottom'
        },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: []
      }
    }
  },
  methods: {
    resizeTheChart() {
      if (this.$refs.chart) {
        this.$refs.chart.resize()
      }
    }
  },
  computed: {
    ...mapGetters('echarts', ['optInOut'])
  },
  watch: {
    optInOut: {
      deep: true,
      immediately: true,
      handler() {
        this.option.xAxis.data = this.optInOut.x
        // 先清空数据数组
        this.option.series = []
        // 再根据内容进行填充
        this.optInOut.data.forEach((item) =>
          this.option.series.push({
            data: item.data,
            type: 'bar',
            name: item.name
          })
        )
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>