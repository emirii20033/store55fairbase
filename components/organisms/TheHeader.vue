<template>
  <header class="site-header">
    
    <div class="top-bar">
      SÜRAT KARGO İLE 3000 TL VE ÜZERİ ALIŞVERİŞLERDE KARGO ÜCRETSİZDİR.
    </div>

    <div class="header-main container">
      
      <NuxtLink to="/" class="logo-link">
        <img src="/logo.png" alt="Samsunspor Logo" class="logo" />
      </NuxtLink>

      <nav class="main-nav">
        <a href="#">FUTBOL</a>
        <a href="#">ERKEK</a>
        <a href="#">KADIN</a>
        <a href="#">ÇOCUK</a>
        <a href="#">BEBEK</a>
        <a href="#">AKSESUAR</a>
        <a href="#" class="red-link">YENİ ÜRÜNLER</a>
        <a href="#">FORMANI KİŞİSELLEŞTİR</a>
      </nav>

      <div class="header-actions">
        
        <div class="lang-selector">TR <span class="arrow">⌄</span></div>
        
        <button class="icon-btn search-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>

        <NuxtLink to="/login" class="icon-btn user-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </NuxtLink>

        <NuxtLink to="/cart" class="cart-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          Sepetim ({{ cartCount }})
        </NuxtLink>

      </div>
    </div>
  </header>
</template>

<script setup>
// Props: app.vue'dan gelen sepet sayısını alır
defineProps({
  cartCount: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
/* Header Stilleri */
.site-header { font-family: 'Arial', sans-serif; background: white; border-bottom: 1px solid #eee; }

.top-bar {
  background-color: #d30000;
  color: white;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  padding: 8px 0;
  letter-spacing: 0.5px;
}

.container { max-width: 1400px; margin: 0 auto; width: 95%; }

.header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
}

.logo { height: 70px; width: auto; }

.main-nav { display: flex; gap: 20px; }
.main-nav a {
  text-decoration: none;
  color: #000;
  font-size: 13px;
  font-weight: bold;
  transition: color 0.3s;
}
.main-nav a:hover { color: #d30000; }
.red-link { color: #d30000 !important; }

.header-actions { display: flex; align-items: center; gap: 15px; }

.icon-btn {
  background: none; border: none; cursor: pointer; color: #333; display: flex; align-items: center;
  text-decoration: none; /* Link olduğu için alt çizgiyi kaldır */
}
.icon-btn:hover { color: #d30000; }

.cart-btn {
  background-color: #d30000;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s;
}
.cart-btn:hover { background-color: #b00000; }

.lang-selector { font-size: 12px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 3px;}

@media (max-width: 1024px) {
  .main-nav { display: none; } /* Mobilde menüyü gizle (basitlik için) */
  .logo { height: 50px; }
}
</style>