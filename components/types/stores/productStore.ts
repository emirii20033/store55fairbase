import { defineStore } from 'pinia'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import type { IProduct } from '~/types'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as IProduct[],
    loading: false
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const { $db } = useNuxtApp()
        const querySnapshot = await getDocs(collection($db, 'products'))
        this.products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as IProduct[]
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async addProductToFirebase(product: any) {
      const { $db } = useNuxtApp()
      await addDoc(collection($db, 'products'), product)
    }
  }
})