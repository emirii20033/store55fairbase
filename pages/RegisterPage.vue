<template>
  <div class="register-page">
    <div class="register-container">
      <h2 class="page-title">Yeni Üyelik</h2>
      <p class="page-subtitle">Bilgilerinizi girerek hızlıca üye olun.</p>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-row">
          <BaseInput v-model="form.name" label="Adınız" id="name" placeholder="Adınız" />
          <BaseInput
            v-model="form.surname"
            label="Soyadınız"
            id="surname"
            placeholder="Soyadınız"
          />
        </div>

        <BaseInput
          v-model="form.email"
          label="E-posta Adresiniz"
          id="reg-email"
          type="email"
          placeholder="ornek@mail.com"
        />

        <BaseInput
          v-model="form.password"
          label="Parolanız"
          id="reg-password"
          type="password"
          placeholder="••••••••"
        />

        <BaseInput
          v-model="form.passwordConfirm"
          label="Parola Tekrar"
          id="reg-password-confirm"
          type="password"
          placeholder="••••••••"
        />

        <div class="agreement-row">
          <input type="checkbox" id="agreement" v-model="form.agreement" />
          <label for="agreement">
            <a href="#">Üyelik Sözleşmesini</a> okudum ve onaylıyorum.
          </label>
        </div>

        <BaseButton type="submit" variant="secondary"> ÜYE OL </BaseButton>
      </form>

      <div class="login-redirect">
        Zaten üye misiniz? <router-link to="/login">Giriş Yap</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '../components/atoms/BaseInput.vue'
import BaseButton from '../components/atoms/BaseButton.vue'

const form = ref({
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  agreement: false,
})

const handleRegister = () => {
  if (!form.value.agreement) {
    alert('Lütfen üyelik sözleşmesini onaylayın.')
    return
  }
  if (form.value.password !== form.value.passwordConfirm) {
    alert('Şifreler eşleşmiyor!')
    return
  }
  // Backend olmadığı için sadece başarılı mesajı veriyoruz
  alert(`Hoş geldiniz ${form.value.name}! Kaydınız başarıyla oluşturuldu.`)
}
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f7f7f7;
  min-height: 600px;
}

.register-container {
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 0;
  color: #333;
}

.page-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.agreement-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 14px;
}

.agreement-row a {
  color: #e60000;
  text-decoration: none;
  font-weight: 600;
}

.login-redirect {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}

.login-redirect a {
  color: #e60000;
  font-weight: 600;
  text-decoration: none;
}
</style>
