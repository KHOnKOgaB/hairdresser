<template>
  <b-container class="container py-5">
    <h2 class="font-weight-bolder text-center mb-5">Программа марафона</h2>
    <b-row class="row align-items-center justify-content-around mb-4">
      <b-col
        v-for="(item, index) in speakers"
        :key="index"
        data-aos="fade-up"
        data-aos-duration="500"
        :data-aos-delay="index * 50"
        md="6"
        lg="4"
        class="my-3 text-center">
        <img class="prog-img mx-auto" :src="item.photo" />
      </b-col>
      <a class="btn btn-primary text-white my-3 px-4 py-2 font-weight-bold"
      href="#registation"
      role="button"
      v-smooth-scroll>
        Зарегистрироваться на марафон
      </a>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        {
          delay: '50',
          photo: require('../assets/img/prog1.png'),
        },
        {
          delay: '100',
          photo: require('../assets/img/prog2.png'),
        },
        {
          delay: '150',
          photo: require('../assets/img/prog3.png'),
        },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
@import '../assets/scss/main.scss';
.prog-img {
  width: 100%;
}
@include media-breakpoint-down(md) {
  .prog-img {
    max-width: 270px;
  }
}
</style>
