<template>
  <div class="auth-page">
    <div class="auth-container">
      <h1 class="auth-title">ÜYE OL</h1>
      
      <div v-if="errorMsg" class="error-box">
        {{ errorMsg }}
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label>Adınız Soyadınız</label>
          <input v-model="fullName" type="text" placeholder="Ad Soyad" required />
        </div>

        <div class="form-group">
          <label>E-Posta Adresi</label>
          <input v-model="email" type="email" placeholder="E-posta" required />
        </div>
        
        <div class="form-group">
          <label>Şifre</label>
          <input v-model="password" type="password" placeholder="Şifre (En az 6 karakter)" required minlength="6"/>
        </div>

        <div class="form-group checkbox-group">
          <input type="checkbox" id="kvkk" required />
          <label for="kvkk">Üyelik sözleşmesini ve KVKK metnini okudum, onaylıyorum.</label>
        </div>

        <button type="submit" class="submit-btn" :disabled="userStore.loading">
          {{ userStore.loading ? 'KAYIT YAPILIYOR...' : 'KAYIT OL' }}
        </button>
      </form>

      <div class="login-redirect">
        Zaten üye misiniz? <NuxtLink to="/login">Giriş Yap</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

// Form Verileri
const fullName = ref('')
const email = ref('')
const password = ref('')
const errorMsg = ref('')

const handleRegister = async () => {
  errorMsg.value = '' // Hatayı temizle
  
  try {
    // Store'daki kayıt fonksiyonunu çalıştır
    await userStore.register(email.value, password.value, fullName.value)
    
    alert('Kayıt Başarılı! Aramıza hoşgeldin.')
    navigateTo('/') // Anasayfaya yönlendir
  } catch (e) {
    // Firebase'den gelen hatayı Türkçeleştir (Basitçe)
    if(e.code === 'auth/email-already-in-use') {
      errorMsg.value = 'Bu e-posta adresi zaten kullanılıyor.'
    } else {
      errorMsg.value = 'Hata oluştu: ' + e.message
    }
  }
}
</script>

<style scoped>
/* Önceki tasarımla aynı, sadece hata kutusu eklendi */
.auth-page { padding: 60px 0; background-color: #f9f9f9; display: flex; justify-content: center; }
.auth-container { background: white; padding: 40px; width: 100%; max-width: 450px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); text-align: center; }
.auth-title { font-size: 24px; font-weight: bold; color: #d30000; margin-bottom: 30px; }
.error-box { background-color: #ffe6e6; color: #d30000; padding: 10px; margin-bottom: 20px; border-radius: 4px; font-size: 13px; font-weight: bold; }
.form-group { text-align: left; margin-bottom: 20px; }
.form-group label { display: block; font-size: 13px; font-weight: bold; margin-bottom: 5px; color: #333; }
.form-group input[type="text"], .form-group input[type="email"], .form-group input[type="password"] { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
.checkbox-group { display: flex; align-items: flex-start; gap: 10px; }
.checkbox-group input { width: auto; margin-top: 3px; }
.checkbox-group label { font-weight: normal; font-size: 11px; line-height: 1.4; }
.submit-btn { width: 100%; padding: 15px; background: #d30000; color: white; border: none; font-weight: bold; cursor: pointer; margin-top: 10px; }
.submit-btn:hover { background: #b00000; }
.submit-btn:disabled { background: #faa; cursor: not-allowed; }
.login-redirect { margin-top: 20px; font-size: 13px; }
.login-redirect a { color: #d30000; font-weight: bold; text-decoration: none; }
</style>