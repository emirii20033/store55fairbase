import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore' // Veritabanı için ekledik
import { getAuth } from 'firebase/auth'           // Üyelik işlemleri için ekledik
import { getAnalytics } from "firebase/analytics" // Senin kodundaki analiz aracı

export default defineNuxtPlugin((nuxtApp) => {
  // Senin verdiğin Config bilgileri
  const firebaseConfig = {
    apiKey: "AIzaSyBbxGGCocgfgRgIemUQfx2LohIzlqWYpTU",
    authDomain: "store55-e9527.firebaseapp.com",
    projectId: "store55-e9527",
    storageBucket: "store55-e9527.firebasestorage.app",
    messagingSenderId: "398034157166",
    appId: "1:398034157166:web:6f7f341f9379a091e0b07f",
    measurementId: "G-Y7GN1ZZ3GL"
  };

  // Firebase'i Başlat
  const app = initializeApp(firebaseConfig);

  // Servisleri Başlat
  const firestore = getFirestore(app); // Veritabanını açtık
  const auth = getAuth(app);           // Giriş sistemini açtık
  const analytics = getAnalytics(app); // Analizi açtık

  // Nuxt uygulamasına bunları "dağıt" (Provide)
  // Böylece her yerden $db veya $auth diyerek ulaşabileceğiz
  return {
    provide: {
      db: firestore,
      auth: auth,
      analytics: analytics
    }
  }
})