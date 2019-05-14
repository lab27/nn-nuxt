<template lang="pug">
  div
    section.jumbotron
      h1.title.has-text-centered I'm not young. But I know stuff. 
      
</template>

<script>
import Logo from '~/components/NNLogo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.jumbotron {
  padding: 10vw;

  h1 {
  font-size: 10vw;
  font-weight: 700;
  }
}
</style>
