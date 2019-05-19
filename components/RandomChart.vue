<template lang="pug">
  .weather
    line-chart(:chart-data="datacollection" :options="options" ref="chart")
    //- button(@click="fillData()") Randomize
</template>

<script>
  import LineChart from '~/assets/LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        options: {
          maintainAspectRatio: false,
          legend: {
            labels: {
              // fontColor: 'red',
              // fontFamilt: 'georgia'
            }
          },
          elements: {
            point: {
              radius: 2
            }
          },
          layout: {
            padding: 16
          },
          // showLines: false,
        scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                color: 'rgba(0,0,0,.1)'
              },
              scaleLabel: {
                display: true,
                labelString: '°C'
              }
            }]
          }
        },
        datacollection: null,
        canvas: null,
        gradient: null,
        gradient2: null
      }
    },
    mounted () {
      this.canvas = this.$refs.chart.$refs.canvas
      console.log('chart', this.$refs.chart.$data._chart)
      this.gradient = this.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.gradient2 = this.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
      this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
      this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
      
      this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
      this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
      this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['jan', 'fab', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept'],
          datasets: [
            {
              label: 'Sacramento',
              data: [12, 19, -10, 5, 2, 3, 6, 7, 8],
              backgroundColor: this.gradient,
              borderWidth: 1,
              pointBackgroundColor: 'white',
              // pointRadius: 1,
              borderColor: 'darkorange'
            }, 
            {
              label: 'Helsinki',
              // pointRadius: 1,
              borderWidth: 1,
              pointBackgroundColor: 'white',
              backgroundColor: this.gradient2,
              borderColor: 'red',
              data: [8, 7, 5, 7, 3, 5, 9, 1, 0]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
.weather {
  position: relative;
  /* background: linear-gradient(orange, dodgerblue); */
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 2px 30px rgba(25, 25, 25, 0.15);
  margin:  25px 0;
}
</style>