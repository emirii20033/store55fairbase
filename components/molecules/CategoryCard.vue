<template>
  <router-link :to="`/product/${productId}`" class="category-card">
    <div class="card-image-wrapper">
      <img :src="imageUrl" :alt="title" class="card-image" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
    </div>
  </router-link>
</template>

<script setup>
// DEĞİŞİKLİK BURADA: 'productId' prop'unu ekledik
defineProps({
  productId: {
    type: [String, Number],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
/* Style bölümü aynı kalıyor */
.category-card {
  width: 280px;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f7f7f7;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 15px;
  text-align: center;
  border-top: 1px solid #eaeaea;
}

.card-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
}
</style>
