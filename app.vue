<template>
  <div id="app-layout">
    <TheHeader />

    <main class="main-content">
      <NuxtPage />
    </main>

    <TheFooter />
    
    <FloatingButton />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/userStore'

// Sadece Kullanıcı takibini başlatıyoruz
const userStore = useUserStore()

onMounted(() => {
  userStore.initAuth()
})

useHead({
  title: 'Store 55 - Samsunspor Resmi Alışveriş Sitesi',
  link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }]
})
</script>

<style>
body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; }
.main-content { min-height: 80vh; }
</style>