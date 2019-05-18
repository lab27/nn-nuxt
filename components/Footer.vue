<template lang="pug">
    footer.footer
      //- h3 me footskis
      .canvas 
          canvas#paperCanvas(ref="paperCanvas" resize)
</template>


<script>
import paper from 'paper'
export default {
  data() {
    return {
      points: [-12, 50],
      myCircle: null
    }
  },
  methods: {
    drawBall(point1, point2, radius) {
      myBall
    },
    moveBall(paper) {
      this.myCircle.position.x += .1
    },
    createBall(paper) {
      console.log('moving ball!')
      let point1 = Math.random(100) * 100
      let point2 = Math.random(100) * 100
      let radius = Math.random(200) * 100
      this.myCircle = new Path.Circle(new Point(point1, point2), radius)
      this.myCircle.fillColor = 'dodgerblue'
      console.log('my circle', this.myCircle, point1, point2, radius);
    }
  },
  mounted() {
    paper.install(window)
    paper.setup(this.$refs.paperCanvas)  
var squarePath = new Path.Rectangle(new Point(20, 20), new Size(20, 20));
squarePath.fillColor = 'aquamarine';
var squareSymbol = new Symbol(squarePath);

// lets place some squares using symbols, and rotate each instance slightly
for (var i = 0; i < 5; i++) {
  var placedSymbol = squareSymbol.place(new Point(20 + (i * 40), 50));
  placedSymbol.rotate(i * 10); // operation on the instance
}

function onFrame(event) {
 // Add 1 degree to the hue
 // of the symbol definition's fillColor:
 squareSymbol.definition.fillColor.hue += 1;
 // rotate
 squareSymbol.definition.rotate(0.2);
}  
  }
}
</script>

<style>
.footer {
  padding: 0;
}
#paperCanvas {
  width: 100%;
  height: 100%;
}
</style>
