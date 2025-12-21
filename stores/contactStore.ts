import { defineStore } from 'pinia'
import { addDoc, collection } from 'firebase/firestore'

export const useContactStore = defineStore('contactStore', {
  state: () => ({
    loading: false
  }),

  actions: {
    async sendMessage(formData: any) {
      this.loading = true
      try {
        const { $db } = useNuxtApp()
        
        // 4. TABLO BURADA OLUŞUYOR: 'messages'
        await addDoc(collection($db, 'messages'), {
          ...formData,
          createdAt: new Date()
        })
        
        alert('Mesajınız tarafımıza ulaştı. En kısa sürede döneceğiz!')
        return true
      } catch (error) {
        console.error(error)
        alert('Mesaj gönderilirken hata oluştu.')
        return false
      } finally {
        this.loading = false
      }
    }
  }
})