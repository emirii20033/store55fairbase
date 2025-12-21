<template>
  <router-link :to="`/product/${productId}`" class="product-card">
    <div class="card-image-wrapper">
      <img :src="imageUrl" :alt="title" class="card-image" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-price">{{ price }}</p>
    </div>
  </router-link>
</template>

<script setup>
// DEĞİŞİKLİK BURADA:
// Artık 'productId' adında yeni bir prop alıyoruz.
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
  price: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.product-card {
  width: 220px;
  text-decoration: none; /* Link alt çizgisini kaldır */
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  flex-shrink: 0;
}

.product-card:hover {
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
  font-size: 14px;
  font-weight: 500;
  color: #333;
  min-height: 40px;
}

.card-price {
  margin: 10px 0 0 0;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
}
</style>
