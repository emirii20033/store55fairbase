<template>
  <form class="login-form" @submit.prevent="handleLogin">
    <h2 class="form-title">Hoş Geldiniz</h2>
    <p class="form-subtitle">Hızlı ve güvenli alışverişe giriş yapın.</p>

    <BaseInput
      v-model="email"
      label="E-posta Adresiniz"
      id="email"
      type="email"
      placeholder="ornek@mail.com"
    />

    <BaseInput
      v-model="password"
      label="Parolanız"
      id="password"
      type="password"
      placeholder="••••••••"
    />

    <div class="form-options">
      <a href="#" class="forgot-password">Şifremi Unuttum</a>
    </div>

    <BaseButton type="submit" variant="primary"> Giriş Yap </BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'

// Atomlarımızı import ediyoruz
import BaseInput from '../atoms/BaseInput.vue'
import BaseButton from '../atoms/BaseButton.vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Giriş denemesi:', email.value, password.value)
  if (!email.value || !password.value) {
    alert('Lütfen tüm alanları doldurun.')
    return
  }
  alert(`Giriş yapılıyor: ${email.value}`)
}
</script>

<style scoped>
.login-form {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.form-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}

.form-subtitle {
  font-size: 14px;
  text-align: center;
  color: #777;
  margin-bottom: 25px;
}

.form-options {
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
  margin-bottom: 20px;
}

.forgot-password {
  font-size: 13px;
  color: #555;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
  color: #e60000;
}
</style>
