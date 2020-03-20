<template>
  <div class="container py-5">
    <div class="features-header d-flex flex-column align-items-center justify-content-center">
      <h2 class="text-center font-weight-bold">Не упусти <br> потрясающую возможность </h2>
      <h3 class="text-center">побывать на мастер-классе у лучших!</h3>
      <a class="btn btn-primary text-white my-3" href="#registation" role="button">
        Зарегистрируйся на марафон
      </a>
    </div>
    <div class="row">
      <div data-aos="fade-up" class="col-4">
        <div class="feature-card px-3 py-3">
          <p class="title">30</p>
          <p class="name">горячих дней</p>
          <p class="info">каждый день новые знания, полезные кейсы и новые знакомства</p>
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-delay="100" class="col-4 ml-auto">
        <div class="feature-card px-3 py-3">
          <p class="title">14</p>
          <p class="name">вдохновляющих спикеров</p>
          <p class="info">самые крутые профессионалы подялется секретами своего мастерства</p>
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-delay="150" class="col-4 ml-auto">
        <div class="feature-card px-3 py-3">
          <p class="title">28</p>
          <p class="name">мотивирующих подарков</p>
          <p class="info">на сумму свыше 100 000 ₽</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-between mt-5 mb-5">
      <div data-aos="fade-up"
      data-aos-delay="100" class="col-4 ml-auto">
        <div class="feature-card px-3 py-3">
          <p class="title">14</p>
          <p class="name">важных секций</p>
          <p class="info">каждый мастер-класс значительно поднимет ваш уровень,
            чтобы вы начали зарабатывать в 10 раз больше, чем сейчас</p>
        </div>
      </div>
      <div data-aos="fade-up"
      data-aos-delay="150" class="col-4 mx-auto">
        <div class="feature-card px-3 py-3">
          <p class="title">14</p>
          <p class="name">розыгрышей на бесплатное обучение</p>
          <p class="info">Общая стоимость мастер-классов от наших спикеров - более 1.000.000₽.
            Узнаем, кому улыбнется удача</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
  justify-content: center;
  text-align: center;
  height: 100%;
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
