<template>
<div class="container-fluid px-0 registration" id="registation">
  <form
    class="pink d-flex flex-column align-items-center text-center py-5"
    method="POST"
    @submit.prevent="submitFrom"
    ref="form"
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXix3XzMPKy4dBE9z_4CvSmCQi4B6w8uT_ahxCnkCzpCWUFg/formResponse">
    <h2 class="font-weight-bolder text-center">Регистрация на марафон</h2>
    <div class="row align-items-center justify-content-around">
      <div class="register py-5">
        <div class="row mb-5">
          <div class="col-6">
            <b-form-input
              v-model="form.name"
              required
              type="text"
              name="entry.1880855526"
              class="form-control"
              placeholder="Введите ваше имя"/>
          </div>
          <div class="col-6">
            <b-form-input
              v-model="form.email"
              required
              type="email"
              name="entry.1562501161"
              class="form-control"
              placeholder="Введите ваш email"/>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <b-form-input
              v-model="form.phone"
              required
              type="text"
              class="form-control"
              name="entry.666901678"
              placeholder="Введите ваш телефон"/>
          </div>
          <div class="col-6">
            <b-form-input
              v-model="form.instagram"
              required
              type="text"
              class="form-control"
              name="entry.572496809"
              placeholder="Ваш ник в Insragram*"/>
            <p class="text-left"><span class="font-weight-bold">*ВНИМАНИЕ!</span>{{ note }}</p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="font-weight-bolder text-center text-white mt-5">Стоимость участия 199₽</h2>
    <div class="my-4 text-white">
      <font-awesome-icon class="hand-down" icon="hand-point-down" />
      <font-awesome-icon class="hand-down ml-4" icon="hand-point-down" />
      <font-awesome-icon class="hand-down ml-4" icon="hand-point-down" />
    </div>
    <button type="submit" class="btn btn-primary text-white">Зарегистрируйся на марафон</button>
    <a class="mt-auto" href="#">
      <img class="footer-logo" src="../assets/img/logo.png" />
    </a>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        instagram: '',
      },
      note: ' Необходимо использовать сой ник в Instagram, с которго вы подписались на аккаунт марафона, спикеров и спонсоров. Ваш аккаунт должен быть открытым и активным. Писать ник нужно без @, без ссылки, только маленькими буквами',
    };
  },
  methods: {
    async submitFrom() {
      const data = new FormData(this.$refs.form);
      try {
        await axios.post('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXix3XzMPKy4dBE9z_4CvSmCQi4B6w8uT_ahxCnkCzpCWUFg/formResponse', data);
      } catch (e) {
        this.form = {
          name: '',
          email: '',
          phone: '',
          instagram: '',
        };
      }
      this.form = {
        name: '',
        email: '',
        phone: '',
        instagram: '',
      };
      this.$bvModal.msgBoxOk('Ваши данные сохранены', {
        centered: true,
      });
    },
  },
};
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
