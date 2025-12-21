<template>
  <div class="auth-page">
    <div class="auth-container">
      <h1 class="auth-title">ÜYE GİRİŞİ</h1>
      
      <div v-if="errorMsg" class="error-box">
        {{ errorMsg }}
      </div>
      
      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label>E-Posta Adresi</label>
          <input v-model="email" type="email" placeholder="E-posta adresinizi giriniz" required />
        </div>
        
        <div class="form-group">
          <label>Şifre</label>
          <input v-model="password" type="password" placeholder="Şifrenizi giriniz" required />
        </div>

        <button type="submit" class="submit-btn" :disabled="userStore.loading">
          {{ userStore.loading ? 'GİRİŞ YAPILIYOR...' : 'GİRİŞ YAP' }}
        </button>
        
        <div class="auth-links">
          <a href="#">Şifremi Unuttum</a>
        </div>
      </form>

      <div class="divider">
        <span>veya</span>
      </div>

      <NuxtLink to="/register" class="register-btn">ÜYE OL</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

const email = ref('')
const password = ref('')
const errorMsg = ref('')

const handleLogin = async () => {
  errorMsg.value = ''
  try {
    await userStore.login(email.value, password.value)
    // Başarılı olursa anasayfaya at
    navigateTo('/')
  } catch (e) {
    if(e.code === 'auth/invalid-credential') {
      errorMsg.value = 'E-posta veya şifre hatalı!'
    } else {
      errorMsg.value = 'Giriş yapılamadı: ' + e.message
    }
  }
}
</script>

<style scoped>
/* Login sayfası stilleri */
.auth-page { padding: 60px 0; background-color: #f9f9f9; display: flex; justify-content: center; }
.auth-container { background: white; padding: 40px; width: 100%; max-width: 450px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); text-align: center; }
.auth-title { font-size: 24px; font-weight: bold; color: #d30000; margin-bottom: 30px; }
.error-box { background-color: #ffe6e6; color: #d30000; padding: 10px; margin-bottom: 20px; border-radius: 4px; font-size: 13px; font-weight: bold; }
.form-group { text-align: left; margin-bottom: 20px; }
.form-group label { display: block; font-size: 13px; font-weight: bold; margin-bottom: 5px; color: #333; }
.form-group input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
.submit-btn { width: 100%; padding: 15px; background: #d30000; color: white; border: none; font-weight: bold; cursor: pointer; margin-top: 10px; }
.submit-btn:hover { background: #b00000; }
.submit-btn:disabled { background: #faa; cursor: not-allowed; }
.auth-links { margin-top: 15px; font-size: 13px; }
.auth-links a { color: #666; text-decoration: none; }
.divider { margin: 25px 0; position: relative; }
.divider span { background: white; padding: 0 10px; color: #999; font-size: 12px; position: relative; z-index: 1; }
.divider::before { content: ""; position: absolute; top: 50%; left: 0; right: 0; border-top: 1px solid #eee; }
.register-btn { display: block; width: 100%; padding: 12px; border: 2px solid #d30000; color: #d30000; text-decoration: none; font-weight: bold; box-sizing: border-box; }
.register-btn:hover { background: #d30000; color: white; }
</style>