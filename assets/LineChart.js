import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
import Chart from 'chart.js'
Chart.defaults.global.defaultFontFamily = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  data: () => ({
    htmlLegend: null
  }),
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
    this.htmlLegend = this.generateLegend()
  }
}
