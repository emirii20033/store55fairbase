<template>
  <div class="login-page-container">
    <div class="forms-wrapper">
      <LoginForm />

      <div class="register-prompt">
        <h3 class="prompt-title">Henüz Üye Değil Misiniz?</h3>
        <p class="prompt-subtitle">Kolayca üye olabilirsiniz!</p>

        <router-link to="/register" style="text-decoration: none">
          <BaseButton variant="secondary"> Hemen Üye Ol </BaseButton>
        </router-link>
        <div class="social-login">
          <BaseButton variant="outline" class="social-button">
            <img :src="facebookIcon" alt="Facebook" class="social-icon" />
            <span>Facebook ile Bağlan</span>
          </BaseButton>

          <BaseButton variant="outline" class="social-button">
            <img :src="googleIcon" alt="Google" class="social-icon" />
            <span>Google ile Bağlan</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '../components/molecules/LoginForm.vue'
import BaseButton from '../components/atoms/BaseButton.vue'

// YENİ ADIM: İkonları import ediyoruz
// (Eğer .svg olarak kaydettiysen uzantıyı .svg yap)
import facebookIcon from '../assets/face.png'
import googleIcon from '../assets/google.png'
</script>

<style scoped>
.login-page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  background-color: #f7f7f7;
}

.forms-wrapper {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.register-prompt {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.prompt-title {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #333;
}

.prompt-subtitle {
  font-size: 14px;
  text-align: center;
  color: #777;
  margin: 0;
  margin-bottom: 5px;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
}

/* YENİ CSS STİLLERİ */
.social-button {
  /* BaseButton'ın içindeki slot'u (resim + yazı)
    yan yana hizalamak için flex kullanıyoruz.
  */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* İkonla yazı arası boşluk */

  /* Bu butonlar PDF'te büyük harf değil,
    o yüzden BaseButton'daki 'uppercase'i eziyoruz.
  */
  text-transform: none;
  font-weight: 500; /* Biraz daha ince yazı */
}

.social-icon {
  width: 18px; /* İkon boyutu */
  height: 18px;
}
</style>
