// types/index.ts

// 1. Ürün Tipi
export interface IProduct {
  id: string; // Firebase ID'si string olur
  name: string;
  price: number;
  image: string;
  gallery?: string[]; // İsteğe bağlı galeri
  size?: string; // Sepette seçilen beden
  quantity?: number; // Sepetteki adet
}

// 2. Kullanıcı Tipi (Üye olan kişi)
export interface IUser {
  uid: string;
  email: string;
  fullName: string;
  createdAt: Date;
}

// 3. Sipariş Tipi
export interface IOrder {
  id: string;
  userId: string;
  products: IProduct[];
  totalPrice: number;
  status: 'Hazırlanıyor' | 'Kargolandı' | 'Teslim Edildi';
  createdAt: Date;
}

// 4. Kampanya/Slider Tipi
export interface ICampaign {
  id: string;
  title: string;
  imageUrl: string;
  isActive: boolean;
}