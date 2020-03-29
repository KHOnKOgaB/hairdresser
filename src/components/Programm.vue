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
        <a :href="item.link"><img class="prog-img mx-auto" :src="item.photo" /></a>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols='12' lg='4'>
        <a class="btn btn-primary text-white my-3 px-4 py-2 font-weight-bold"
        href="#registation"
        role="button"
        v-smooth-scroll>
          Зарегистрироваться на марафон
        </a>
      </b-col>
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
          link: 'https://www.instagram.com/aleksmii/',
        },
        {
          delay: '100',
          photo: require('../assets/img/prog2.png'),
          link: 'https://www.instagram.com/larisagimalieva/',
        },
        {
          delay: '150',
          photo: require('../assets/img/prog3.png'),
          link: 'https://www.instagram.com/olga.kardi.hair/',
        },
        {
          delay: '200',
          photo: require('../assets/img/prog4.png'),
          link: 'https://www.instagram.com/dina.coach/',
        },
        {
          delay: '250',
          photo: require('../assets/img/prog5.jpg'),
          link: 'https://www.instagram.com/akciomasystem/',
        },
        {
          delay: '300',
          photo: require('../assets/img/prog6.png'),
          link: 'https://www.instagram.com/sointera_biz/',
        },
        {
          delay: '350',
          photo: require('../assets/img/prog7.png'),
          link: 'https://www.instagram.com/gosha_dzhagaev_school/',
        },
        {
          delay: '400',
          photo: require('../assets/img/prog8.png'),
          link: 'https://www.instagram.com/_litvinova_julia/',
        },
        {
          delay: '450',
          photo: require('../assets/img/prog9.png'),
          link: 'https://www.instagram.com/arisha.gennadevna/',
        },
        {
          delay: '500',
          photo: require('../assets/img/prog10.jpg'),
          link: 'https://www.instagram.com/teperikova_hair_studio/',
        },
        {
          delay: '550',
          photo: require('../assets/img/prog11.png'),
          link: 'https://www.instagram.com/annapines_hairexpert/',
        },
        {
          delay: '600',
          photo: require('../assets/img/prog12.jpg'),
          link: 'https://www.instagram.com/veronikakravchenko/',
        },
        {
          delay: '650',
          photo: require('../assets/img/prog13.jpg'),
          link: 'https://www.instagram.com/timurbegichevstudio/',
        },
        {
          delay: '700',
          photo: require('../assets/img/prog14.jpg'),
          link: 'https://www.instagram.com/sergeyshapochka/',
        },
        {
          delay: '750',
          photo: require('../assets/img/prog15.jpg'),
          link: 'https://www.instagram.com/stevlana_kuleshova_rb/',
        },
        {
          delay: '800',
          photo: require('../assets/img/prog16.jpg'),
          link: 'https://www.instagram.com/vitaly.antoshenko/',
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
