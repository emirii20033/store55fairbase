<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/userStore'
import { useCartStore } from '~/stores/cartStore'

// Store tanımları aynen kalıyor
const userStore = useUserStore()
const cartStore = useCartStore()

// Sayfa açılışında çalışacak kritik kodlarımızı koruduk
onMounted(() => {
  userStore.initAuth()
  cartStore.initCart()
})

// Başlık ayarları
useHead({
  title: 'Store 55 - Samsunspor Resmi Alışveriş Sitesi',
  link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }]
})
</script>

<style>
/* Global stiller burada kalabilir */
body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; }
</style>