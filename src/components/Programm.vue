<template>
  <div class="container py-5">
    <h2 class="font-weight-bolder text-center mb-5">Программа марафона</h2>
    <div class="row align-items-center justify-content-around mb-4">
      <div v-for="(item, index) in speakers"  :key="index"
       data-aos="fade-up"
      data-aos-duration="500"
      :data-aos-delay="item.delay"
      class="col-4 my-3">
        <img class="prog-img" :src="item.photo" />
      </div>
    </div>
  </div>
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
        {
          delay: '200',
          photo: require('../assets/img/prog1.png'),
        },
        {
          delay: '250',
          photo: require('../assets/img/prog2.png'),
        },
        {
          delay: '300',
          photo: require('../assets/img/prog3.png'),
        },
        {
          delay: '350',
          photo: require('../assets/img/prog1.png'),
        },
        {
          delay: '400',
          photo: require('../assets/img/prog2.png'),
        },
        {
          delay: '450',
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
</style>
