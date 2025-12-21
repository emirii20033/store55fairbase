<template>
  <div class="cart-page">
    
    <div class="container main-layout">
      
      <div v-if="cartStore.totalItems > 0 && cartStore.totalPrice < 3000" class="shipping-calculator">
        <div class="shipping-alert">
          <div class="text-content">
            SEPETİNİZE <span class="amount">{{ formatPrice(3000 - cartStore.totalPrice) }} TL</span>'LİK DAHA ÜRÜN EKLEYİN
            <br>
            <span class="bold-text">KARGO ÜCRETİ ÖDEMEYİN!</span>
          </div>
          <div class="truck-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          </div>
        </div>
      </div>

      <div class="header-row">
        <h1 class="page-title">SEPET DETAYI</h1>
        
        <button @click="cartStore.clearCart" class="clear-cart-btn" v-if="cartStore.totalItems > 0">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Sepeti Boşalt
        </button>
      </div>

      <div v-if="cartStore.totalItems === 0" class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p>Sepetinizde ürün bulunmamaktadır.</p>
        <NuxtLink to="/" class="continue-link">Alışverişe Başla</NuxtLink>
      </div>

      <div v-else class="cart-grid">
        
        <div class="left-column">
          <div class="cart-items-list">
            <div v-for="item in cartStore.cart" :key="item.id" class="cart-item-row">
              <div class="col-img"><img :src="item.image" :alt="item.name" /></div>
              <div class="col-info">
                <h3 class="item-name">{{ item.name }} {{ item.size }}</h3>
                <button @click="cartStore.removeFromCart(item.id)" class="item-delete-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  Sepetten Sil
                </button>
              </div>
              <div class="col-qty">
                <div class="qty-wrapper">
                  <button @click="decreaseQty(item)" class="qty-btn">-</button>
                  <input type="text" :value="item.quantity" readonly class="qty-input" />
                  <button @click="increaseQty(item)" class="qty-btn">+</button>
                </div>
                <span class="qty-label">Adet</span>
              </div>
              <div class="col-price">
                <div class="price-val">{{ formatPrice(item.price * item.quantity) }} TL</div>
                <div class="kdv-label">+ KDV %10</div>
              </div>
            </div>
          </div>

          <NuxtLink to="/" class="back-btn">← ALIŞVERİŞE DEVAM ET</NuxtLink>

          <div class="gift-section">
            <h3 class="gift-title">HEDİYE ÇEKİ</h3>
            <div class="gift-content">
              <label class="gift-check">
                <input type="checkbox" /> <span>Hediye çeki kullan</span>
              </label>
            </div>
          </div>
        </div>

        <div class="right-column">
          <div class="summary-box">
            <h3 class="summary-title">SEPET ÖZETİ</h3>
            <div class="summary-line"><span>Ara Toplam</span><span>{{ formatPrice(subTotal) }} TL</span></div>
            <div class="summary-line"><span>KDV</span><span>{{ formatPrice(kdvTotal) }} TL</span></div>
            <div class="summary-line"><span>KDV Dahil</span><span>{{ formatPrice(cartStore.totalPrice) }} TL</span></div>
            
            <div class="summary-line total">
              <span>Toplam</span>
              <span>{{ formatPrice(cartStore.totalPrice) }} TL</span>
            </div>

            <button @click="cartStore.checkout" class="checkout-btn">ALIŞVERİŞİ TAMAMLA</button>
            <div class="ssl-badge">🔒 THIS SITE IS SSL SECURED</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/stores/cartStore'

const cartStore = useCartStore()

