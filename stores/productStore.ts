import { defineStore } from 'pinia'
import { collection, getDocs, addDoc } from 'firebase/firestore' // Firebase komutları
import type { IProduct } from '~/types' // Az önce yazdığımız tipler

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as IProduct[], // Ürünleri burada tutacağız
    loading: false
  }),

  actions: {
    // Firebase'den Ürünleri Çekme Fonksiyonu
    async fetchProducts() {
      this.loading = true
      try {
        const { $db } = useNuxtApp() // Plugin'den veritabanını al
        // 'products' tablosuna git ve verileri al
        const querySnapshot = await getDocs(collection($db, 'products'))
        
        this.products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as IProduct[]
        
        console.log('Ürünler Firebase\'den çekildi:', this.products)
      } catch (error) {
        console.error('Hata:', error)
      } finally {
        this.loading = false
      }
    },

    // (Geçici) Firebase'e Ürün Ekleme Fonksiyonu
    async addProductToFirebase(product: any) {
      const { $db } = useNuxtApp()
      await addDoc(collection($db, 'products'), product)
    }
  }
})