import { defineStore } from 'pinia'
import { addDoc, collection } from 'firebase/firestore'
import { useUserStore } from './userStore'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [] as any[],
    loading: false
  }),

  getters: {
    totalItems: (state) => state.cart.reduce((total, item) => total + (item.quantity || 1), 0),
    totalPrice: (state) => state.cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
  },

  actions: {
    addToCart(product: any) {
      const existingItem = this.cart.find(item => item.id === product.id && item.size === product.size)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart(cartId: any) {
      const index = this.cart.findIndex(item => item.id === cartId || item.cartId === cartId)
      if (index > -1) this.cart.splice(index, 1)
    },

    clearCart() {
      this.cart = []
    },

    async checkout() {
      const userStore = useUserStore()
      
      if (!userStore.user) {
        alert('Sipariş vermek için giriş yapmalısınız!')
        return
      }

      if (this.cart.length === 0) return

      this.loading = true
      try {
        const { $db } = useNuxtApp()
        
        const orderData = {
          userId: userStore.user.uid,
          userEmail: userStore.user.email,
          products: this.cart,
          totalPrice: this.totalPrice,
          status: 'Hazırlanıyor',
          createdAt: new Date()
        }

        await addDoc(collection($db, 'orders'), orderData)
        
        alert('Siparişiniz alındı! Teşekkürler.')
        this.clearCart()
        navigateTo('/')
      } catch (error) {
        console.error(error)
        alert('Sipariş sırasında hata oluştu.')
      } finally {
        this.loading = false
      }
    }
  }
})