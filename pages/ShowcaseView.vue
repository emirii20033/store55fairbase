<template>
  <div class="showcase-layout">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-title">🧩 Component Atlası</h2>
        <p class="sidebar-subtitle">Atomik Tasarım Parçaları</p>
      </div>

      <div class="sidebar-scroll">
        <ul class="component-list">
          <li
            v-for="(comp, key) in componentsList"
            :key="key"
            @click="selectedKey = key"
            :class="{ active: selectedKey === key }"
          >
            {{ comp.label }}
          </li>
        </ul>
      </div>

      <div class="back-link">
        <router-link to="/">🏠 Ana Siteye Dön</router-link>
      </div>
    </aside>

    <main class="preview-area">
      <div v-if="!selectedKey" class="empty-state">
        <div class="empty-icon">👈</div>
        <h3>Hoş Geldiniz!</h3>
        <p>Sol menüden incelemek istediğiniz bileşeni seçin.</p>
      </div>

      <div v-else class="component-wrapper">
        <div class="preview-header">
          <h3 class="preview-title">{{ componentsList[selectedKey].label }}</h3>
          <span class="file-path">{{ componentsList[selectedKey].path }}</span>
        </div>

        <div class="preview-box">
          <component
            :is="componentsList[selectedKey].component"
            v-bind="componentsList[selectedKey].props"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { shallowRef, ref } from 'vue'

// --- SAYFALAR ---
import CartPage from '../views/CartPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'

// --- BİLEŞENLER ---
import BaseButton from '../components/atoms/BaseButton.vue'
import BaseInput from '../components/atoms/BaseInput.vue'
import FloatingButton from '../components/atoms/FloatingButton.vue'
import TickerText from '../components/atoms/TickerText.vue'

import ProductCard from '../components/molecules/ProductCard.vue'
import CategoryCard from '../components/molecules/CategoryCard.vue'
import LoginForm from '../components/molecules/LoginForm.vue'

import TheHeader from '../components/organisms/TheHeader.vue'
import TheFooter from '../components/organisms/TheFooter.vue'
import AppBanner from '../components/organisms/AppBanner.vue'
import CategoryList from '../components/organisms/CategoryList.vue'
import ProductSlider from '../components/organisms/ProductSlider.vue'

import sapkaImg from '../assets/sapka.png'

const selectedKey = ref(null)

