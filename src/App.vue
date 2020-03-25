<template>
  <div id="app">
    <Banner></Banner>
    <Features></Features>
    <Teach></Teach>
    <Programm></Programm>
    <Rules></Rules>
    <Registration></Registration>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Features from './components/Features.vue';
import Teach from './components/Teach.vue';
import Programm from './components/Programm.vue';
import Rules from './components/Rules.vue';
import Registration from './components/Registration.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Banner,
    Features,
    Teach,
    Programm,
    Rules,
    Registration,
    Footer,
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800');
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
