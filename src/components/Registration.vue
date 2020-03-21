<template>
<div class="px-0 registration" id="registation">
  <form
    class="pink d-flex flex-column align-items-center text-center py-5"
    method="POST"
    @submit.prevent="submitFrom"
    ref="form"
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXix3XzMPKy4dBE9z_4CvSmCQi4B6w8uT_ahxCnkCzpCWUFg/formResponse">
    <h2 class="font-weight-bolder text-center">Регистрация на марафон</h2>
    <div class="align-items-center justify-content-around">
      <b-container class="py-5">
        <b-row class="mb-5">
          <b-col md="6" class="mb-4">
            <b-form-input
              v-model="form.name"
              required
              type="text"
              name="entry.1880855526"
              class="form-control"
              placeholder="Введите ваше имя"/>
          </b-col>
          <b-col md="6" class="mb-4">
            <b-form-input
              v-model="form.email"
              required
              type="email"
              name="entry.1562501161"
              class="form-control"
              placeholder="Введите ваш email"/>
          </b-col>
          <b-col md="6" class="mb-4">
            <b-form-input
              v-model="form.phone"
              required
              type="text"
              class="form-control"
              name="entry.666901678"
              placeholder="Введите ваш телефон"/>
          </b-col>
          <b-col md="6" class="mb-4">
            <b-form-input
              v-model="form.instagram"
              required
              type="text"
              class="form-control"
              name="entry.572496809"
              placeholder="Ваш ник в Insragram*"/>
            <p class="text-left my-2">
              <span class="font-weight-bold">*ВНИМАНИЕ!</span> {{ note }}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <h2 class="font-weight-bolder text-center text-white">Стоимость участия 199₽</h2>
    <div class="my-3 text-white">
      <font-awesome-icon class="hand-down" icon="hand-point-down" />
      <font-awesome-icon class="hand-down ml-4" icon="hand-point-down" />
      <font-awesome-icon class="hand-down ml-4" icon="hand-point-down" />
    </div>
    <b-button
      variant="primary"
      type="submit"
      class="text-white mb-3">Зарегистрируйся на марафон</b-button>
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
  max-width: 100%;
  padding: 0 1rem;
}
.footer-logo {
  width: 200px;
}
.hand-down {
  font-size: 2rem;
}
</style>
