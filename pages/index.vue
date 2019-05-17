<template lang="pug">
  div
    .background
    section.jumbotron
      h1.title.has-text-centered Do Web Better.
      h3.subtitle.has-text-centered I'm Nick Niles, a therapist for your web site.  
    section(v-for="feature in data")
      h3 {{feature.title}}
      
</template>

<script>
import Logo from '~/components/NNLogo.vue'
import data from '~/assets/data/features.yml'

export default {
  data () {
    return {
      data: data
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.jumbotron {
  padding: 10vw;
  padding-top: 12vw;

  h1 {
  font-size: 7vw;
  font-weight: 700;
  letter-spacing: -.2rem;
  }
}

.background {
  position: absolute;
  top: -20vh;
  left: -20vw;
  right: -20vw;
  height: 80vh;
  background-color: #F1F5F9;
  background-image: linear-gradient(-45deg,#D3E9FF 20%,#FFC4DE 100%);
  background-image: linear-gradient( 359.5deg,  rgba(17,255,189,1) 5.7%, rgba(151,253,225,1) 83.2% );
  background-image: radial-gradient( circle farthest-corner at 1.7% 7.9%,  rgba(248,251,142,1) 0%, rgba(250,254,171,1) 100.7% );
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,222,239,1) 0%, rgba(254,237,245,1) 48.5%, rgba(239,175,186,0.50) 100.2% );
  background : linear-gradient(73.55deg, rgba(245, 232, 210, 1) 0%, rgba(242, 233, 201, 1) 31.52%, rgba(234, 237, 175, 1) 83.77%, rgba(231, 238, 166, 1) 100%);

  transform: rotate(-7deg);
  z-index: -1;
}
</style>