const componentsList = {
  // --- SAYFALAR ---
  ShoppingCart: {
    label: 'Sayfa: Alışveriş Sepeti',
    component: CartPage,
    props: {
      cart: [
        { id: 1, title: 'Örnek Şapka', price: '249,90 TL', imageUrl: sapkaImg, quantity: 1 },
        { id: 2, title: 'Örnek Forma', price: '1.250,00 TL', imageUrl: sapkaImg, quantity: 2 },
      ],
    },
    path: 'src/views/CartPage.vue',
  },
  RegisterPage: {
    label: 'Sayfa: Yeni Üyelik',
    component: RegisterPage,
    path: 'src/views/RegisterPage.vue',
  },
  ProductDetail: {
    label: 'Sayfa: Ürün Detay (Örnek)',
    component: ProductDetailPage,
    path: 'src/views/ProductDetailPage.vue',
  },

  // --- ORGANİZMALAR ---
  TheHeader: {
    label: 'Organizma: Header (Üst Menü)',
    component: TheHeader,
    props: { cartCount: 5 },
    path: 'src/components/organisms/TheHeader.vue',
  },
  TheFooter: {
    label: 'Organizma: Footer (Alt Bilgi)',
    component: TheFooter,
    path: 'src/components/organisms/TheFooter.vue',
  },
  ProductSlider: {
    label: 'Organizma: Ürün Slider',
    component: ProductSlider,
    path: 'src/components/organisms/ProductSlider.vue',
  },
  CategoryList: {
    label: 'Organizma: Kategori Listesi',
    component: CategoryList,
    path: 'src/components/organisms/CategoryList.vue',
  },
  AppBanner: {
    label: 'Organizma: İndirim Banner',
    component: AppBanner,
    path: 'src/components/organisms/AppBanner.vue',
  },

  // --- MOLEKÜLLER ---
  ProductCard: {
    label: 'Molekül: Ürün Kartı',
    component: ProductCard,
    props: { title: 'Örnek Ürün', price: '999 TL', imageUrl: sapkaImg, productId: 1 },
    path: 'src/components/molecules/ProductCard.vue',
  },
  CategoryCard: {
    label: 'Molekül: Kategori Kartı',
    component: CategoryCard,
    props: { title: 'ÖRNEK KATEGORİ', imageUrl: sapkaImg, productId: 1 },
    path: 'src/components/molecules/CategoryCard.vue',
  },
  LoginForm: {
    label: 'Molekül: Giriş Formu',
    component: LoginForm,
    path: 'src/components/molecules/LoginForm.vue',
  },

  // --- ATOMLAR ---
  BaseButton: {
    label: 'Atom: BaseButton',
    component: BaseButton,
    // DÜZELTME: 'text' prop'u ekledik. Artık butonun içinde yazı olacak.
    props: { variant: 'primary', type: 'button', text: 'Örnek Buton' },
    path: 'src/components/atoms/BaseButton.vue',
  },
  BaseInput: {
    label: 'Atom: BaseInput',
    component: BaseInput,
    props: { label: 'Örnek Input', id: 'test-input', placeholder: 'Bir şeyler yazın...' },
    path: 'src/components/atoms/BaseInput.vue',
  },
  TickerText: {
    label: 'Atom: Kayan Yazı',
    component: TickerText,
    path: 'src/components/atoms/TickerText.vue',
  },
  FloatingButton: {
    label: 'Atom: Fırsat Butonu',
    component: FloatingButton,
    // DÜZELTME: 'isDemo: true' gönderdik. Artık kutunun içinde duracak.
    props: { isDemo: true },
    path: 'src/components/atoms/FloatingButton.vue',
  },
}
</script>

<style scoped>
.showcase-layout {
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

.sidebar {
  width: 300px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #1a252f;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 20px;
  background-color: #233140;
}
.sidebar-title {
  margin: 0;
  font-size: 20px;
  color: #ecf0f1;
}
.sidebar-subtitle {
  margin: 5px 0 0 0;
  font-size: 12px;
  color: #95a5a6;
}

.sidebar-scroll {
  flex: 1;
  overflow-y: auto;
}

.component-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.component-list li {
  padding: 12px 20px;
  cursor: pointer;
  border-bottom: 1px solid #34495e;
  transition: all 0.2s;
  font-size: 14px;
}
.component-list li:hover {
  background-color: #34495e;
  padding-left: 25px;
}
.component-list li.active {
  background-color: #e60000;
  font-weight: bold;
  border-left: 4px solid white;
}

.back-link {
  padding: 15px;
  background-color: #1a252f;
  text-align: center;
}
.back-link a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}

.preview-area {
  flex-grow: 1;
  background-color: #f4f4f4;
  padding: 40px;
  overflow-y: auto;
}

.empty-state {
  text-align: center;
  margin-top: 100px;
  color: #7f8c8d;
}
.empty-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.component-wrapper {
  max-width: 100%;
  margin: 0 auto;
}

.preview-header {
  margin-bottom: 20px;
  border-bottom: 2px solid #bdc3c7;
  padding-bottom: 10px;
}
.preview-title {
  margin: 0;
  color: #2c3e50;
  font-size: 24px;
}
.file-path {
  font-family: monospace;
  color: #7f8c8d;
  font-size: 12px;
  background: #e0e0e0;
  padding: 2px 6px;
  border-radius: 4px;
}

.preview-box {
  background: white;
  padding: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  min-height: 200px;
  display: block;
  overflow-x: auto;
}
</style>
