import { defineStore } from 'pinia'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification 
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
  }),

  actions: {
    // SİTENİN AÇILMASINI SAĞLAYAN EKSİK FONKSİYON BURASI:
    async initAuth() {
      const { $auth } = useNuxtApp()
      return new Promise((resolve) => {
        onAuthStateChanged($auth, (user) => {
          this.user = user
          resolve(user)
        })
      })
    },

    async register(email, password, fullName) {
      try {
        const { $auth, $db } = useNuxtApp()
        const userCredential = await createUserWithEmailAndPassword($auth, email, password)
        const user = userCredential.user
        await updateProfile(user, { displayName: fullName })
        await setDoc(doc($db, 'users', user.uid), {
          uid: user.uid,
          email: email,
          fullName: fullName,
          createdAt: new Date()
        })
        await sendEmailVerification(user)
        this.user = user
        return true
      } catch (error: any) {
        alert(error.message)
        return false
      }
    },

    async login(email, password) {
      try {
        const { $auth, $db } = useNuxtApp()
        const userCredential = await signInWithEmailAndPassword($auth, email, password)
        const docRef = doc($db, 'users', userCredential.user.uid)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          this.user = { 
            uid: userCredential.user.uid, 
            email: userCredential.user.email,
            fullName: docSnap.data().fullName 
          }
        } else {
          this.user = userCredential.user
        }
        return true
      } catch (error: any) {
        alert("Giriş başarısız: " + error.message)
        return false
      }
    },

    async logout() {
      const { $auth } = useNuxtApp()
      await signOut($auth)
      this.user = null
      navigateTo('/')
    }
  }
})