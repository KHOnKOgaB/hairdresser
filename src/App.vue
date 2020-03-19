<template>
  <div id="app">
    <Banner></Banner>
    <Features></Features>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Features from './components/Features.vue';

export default {
  name: 'App',
  components: {
    Banner,
    Features,
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800');

</style>
