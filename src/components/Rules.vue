<template>
<div class="container-fluid rules py-5 text-center">
  <h2 class="font-weight-bolder text-center">Правила участия</h2>
    <div class="row align-items-center justify-content-center">
      <div class="col-4 rules-number">
        <div class="round-number"><span class="number">1</span></div>
        <h4 class="mt-2 font-weight-bold">Подпишитесь</h4>
        <p>на аккаунт марафона в Instagram</p>
      </div>
      <div class="col-4 rules-number">
        <div class="round-number"><span class="number">2</span></div>
        <h4 class="mt-2 font-weight-bold">Подпишитесь</h4>
        <p>на <span class="font-weight-bold">всех</span>
          спикеров и спонсоров в подписках аккаунта марафона</p>
      </div>
    </div>
  <div class="row align-items-center justify-content-center">
    <div class="col-4 rules-number">
      <div class="round-number"><span class="number">3</span></div>
      <h4 class="mt-2 font-weight-bold">Зарегистрируйтесь на сайте</h4>
      <p>используя свой ник в Instagram</p>
    </div>
    <div class="col-4 rules-number">
      <div class="round-number"><span class="number">4</span></div>
      <h4 class="mt-2 font-weight-bold">Оплатите участие</h4>
      <p>Денежками онлайн</p>
    </div>
  </div>
</div>
</template>

<script>
</script>


<style scoped lang="scss">
@import '../assets/scss/main.scss';
.rules {
    background-color: rgba(238, 159, 159, 0.25);;
}
.rules-number {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
}
.number {
    font-size: 4rem;
    color: $black;
    font-weight: bolder;
}
</style>
