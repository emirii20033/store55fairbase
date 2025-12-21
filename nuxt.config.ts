// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // CSS SATIRINI SİLDİK (Hata veren buydu)

  // Pinia modülü kesinlikle kalmalı
  modules: [
    '@pinia/nuxt'
  ],

  typescript: {
    strict: true
  }
})