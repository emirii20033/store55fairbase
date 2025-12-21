<template>
  <div class="contact-page container">
    
    <div class="contact-layout">
      
      <div class="info-side">
        <h1 class="page-title">BİZE ULAŞIN</h1>
        <p class="desc">Soru, görüş ve önerileriniz için aşağıdaki formdan veya iletişim kanallarımızdan bize ulaşabilirsiniz.</p>
        
        <div class="info-item">
          <span class="icon">📍</span>
          <div>
            <h3>ADRES</h3>
            <p>Nuri Asan Tesisleri, Canik / SAMSUN</p>
          </div>
        </div>

        <div class="info-item">
          <span class="icon">📞</span>
          <div>
            <h3>TELEFON</h3>
            <p>444 19 65</p>
          </div>
        </div>

        <div class="info-item">
          <span class="icon">✉️</span>
          <div>
            <h3>E-POSTA</h3>
            <p>info@store55.com.tr</p>
          </div>
        </div>
      </div>

      <div class="form-side">
        <form @submit.prevent="handleSubmit">
          
          <div class="form-group">
            <label>Adınız Soyadınız</label>
            <input v-model="form.name" type="text" placeholder="Adınız Soyadınız" required />
          </div>

          <div class="form-group">
            <label>E-Posta Adresiniz</label>
            <input v-model="form.email" type="email" placeholder="ornek@email.com" required />
          </div>

          <div class="form-group">
            <label>Konu</label>
            <select v-model="form.subject">
              <option>Sipariş Durumu</option>
              <option>İade / Değişim</option>
              <option>Ürün Bilgisi</option>
              <option>Diğer</option>
            </select>
          </div>

          <div class="form-group">
            <label>Mesajınız</label>
            <textarea v-model="form.message" rows="5" placeholder="Mesajınızı buraya yazınız..." required></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="contactStore.loading">
            {{ contactStore.loading ? 'GÖNDERİLİYOR...' : 'GÖNDER' }}
          </button>

        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useContactStore } from '~/stores/contactStore'

const contactStore = useContactStore()

const form = ref({
  name: '',
  email: '',
  subject: 'Sipariş Durumu',
  message: ''
})

const handleSubmit = async () => {
  const success = await contactStore.sendMessage(form.value)
  if (success) {
    // Formu temizle
    form.value = { name: '', email: '', subject: 'Sipariş Durumu', message: '' }
  }
}
</script>

<style scoped>
.contact-page { padding: 50px 20px; font-family: 'Arial', sans-serif; min-height: 70vh; }
.container { max-width: 1100px; margin: 0 auto; }

.contact-layout { display: flex; gap: 50px; background: white; border: 1px solid #eee; padding: 40px; border-radius: 5px; }

/* SOL TARAF */
.info-side { flex: 1; border-right: 1px solid #eee; padding-right: 40px; }
.page-title { color: #d30000; font-size: 28px; font-weight: 800; margin-bottom: 20px; letter-spacing: 1px; }
.desc { color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 40px; }

.info-item { display: flex; gap: 15px; margin-bottom: 30px; }
.icon { font-size: 24px; }
.info-item h3 { margin: 0 0 5px 0; font-size: 14px; font-weight: bold; color: #333; }
.info-item p { margin: 0; color: #666; font-size: 14px; }

/* SAĞ TARAF (FORM) */
.form-side { flex: 1.5; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 13px; font-weight: bold; color: #333; margin-bottom: 8px; }
.form-group input, .form-group select, .form-group textarea {
  width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; outline: none; transition: 0.3s;
}
.form-group input:focus, .form-group textarea:focus { border-color: #d30000; }

.submit-btn {
  background: #d30000; color: white; border: none; padding: 15px 40px; font-weight: bold; cursor: pointer; border-radius: 4px; font-size: 14px; transition: 0.3s;
}
.submit-btn:hover { background: #b00000; }
.submit-btn:disabled { background: #faa; cursor: not-allowed; }

@media (max-width: 768px) {
  .contact-layout { flex-direction: column; padding: 20px; }
  .info-side { border-right: none; padding-right: 0; border-bottom: 1px solid #eee; padding-bottom: 30px; margin-bottom: 30px; }
}
</style>