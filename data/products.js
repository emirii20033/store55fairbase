// Dosya Yolu: src/data/products.js

// 1. ÜRÜN SLIDER RESİMLERİ
import sapkaImg from '../assets/sapka.png'
import antrasitImg from '../assets/antrasit.png'
import tshirtImg from '../assets/t-shirt.png'
import lacivertImg from '../assets/lacivert.png'
import morFormaImg from '../assets/morforma.png'
import hummelBeyazImg from '../assets/HUMMELBEYAZ.png'

// 2. KATEGORİ RESİMLERİ
import beyazFormaImg from '../assets/beyazforma.png'
import cubukluFormaImg from '../assets/cubukluforma.png'
import kingofthenorthImg from '../assets/kingofthenorth.png'
import milenyumImg from '../assets/milenyum.png'
import kapsayiciImg from '../assets/kapsayici.png'

// 3. TÜM ÜRÜNLER LİSTESİ
export const allProducts = [
  // --- ÜRÜN SLIDER ÜRÜNLERİ (ID: 1-6) ---
  {
    id: 1,
    title: 'ŞAPKA',
    price: '249,90 TL',
    imageUrl: sapkaImg,
  },
  {
    id: 2,
    title: '24/25 Hummel Samsunspor t-shirt',
    price: '849,90 TL',
    imageUrl: hummelBeyazImg,
  },
  {
    id: 3,
    title: '20/21 SAMSUNSPOR ANTRASİT FORMA',
    price: '455,00 TL',
    imageUrl: antrasitImg,
  },
  {
    id: 4,
    title: '24/25 Hummel Samsunspor LACİVERT',
    price: '1.299,90 TL',
    imageUrl: lacivertImg,
  },
  {
    id: 5,
    title: '22/3SAMSUNSPOR MOR FORMA',
    price: '455,00 TL',
    imageUrl: morFormaImg,
  },
  {
    id: 6,
    title: '24/25 Hummel Samsunspor Beyaz',
    price: '1.249,90 TL',
    imageUrl: tshirtImg,
  },

  // ----------------------------------------------------

  // ----------------------------------------------------
  {
    id: 7,
    title: 'BEYAZ FORMA',
    price: '1.450,00 TL',
    imageUrl: beyazFormaImg,
  },
  {
    id: 8,
    title: 'ÇUBUKLU FORMA',
    price: '1.450,00 TL',
    imageUrl: cubukluFormaImg,
  },
  {
    id: 9,
    title: 'KING OF THE NORTH FORMA',
    price: '1.550,00 TL',
    imageUrl: kingofthenorthImg,
  },
  {
    id: 10,
    title: 'MILENYUM FORMA',
    price: '1.350,00 TL',
    imageUrl: milenyumImg,
  },
  {
    id: 11,
    title: 'KAPSAYICI FORMA',
    price: '1.350,00 TL',
    imageUrl: kapsayiciImg,
  },
]
