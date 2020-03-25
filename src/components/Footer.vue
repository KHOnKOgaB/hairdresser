<template>
  <b-container fluid class="bg-primary py-4 text-white">
    <b-container>
      <b-row class="flex-column flex-sm-row">
        <b-col lg='5' cols='12'>
            <ul>
              <li>ИП Камышников Алексей Юрьевич

              </li>
              <li>ИНН: 242303146684</li>
              <li>ОГРНИП: 314190217600015</li>
            </ul>
        </b-col>
        <b-col lg='4' cols='12'>
          <ul>
            <li>
              <a class="text-white" href="https://docs.google.com/document/d/1mLbzMre8E3YYZx7UkmzNVClf653uliJZY-fJfycs0Oo/edit">
              Политика конфиденциальности</a>
            </li>
            <li><a class="text-white" href="https://docs.google.com/document/d/1rcFjAyAyShkwaLfrxmPFIBZ55n70vkZCtuQN0uO_ryw/edit">
              Договора-аферты</a></li>
          </ul>
        </b-col>
        <b-col lg='2' cols='12' class="ml-0 ml-sm-auto text-white d-flex align-items-start">
            <b-link class="mr-2" href="https://www.instagram.com/hairmarafon_ru/">
              <font-awesome-icon class="instagram" :icon="['fab', 'instagram']" />
            </b-link>
            <b-link class="text-white" v-b-modal.modal-center>
              <b-icon class="instagram" icon="info-circle"></b-icon>
            </b-link>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-center" centered title="ИП Камышников А.Ю." hide-footer>
      <ul class="ip-info">
        <li><b>Р/С:</b> 40802810831000021122,</li>
        <li><b>Банк:</b> ЮЖНОЕ ГУ БАНКА РОССИИ,</li>
        <li><b>БИК:</b> 040349001</li>
        <li><b>К/С:</b> 30101810800000000627</li>
        <li><b>Р/С:</b> 40802810831000021122</li>
        <li><b>Банк:</b> КРАСНОЯРСКОЕ ОТДЕЛЕНИЕ N 8646 ПАО СБЕРБАНК</li>
        <li><b>БИК:</b> 040407627</li>
      </ul>
  </b-modal>
  </b-container>
</template>

<script>
</script>


<style scoped lang="scss">
@import '../assets/scss/main.scss';
li {
  list-style-type: none;
}
.instagram {
  color: $white !important;
  transition: ease 0.3s;
  font-size: 2rem;
  &:hover {
    color: $black !important;
  }
}
.info {
  border: solid 1px $white;
  border-radius: 100%;
  padding: 4px 10px;
  color: $white;
  transition: ease 0.3s;
  &:hover {
    border: solid 1px $black;
    color: $black;
  }
}
@include media-breakpoint-down(sm) {
.info {
  .ip-info {
    top: -19rem;
    right: -9.25rem;
  }
}
}
</style>
