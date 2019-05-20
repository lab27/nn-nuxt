<template lang="pug">
  .weather
    h3 Average Yearly Weather In Places I've Lived
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
        apiKey: 'e8c6b8a55b6673e312b97ca87cb3b487',
        options: {
          title: {
            display: false,
            text: ["Average Yearly Weather", "In Places I've Lived"],
            fontSize: 21,
            fontStyle: 'bold',
            lineHeight: 1.2,
            position: 'top'
          },
          maintainAspectRatio: false,
          legend: {
            display: true,
            onClick: this.legendClickHandler,
            // position: 'bottom',
            fullWidth: true,
            labels: {
              padding: 40,
              boxWidth: 10,
              filter: function(item, chart) {
                    // Logic to remove a particular legend item goes here
                    console.log('item', item)
                    return item.datasetIndex % 2 == 0;
                    // return !item.text.includes('label to remove');
                },
              fontStyle: 'bold',
              // fontFamily: 'georgia'
            }
          },
          elements: {
            point: {
              radius: 0
            },
            line: {
              borderWidth: 0
            } 
          },
          layout: {
            padding: {
              top: 0
            }
          },
          // showLines: false,
        scales: {
            xAxes: [{
              display: true,
              gridLines: {
                color: 'rgba(0,0,0,.05)'
              },
              scaleLabel: {
                display: true,
                labelString: 'Month',
                fontStyle: 'bold',
                padding: {
                  top: 16
                }
              }
            }],
            yAxes: [{
              // type: 'logarithmic',
              ticks: {
                min: -20,
                max: 40
              },
              display: true,
              gridLines: {
                color: 'rgba(0,0,0,.1)'
              },
              scaleLabel: {
                display: true,
                labelString: '°C',
                fontStyle: 'bold'
              }
            }]
          }
        },
        datacollection: null,
        canvas: null,
        gradient: null,
        gradient2: null,
        gradient3: null
      }
    },
    mounted () {
      this.canvas = this.$refs.chart.$refs.canvas
      console.log('chart', this.$refs.chart.$data._chart)
      this.gradient = this.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.gradient2 = this.canvas.getContext('2d').createLinearGradient(0, 50, 0, 300)
      this.gradient3 = this.canvas.getContext('2d').createLinearGradient(0, 50, 0, 300)
      this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
      this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
      this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
      
      this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
      this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
      this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

      this.gradient3.addColorStop(0, 'rgba(0, 5, 255, 0.9)')
      this.gradient3.addColorStop(0.5, 'rgba(0, 5, 255, 0.25)')
      this.gradient3.addColorStop(1, 'rgba(0, 5, 255, 0)')
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Sacramento',
              data: [13, 17, 19, 23, 28, 32, 34, 34, 32, 27, 19, 13],
              backgroundColor: this.gradient,
              fill: 1
            }, 
            {
              label: 'Sacramento Low',
              data: [4,5,7,8,11,13,15,15,13,10,6,4],
              fill: 0,
              legend: {
                display: false
              }
            },
            {
              label: 'Helsinki',
              data: [-2,-2,2,7,14,19,21,20,15,9,4,1],
              backgroundColor: this.gradient2,
              fill: 3
            },
            {
              label: 'Helsinki Low',
              data: [-7,-7,-4,1,6,11,14,13,9,4,0,-4],
              fill: 2
            },
            {
              label: 'Zürich',
              data: [4,6,11,15,19,23,25,24,20,15,8,5],
              backgroundColor: this.gradient3,
              fill: 5
            },
            {
              label: 'Zürich Low',
              data: [-1,0,3,6,10,13,15,15,12,8,3,0],
              fill: 4
            }
          ]
        }
      },
      legendClickHandler(e, legendItem) {
        const index = legendItem.datasetIndex
        const nextIndex = index + 1
        const ci = this.$refs.chart.$data._chart
        const meta = ci.getDatasetMeta(index)
        const meta2 = ci.getDatasetMeta(index + 1)
        meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
        meta2.hidden = meta2.hidden === null ? !ci.data.datasets[index + 1].hidden : null;
        ci.update();
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
  width: 600px;
  background: linear-gradient(rgb(243, 232, 212), rgb(223, 236, 248));
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 2px 30px rgba(25, 25, 25, 0.15);
  margin:  25px 0;
}
</style>