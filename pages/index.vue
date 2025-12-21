<template>
  <div class="home-page">
    
    <div class="hero-wrapper">
      <NuxtLink to="/product/1">
        <img src="/banner.png" alt="Banner" class="responsive-img" />
      </NuxtLink>
    </div>

    <div class="promo-wrapper">
      <NuxtLink to="/product/2">
        <img src="/arafoto.png" alt="Promo" class="responsive-img" />
      </NuxtLink>
    </div>
    
    <div class="container section-wrapper">
      <div class="section-header">
        <h2 class="section-title text-left">FORMALAR</h2>
        <span class="scroll-hint">Sağa Kaydır &rarr;</span>
      </div>
      
      <div v-if="loading" class="loading-box"><div class="spinner"></div></div>

      <div v-else class="slider-container">
        <NuxtLink 
          v-for="product in jerseyProducts" 
          :key="product.id" 
          :to="`/product/${product.id}`" 
          class="slider-card"
        >
          <div class="img-box"><img :src="product.image" :alt="product.name" /></div>
          <div class="card-info">
            <h3 class="p-name">{{ product.name }}</h3>
            <div class="p-price">{{ product.price }} TL</div>
            <div class="p-action">İNCELE</div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="container section-wrapper">
      <h2 class="section-title text-center">YENİ GELENLER</h2>
      
      <div v-if="loading" class="loading-box"><div class="spinner"></div></div>

      <div v-else class="product-grid">
        <NuxtLink 
          v-for="product in newArrivals" 
          :key="product.id" 
          :to="`/product/${product.id}`" 
          class="product-card"
        >
          <span class="badge">YENİ</span>
          <div class="img-box"><img :src="product.image" :alt="product.name" /></div>
          <div class="card-info">
            <h3 class="p-name">{{ product.name }}</h3>
            <div class="p-price">{{ product.price }} TL</div>
            <div class="p-action">İNCELE</div>
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useProductStore } from '~/stores/productStore'

const productStore = useProductStore()
const loading = ref(true)

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts()
  }
  loading.value = false
})

// --- DATA FİLTRELERİ ---

// 1. Sadece Formalar (İsminde 'Forma' geçenler)
const jerseyProducts = computed(() => {
  return productStore.products.filter(p => 
    p.name.toLowerCase().includes('forma')
  )
})

// 2. Yeni Gelenler (İlk 8 ürün)
const newArrivals = computed(() => {
  return productStore.products.slice(0, 8)
})
</script>

<style scoped>
/* GENEL */
.home-page { font-family: 'Arial', sans-serif; background: #fff; }
.container { max-width: 1400px; margin: 0 auto; width: 95%; }

/* RESİMLER (Tam Oturan) */
.hero-wrapper, .promo-wrapper { width: 100%; margin-bottom: 30px; line-height: 0; }
.responsive-img { width: 100%; height: auto; display: block; }

/* BAŞLIKLAR */
.section-wrapper { margin-bottom: 60px; }
.section-title { font-size: 24px; font-weight: 800; color: #d30000; text-transform: uppercase; margin-bottom: 20px; }
.text-left { text-align: left; border-left: 5px solid #d30000; padding-left: 15px; color: #333; }
.text-center { text-align: center; margin-top: 40px; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.scroll-hint { font-size: 12px; color: #999; font-weight: bold; }

/* --- SLIDER STİLLERİ (FORMALAR İÇİN) --- */
.slider-container {
  display: flex;
  gap: 20px;
  overflow-x: auto; /* Yatay kaydırma */
  padding-bottom: 20px; /* Kaydırma çubuğu payı */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* Mobilde akıcı kaydırma */
}
/* Kaydırma çubuğunu gizle (Daha şık görünüm için) */
.slider-container::-webkit-scrollbar { display: none; } 
.slider-container { -ms-overflow-style: none; scrollbar-width: none; }

.slider-card {
  min-width: 280px; /* Her kartın sabit genişliği */
  border: 1px solid #eee;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  background: white;
  transition: 0.3s;
}
.slider-card:hover { border-color: #d30000; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

/* --- GRID STİLLERİ (YENİ GELENLER İÇİN) --- */
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 30px; }
.product-card { border: 1px solid #eee; text-decoration: none; color: inherit; transition: 0.3s; position: relative; background: white; }
.product-card:hover { border-color: #d30000; }

/* ORTAK KART İÇERİĞİ */
.img-box { height: 300px; display: flex; align-items: center; justify-content: center; padding: 10px; }
.img-box img { max-width: 100%; max-height: 100%; object-fit: contain; }
.card-info { padding: 15px; text-align: center; border-top: 1px solid #eee; }
.p-name { font-size: 14px; font-weight: bold; margin-bottom: 5px; height: 36px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.p-price { font-size: 18px; color: #d30000; font-weight: bold; }
.p-action { font-size: 12px; color: #666; margin-top: 10px; text-decoration: underline; }
.badge { position: absolute; top: 10px; right: 10px; background: #d30000; color: white; padding: 4px 10px; font-size: 10px; font-weight: bold; }

/* YÜKLENİYOR */
.loading-box { text-align: center; padding: 50px; }
.spinner { border: 4px solid #f3f3f3; border-top: 4px solid #d30000; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>