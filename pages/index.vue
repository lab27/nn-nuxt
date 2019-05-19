<template lang="pug">
  div.container
    .background(:style="{background: `linear-gradient(73.55deg, ${color1}, ${color2})`}")
    section.jumbotron
      h1(v-in-viewport) {{content.headline}}
    section.intro 
      .intro-card(v-in-viewport)
        img(src="img/nick_niles_beard.jpg")
        .intro-card__text
          h3 {{content.hello}}
          p {{content.intro}} 
    .parallax-child party people
    section(v-for="feature, index in features")
      .feature-card
        .feature-card__media
          .feature-card__media-content
        .feature-card__text
          h3.is-size-3.feature-card__title {{feature.title}}
          p.is-size-3.feature-card__copy {{feature.copy}}
    Footer
    Chart
      
</template>

<script>
import Footer from '~/components/Footer'
import Chart from '~/components/RandomChart'
import features from '~/assets/data/features.yml'
import content from '~/assets/data/content.yml'
import chroma from 'chroma-js'

export default {
  data () {
    return {
      features: features,
      content: content,
      color1: '#bfeaff',
      color2: '#d4ffd8',
      colorSpeed: 100
    }
  },
  components: {
    Footer,
    Chart
  },
  methods: {
    increaseL() {
      this.color1 = chroma(this.color1).set('lch.h', '+5')
      this.color2 = chroma(this.color2).set('lch.h', '+5')
    }
  },
  mounted() {
    setInterval(() => {
      this.increaseL()
    }, this.colorSpeed);
  }
}
</script>

<style lang="scss">
$rounded-corner: 6px;
$box-shadow: 0 5px 20px rgba(0,0,0,.15);
$swivel-starting-point: rotateX(5deg) translateZ(10rem) scale(.5);

// .container {
//   perspective: 1px;
//   perspective-origin: 0 0;
// }

// .parallax-child {
//   transform-origin: 0 0;
//   transform: translateZ(-2px) scale(3);
// }

section {
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  height: 80vh;
}

.intro-card {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: -2rem;
  opacity: .2;
  transform: $swivel-starting-point;
  transform-origin: center center center;

  &.in-viewport:not(.below-viewport) {
    animation: swivelIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }

  img {
    width: 100%;
    max-width: 20rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: $rounded-corner;
    box-shadow: $box-shadow;
    margin: 2rem;

  }

  &__text {
    margin: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8;
  }

  p {
    font-size: 1.5rem;
  }
}

.jumbotron {
  padding: 10vw;
  padding-top: 27vh;
  max-width: 80rem;

  h1 {
    text-align: center;
    font-size: 7vw;
    font-weight: 700;
    letter-spacing: -.2rem;
    margin-top: -3.5vw;
    height: 0;
    overflow: hidden;
    animation: blinkOn 2s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;
  }

  h2 {
    transform: translateZ(10rem) translateY(20rem);
  }

h4 {
    transform: translateZ(40rem) translateY(80rem);
  }
}

.background {
  position: absolute;
  top: -20vh;
  left: -20vw;
  right: -20vw;
  height: 80vh;
  z-index: -1;
  transform: translateY(-100%);
  will-change: transform;
  animation: skew 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;
}

@keyframes skew {
  0% {
    transform: translateY(-100%) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(-7deg);
  }
}

@keyframes swivelIn {
  0% {
    transform: $swivel-starting-point;
    opacity: .2;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes blinkOn {
  0% {
    height: 0;
  }

  100%{ 
    height: 200px;
  }
}

.feature-card {
  width: 100%;
  max-width: 50rem;

  &__title {
    font-weight: 800;
  }

  &__media {
    width: 100%;
    max-width: 25rem;
    height: 19rem;
    border-radius: .5rem;
    box-shadow: $box-shadow;
    margin-bottom: 2rem;
    overflow: hidden;
  }

  &__media-content {
    width: 100%;
    height: 100%;
    background-color: rgb(241, 241, 241);
  }
}
</style>
