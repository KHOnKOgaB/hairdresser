<template>
<div class="container-fluid px-0 registration" id="registation">
  <div class="pink d-flex flex-column align-items-center text-center py-5">
    <h2 class="font-weight-bolder text-center">Регистрация на марафон</h2>
    <div class="row align-items-center justify-content-around">
      <form class="register py-5" action="index.html" method="post">
        <div class="row mb-5">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Введите ваше имя">
          </div>
          <div class="col-6">
            <input type="email" class="form-control" placeholder="Введите ваш email">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Введите ваш телефон">
          </div>
          <div class="col-6">
            <input type="email" class="form-control" placeholder="Ваш ник в Insragram*">
            <p class="text-left"><span class="font-weight-bold">*ВНИМАНИЕ!</span>
              Необходимо использовать сой ник в Instagram,
              с которго вы подписались на аккаунт марафона, спикеров и спонсоров. Ваш аккаунт должен
          быть открытым и активным. Писать ник нужно без @, без ссылки,
          только маленькими буквами</p>
          </div>
        </div>
      </form>
    </div>
    <h2 class="font-weight-bolder text-center text-white mt-5">Стоимость участия 199₽</h2>
    <div class="my-3 text-white">
      <font-awesome-icon class="hand-down" icon="hand-point-down" />
      <font-awesome-icon class="hand-down ml-4" icon="hand-point-down" />
      <font-awesome-icon class="hand-down ml-4" icon="hand-point-down" />
    </div>
    <button type="button" class="btn btn-primary text-white">Зарегистрируйся на марафон</button>
    <a class="mt-auto" href="#">
      <img class="footer-logo" src="../assets/img/logo.png" />
    </a>
  </div>
</div>
</template>

<script>
</script>


<style scoped lang="scss">
@import '../assets/scss/main.scss';
.registration {
    background: url("../assets/img/banner-bottom.jpg") no-repeat 0 0;
    min-height: 100vh;
    background-size: cover;
}
.pink {
    min-height: 100vh;
    background: rgba(238, 159, 159, 0.5);
}
.register {
  width: 800px;
}
.footer-logo {
  width: 200px;
}
.hand-down {
  font-size: 2rem;
}
</style>
