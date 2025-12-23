// types/index.ts

// 1. Ürün Veri Tipi
export interface IProduct {
  id: string;
  title: string;
  price: number;
  image: string;
}

// 2. Sepet Veri Tipi
export interface ICartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

// 3. Kullanıcı Veri Tipi
export interface IUser {
  email: string;
  uid: string;
  isVerified: boolean;
}

// 4. Mesaj Formu Tipi
export interface IMessage {
  fullname: string;
  email: string;
  text: string;
}