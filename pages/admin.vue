<template>
  <div class="admin-container">
    <h1>Firebase Yönetim Paneli</h1>
    <p>Bu sayfa sadece veritabanını doldurmak içindir.</p>

    <div class="card">
      <h2>1. Ürünleri Yükle</h2>
      <p>JSON dosyasındaki tüm ürünleri Firebase 'products' tablosuna yazar.</p>
      <button @click="uploadProducts" :disabled="loading" class="btn red">
        {{ loading ? 'Yükleniyor...' : 'Tüm Ürünleri Firebase\'e Yükle' }}
      </button>
      <p v-if="message" class="msg">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '~/stores/productStore'
import productsData from '~/assets/products.json' // Senin eski JSON dosyan

const store = useProductStore()
const loading = ref(false)
const message = ref('')

const uploadProducts = async () => {
  if(!confirm('Tüm ürünler Firebase veritabanına eklenecek. Emin misin?')) return

  loading.value = true
  message.value = 'Yükleme başladı...'
  
  try {
    let count = 0
    for (const product of productsData) {
      // ID'yi siliyoruz, Firebase kendi ID'sini verecek
      const { id, ...dataToUpload } = product
      
      // Store'daki ekleme fonksiyonunu kullan
      await store.addProductToFirebase(dataToUpload)
      count++
    }
    message.value = `Başarılı! ${count} adet ürün Firebase'e yüklendi.`
  } catch (e) {
    message.value = 'Hata oluştu: ' + e.message
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.admin-container { padding: 50px; text-align: center; font-family: Arial; }
.card { border: 1px solid #ccc; padding: 30px; margin: 20px auto; max-width: 500px; border-radius: 10px; }
.btn { padding: 15px 30px; font-size: 16px; cursor: pointer; border: none; color: white; font-weight: bold; border-radius: 5px; }
.red { background-color: #d30000; }
.red:disabled { background-color: #faa; }
.msg { margin-top: 20px; font-weight: bold; color: green; }
</style>