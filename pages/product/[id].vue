<template>
  <div class="product-page">
    
    <div v-if="loading" class="loading-state"><div class="spinner"></div></div>

    <div v-else-if="product" class="container product-container">
      
      <div class="image-gallery">
        
        <div v-if="isCubuklu" class="grid-gallery">
          <div class="grid-item"><img src="/cubuklu1.png" alt="Ön" /></div>
          <div class="grid-item"><img src="/cubuklu2.png" alt="Yan" /></div>
          <div class="grid-item"><img src="/cubuklu3.png" alt="Arka" /></div>
          <div class="grid-item"><img src="/cubuklu4.png" alt="Detay" /></div>
        </div>

        <div v-else class="single-image">
          <img :src="product.image" :alt="product.name" />
        </div>

      </div>

      <div class="product-details">
        <div class="header-info">
           <h1 class="product-title">{{ product.name }}</h1>
           <p class="product-price">{{ product.price }} TL</p>
        </div>

        <div class="size-section">
          <div class="size-header">
            <span>Beden: <strong>{{ selectedSize }}</strong></span>
            <span class="size-guide">Beden Tablosu</span>
          </div>
          <div class="sizes">
            <button 
              v-for="size in ['XS', 'S', 'M', 'L', 'XL', '2XL']" 
              :key="size" 
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <button @click="handleAddToCart" class="add-btn">
          SEPETE EKLE
        </button>

        <div class="features">
           <div class="feature-item">🚚 Aynı Gün Kargo</div>
           <div class="feature-item">🛡️ %100 Orijinal Ürün</div>
           <div class="feature-item">🔄 İade Garantisi</div>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <p>Ürün bulunamadı.</p>
      <NuxtLink to="/" class="back-link">Anasayfaya Dön</NuxtLink>
    </div>

    <div class="related-products">
      <h3 class="related-title">BU ÜRÜNÜ ALANLAR BUNLARI DA İNCELEDİ</h3>
      
      <div class="marquee-container">
        <div class="marquee-content">
          <NuxtLink 
            v-for="item in sliderProducts" 
            :key="'a-' + item.id" 
            :to="`/product/${item.id}`" 
            class="mini-card"
          >
            <img :src="item.image" :alt="item.name" />
            <div class="mini-info">
              <h4>{{ item.name }}</h4>
              <span>{{ item.price }} TL</span>
            </div>
          </NuxtLink>
          
          <NuxtLink 
            v-for="item in sliderProducts" 
            :key="'b-' + item.id" 
            :to="`/product/${item.id}`" 
            class="mini-card"
          >
            <img :src="item.image" :alt="item.name" />
            <div class="mini-info">
              <h4>{{ item.name }}</h4>
              <span>{{ item.price }} TL</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { useProductStore } from '~/stores/productStore'
import { useCartStore } from '~/stores/cartStore'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

const loading = ref(true)
const selectedSize = ref('L')
const productId = route.params.id

// Mevcut Ürünü Bul
const product = computed(() => {
  return productStore.products.find(p => p.id === productId)
})

// Ürün Çubuklu mu? (İsminin içinde 'cubuklu' veya 'çubuklu' geçiyor mu?)
const isCubuklu = computed(() => {
  if (!product.value) return false
  const name = product.value.name.toLowerCase()
  return name.includes('çubuklu') || name.includes('cubuklu')
})

// Slider İçin Ürün Listesi (Mevcut ürün hariç diğerleri)
const sliderProducts = computed(() => {
  return productStore.products.filter(p => p.id !== productId)
})

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts()
  }
  loading.value = false
  window.scrollTo(0, 0) // Sayfa açılınca en üste git
})

const handleAddToCart = () => {
  if (!product.value) return
  cartStore.addToCart({ ...product.value, size: selectedSize.value })
  alert('Sepete Eklendi!')
}
</script>

<style scoped>
.product-page { font-family: 'Arial', sans-serif; padding-top: 20px; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* LAYOUT: SOL ve SAĞ */
.product-container { display: flex; gap: 50px; margin-bottom: 80px; }

/* SOL TARAF: RESİMLER */
.image-gallery { flex: 1.5; }

/* 4'lü Grid (Çubuklu İçin) */
.grid-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.grid-item img { width: 100%; height: auto; display: block; background: #f5f5f5; }

/* Tek Resim (Diğerleri İçin) */
.single-image img { width: 100%; height: auto; display: block; background: #f5f5f5; }

/* SAĞ TARAF: DETAYLAR */
.product-details { flex: 1; padding-top: 20px; }
.product-title { font-size: 26px; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; line-height: 1.2; }
.product-price { font-size: 24px; color: #d30000; font-weight: 800; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }

.size-header { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 13px; }
.size-guide { text-decoration: underline; cursor: pointer; color: #666; }
.sizes { display: flex; gap: 10px; margin-bottom: 30px; }
.sizes button { width: 50px; height: 40px; border: 1px solid #ddd; background: white; cursor: pointer; font-weight: bold; transition: 0.2s; }
.sizes button:hover, .sizes button.active { background: black; color: white; border-color: black; }

.add-btn { width: 100%; background: #d30000; color: white; border: none; padding: 18px; font-weight: 800; font-size: 16px; cursor: pointer; margin-bottom: 30px; transition: 0.3s; }
.add-btn:hover { background: #b00000; }

.features { background: #f9f9f9; padding: 15px; border-radius: 5px; font-size: 13px; color: #555; display: flex; flex-direction: column; gap: 10px; }

/* ALT KISIM: KAYAN SLIDER (MARQUEE) */
.related-products { background: #f9f9f9; padding: 50px 0; overflow: hidden; }
.related-title { text-align: center; margin-bottom: 30px; font-size: 18px; font-weight: 800; color: #333; letter-spacing: 1px; }

.marquee-container { width: 100%; overflow: hidden; white-space: nowrap; }
.marquee-content { display: inline-flex; animation: scroll 30s linear infinite; } /* 30 saniyede bir tur atar */
.marquee-content:hover { animation-play-state: paused; } /* Üzerine gelince durur */

.mini-card { 
  display: inline-block; width: 200px; margin: 0 15px; text-decoration: none; color: inherit; background: white; border: 1px solid #eee; transition: 0.3s; 
}
.mini-card:hover { transform: translateY(-5px); border-color: #d30000; }
.mini-card img { width: 100%; height: 200px; object-fit: contain; padding: 10px; background: #fff; }
.mini-info { padding: 10px; text-align: center; border-top: 1px solid #eee; }
.mini-info h4 { font-size: 12px; margin: 0 0 5px 0; overflow: hidden; text-overflow: ellipsis; }
.mini-info span { color: #d30000; font-weight: bold; font-size: 14px; }

/* CSS ANİMASYONU (Sonsuz Kaydırma) */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* İçerik 2 kat olduğu için %50 kayınca başa döner */
}

@media (max-width: 768px) {
  .product-container { flex-direction: column; gap: 20px; }
  .grid-gallery { grid-template-columns: 1fr; } /* Mobilde alt alta olsun */
}
</style>