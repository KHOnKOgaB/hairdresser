<template>
  <div class="banner d-flex flex-column">
    <Header></Header>
    <b-container fluid>
      <b-row class="row my-auto text-center">
        <b-col lg="8" class="mx-auto">
          <div class="banner-headers">
            <h1 class="text-white big-font font-weight-bold">Самый масштабный</h1>
            <h1 class="text-uppercase
            text-white
            mt-5
            font-weight-bolder
            biggest-font">марафон парикмахеров <br /> онлайн</h1>
          </div>
          <a
            variant="primary"
            class="btn btn-primary text-white mt-4 px-3 py-2 font-weight-bold"
            href="#features"
            v-smooth-scroll>
            Подробнее
          </a>
        </b-col>
      </b-row>
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
.big-font {
  font-size: 2.5rem;
}
.biggest-font {
  font-size: 3.5rem;
}
.banner {
  background: url('../assets/img/banner-up.jpg') no-repeat top center;
  min-height: 100vh;
  background-size: cover;
}
.banner-headers {
  background: rgba(238, 159, 159, 0.4);
  margin-top: 5rem;
  padding: 10rem 2rem;
}
@include media-breakpoint-down(sm) {
  .big-font {
    font-size: 1rem;
  }
  .biggest-font {
    font-size: 1.5rem;
  }
  .banner-headers {
    padding: 6rem 2rem;
  }
}
</style>
