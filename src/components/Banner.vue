<template>
  <div class="banner d-flex flex-column">
    <Header></Header>
    <b-container fluid>
      <div class="row my-auto text-center">
        <div class="col-8 mx-auto banner-headers">
          <h1 class="text-white">Самый масштабный</h1>
          <h1 class="text-uppercase
          text-white mt-5 font-weight-bolder">марафон парикмахеров <br /> онлайн</h1>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header,
  },
};
</script>


<style scoped lang="scss">
@import '../assets/scss/main.scss';
.banner {
  background: url('../assets/img/banner-up.jpg') no-repeat 0 0;
  min-height: 100vh;
  background-size: cover;
}
.banner-headers {
  background: rgba(238, 159, 159, 0.4);
  margin-top: 5rem;
  padding: 10rem 2rem;
}
</style>