const subTotal = computed(() => cartStore.totalPrice / 1.1)
const kdvTotal = computed(() => cartStore.totalPrice - subTotal.value)
const increaseQty = (item) => item.quantity++
const decreaseQty = (item) => { if (item.quantity > 1) item.quantity-- }
const formatPrice = (value) => {
  return value.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
</script>

<style scoped>
.cart-page { font-family: 'Arial', sans-serif; background: #fff; min-height: 80vh; padding-bottom: 50px; padding-top: 30px; }
.container { max-width: 1250px; margin: 0 auto; padding: 0 15px; }

/* AKILLI KARGO STİLİ */
.shipping-calculator { display: flex; justify-content: flex-end; margin-bottom: 20px; }
.shipping-alert { display: flex; align-items: center; gap: 15px; text-align: right; }
.text-content { font-size: 13px; color: #333; line-height: 1.4; }
.amount { font-weight: bold; }
.bold-text { font-weight: 800; font-size: 14px; }
.truck-icon { color: #000; } 

/* HEADER */
.header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.page-title { color: #d30000; font-size: 16px; font-weight: bold; margin: 0; text-transform: uppercase; }
.clear-cart-btn { background: none; border: none; cursor: pointer; color: #333; font-size: 12px; font-weight: bold; display: flex; align-items: center; gap: 5px; }
.clear-cart-btn:hover { color: #d30000; }

.cart-grid { display: flex; gap: 30px; }
.left-column { flex: 2.5; }
.right-column { flex: 1; }

.cart-item-row { display: flex; align-items: center; background: white; border: 1px solid #eee; padding: 20px; margin-bottom: 15px; }
.col-img img { width: 80px; height: 100px; object-fit: contain; }
.col-info { flex: 2; padding-left: 20px; }
.item-name { font-size: 13px; color: #555; font-weight: bold; margin: 0 0 10px 0; text-transform: uppercase; }
.item-delete-btn { background: #fff; border: 1px solid #ddd; color: #888; font-size: 11px; padding: 5px 10px; cursor: pointer; display: flex; align-items: center; gap: 5px; border-radius: 3px; }
.item-delete-btn:hover { border-color: #d30000; color: #d30000; }

.col-qty { display: flex; flex-direction: column; align-items: center; margin: 0 30px; }
.qty-wrapper { display: flex; border: 1px solid #ddd; border-radius: 3px; overflow: hidden; }
.qty-btn { width: 35px; height: 35px; background: #fff; border: none; cursor: pointer; font-weight: bold; font-size: 16px; color: #555; transition: 0.2s; }
.qty-btn:hover { background: #f5f5f5; }
.qty-input { width: 40px; border: none; text-align: center; font-size: 14px; font-weight: bold; color: #333; border-left: 1px solid #eee; border-right: 1px solid #eee; }
.qty-label { font-size: 10px; color: #999; margin-top: 5px; }

.col-price { text-align: right; min-width: 100px; }
.price-val { font-size: 16px; font-weight: bold; color: #333; }
.kdv-label { font-size: 11px; color: #999; margin-top: 3px; }

.back-btn { display: inline-block; background: #f1f1f1; color: #333; padding: 12px 20px; font-size: 11px; font-weight: bold; text-decoration: none; border: 1px solid #ddd; border-radius: 3px; margin-top: 10px; }
.back-btn:hover { background: #e1e1e1; }

.gift-section { margin-top: 40px; border: 1px solid #eee; }
.gift-title { background: white; color: #d30000; font-size: 14px; padding: 10px 15px; margin: 0; font-weight: bold; border-bottom: 1px solid #eee; text-transform: uppercase; }
.gift-content { padding: 15px; background: #fcfcfc; }
.gift-check { display: flex; align-items: center; gap: 10px; font-size: 13px; color: #666; cursor: pointer; }

.summary-box { border: 1px solid #eee; padding: 0; background: white; }
.summary-title { font-size: 14px; color: #d30000; font-weight: bold; text-align: center; padding: 15px 0; margin: 0; border-bottom: 1px solid #eee; text-transform: uppercase; }
.summary-line { display: flex; justify-content: space-between; padding: 10px 20px; font-size: 13px; color: #666; }
.summary-line.total { border-top: 1px solid #eee; margin-top: 10px; padding-top: 15px; padding-bottom: 15px; font-weight: bold; color: #333; background: #fcfcfc; font-size: 15px; }
.checkout-btn { width: 90%; margin: 0 5% 15px 5%; background: #d30000; color: white; border: none; padding: 15px; font-weight: bold; font-size: 13px; cursor: pointer; transition: 0.3s; }
.checkout-btn:hover { background: #b00000; }
.ssl-badge { text-align: center; font-size: 10px; color: #999; padding-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 5px; opacity: 0.7; }

.empty-cart { text-align: center; padding: 100px 0; }
.empty-icon { font-size: 50px; color: #ddd; margin-bottom: 10px; }
.continue-link { color: #d30000; font-weight: bold; text-decoration: underline; }

@media (max-width: 900px) {
  .cart-grid { flex-direction: column; }
  .cart-item-row { flex-wrap: wrap; justify-content: center; text-align: center; }
  .col-info { padding: 0; margin-bottom: 15px; }
  .col-price { text-align: center; width: 100%; }
}
</style>