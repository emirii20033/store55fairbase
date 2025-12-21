<template>
  <div class="home-container">
    <AppBanner />

    <div class="banner-section">
      <img :src="bannerImage" alt="Yol Gösteren Bir Çift Göz Banner" />
    </div>

    <CategoryList />

    <ProductSlider />

    <TickerText />
  </div>
</template>

<script setup>
// Importların sırası önemli değil, hepsi burada olmalı
import CategoryList from '../components/organisms/CategoryList.vue'
import bannerImage from '../assets/banner.png'
import ProductSlider from '../components/organisms/ProductSlider.vue'
import TickerText from '../components/atoms/TickerText.vue'
import AppBanner from '../components/organisms/AppBanner.vue'
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
}

.banner-section {
  width: 100%;
  line-height: 0;
}

.banner-section img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
