<template>
<div class="container-fluid rules py-5 text-center">
  <h2 class="font-weight-bolder text-center">Правила участия</h2>
  <div class="container">
    <div class="row align-items-center justify-content-center py-3">
      <div class="col-12 col-md-6 col-lg-3" v-for="(item, index) in rules" :key="index">
        <div class="rules-number">
          <div
          data-aos="zoom-in"
          :data-aos-delay="item.delay"
          class="round-number mb-3">
          <span class="number">{{item.number}}</span>
          </div>
          <h4 class="my-2 font-weight-bold mb-3">{{item.title}}</h4>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        {
          number: '1',
          title: 'Подпишитесь',
          text: 'на аккаунт марафона в Instagram',
          delay: '50',
        },
        {
          number: '2',
          title: 'Подпишитесь',
          text: 'на всех спикеров и спонсоров в подписках аккаунта марафона',
          delay: '100',
        },
        {
          number: '3',
          title: 'Зарегистрируйтесь на сайте',
          text: 'используя свой ник в Instagram',
          delay: '150',
        },
        {
          number: '4',
          title: 'Оплатите участие',
          text: 'Денежками онлайн',
          delay: '200',
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';
.rules {
    background-color: rgba(238, 159, 159, 0.25);
}
.rules-number {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-around;
    height: 300px;
    padding: 1rem;
}
.round-number {
    background-color: $white;
    border-radius: 50%;
    padding: 2rem;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-out 0.2s;
    color: $primary;
    cursor: pointer;
    &:hover {
        background-color: $success;
        color: $white;
    }
}
.number {
    font-size: 4rem;
    font-weight: bolder;
}
</style>
