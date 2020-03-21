<template>
  <div class="container py-5" id="features">
    <div class="features-header d-flex flex-column align-items-center justify-content-center">
      <h2 class="text-center font-weight-bold">Не упусти <br> потрясающую возможность </h2>
      <h3 class="text-center">побывать на мастер-классе у лучших!</h3>
      <a class="btn btn-primary text-white my-3"
      href="#registation"
      role="button"
      v-smooth-scroll>
        Зарегистрируйся на марафон
      </a>
    </div>
    <b-row class="justify-content-around">
      <b-col
        md="6"
        lg="4"
        data-aos="flip-up"
        :data-aos-delay='item.delay'
        class="col-12 my-3"
        v-for="(item, index) in features"  :key="index">
        <div class="feature-card px-3 py-3">
          <p class="title">{{item.title}}</p>
          <p class="name">{{item.name}}</p>
          <p class="info">{{item.info}}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: '30',
          name: 'горячих дней',
          info: 'каждый день новые знания, полезные кейсы и новые знакомства',
          delay: '100',
        },
        {
          title: '14',
          name: 'вдохновляющих спикеров',
          info: 'самые крутые профессионалы подялется секретами своего мастерства',
          delay: '100',
        },
        {
          title: '28',
          name: 'мотивирующих подарков',
          info: 'на сумму свыше 100 000 ₽',
          delay: '100',
        },
        {
          title: '14',
          name: 'важных секций',
          info: 'каждый мастер-класс значительно поднимет ваш уровень, чтобы вы начали зарабатывать в 10 раз больше, чем сейчас',
          delay: '100',
        },
        {
          title: '14',
          name: 'розыгрышей на бесплатное обучение',
          info: 'Общая стоимость мастер-классов от наших спикеров - более 1.000.000₽. Узнаем, кому улыбнется удача',
          delay: '100',
        },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
@import '../assets/scss/main.scss';
.feature-card {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  transition: ease-out 0.2s;
  &:hover {
    background-color: $secondary;
    color: $white;
  }
}
.title {
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
}
.name {
  font-weight: bold;
}
</style>
