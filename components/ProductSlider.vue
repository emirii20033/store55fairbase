<template>
  <div class="slider-wrapper">
    <div class="slider-track">
      
      <div v-for="item in products" :key="item.id" class="slider-item">
        <NuxtLink :to="`/product/${item.id}`" class="product-link">
          <div class="img-box">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="info">
            <div class="name">{{ item.name }}</div>
            <div class="price">{{ item.price }} TL</div>
          </div>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import productsData from '~/assets/products.json' // Ürün verisini çek
const products = productsData // Tüm ürünleri slider'a koyuyoruz
</script>

<style scoped>
.slider-wrapper {
  width: 100%;
  overflow: hidden; /* Dışarı taşanları gizle */
  padding: 20px 0;
}

.slider-track {
  display: flex; /* Yan yana diz */
  gap: 20px; /* Aralarında boşluk */
  overflow-x: auto; /* YATAY KAYDIRMAYI AÇAN SİHİRLİ KOD */
  padding-bottom: 20px; /* Scroll çubuğu içeri girmesin */
  scroll-behavior: smooth; /* Yumuşak kaydırma */
  
  /* Scrollbar'ı gizlemek istersen (Chrome/Safari): */
  -webkit-overflow-scrolling: touch; 
}

/* Scrollbar'ı ince yapalım ki kaba durmasın */
.slider-track::-webkit-scrollbar {
  height: 6px;
}
.slider-track::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
}

.slider-item {
  min-width: 250px; /* Her ürün en az bu kadar geniş olsun (SIKIŞMAYI ENGELLER) */
  max-width: 250px;
  background: white;
  border: 1px solid #eee;
  flex-shrink: 0; /* Küçülmesine izin verme */
}

.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.img-box {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.slider-item:hover .img-box img {
  transform: scale(1.05);
}

.info {
  padding: 15px;
  text-align: center;
}

.name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  height: 40px; /* İsimler 2 satır olsa bile hizalı dursun */
  overflow: hidden;
}

.price {
  color: #d30000;
  font-weight: bold;
  font-size: 16px;
}
</style>