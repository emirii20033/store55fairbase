<template>
  <div class="footer-wrapper">
    
    <div class="full-banner-container">
      <img src="/altbanner.png" alt="Samsunspor Stadyum" class="stadium-img" />
    </div>

    <div class="info-bar">
      <div class="container info-flex">
        
        <div class="info-item">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </div>
          <div class="info-text">
            <h4>DÜNYA ÇAPINDA TESLİMAT</h4>
          </div>
        </div>

        <div class="info-item">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"/></svg>
          </div>
          <div class="info-text">
            <h4>KOLAY VE ÜCRETSİZ İADE</h4>
          </div>
        </div>

        <div class="info-item">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <div class="info-text">
            <h4>GÜVENLİ ÖDEME</h4>
          </div>
        </div>

      </div>
    </div>

    <footer class="site-footer">
      <div class="container">
        
        <div class="footer-top">
          <div class="footer-col">
            <h3>HİZMETLER</h3>
            <ul>
              <li><a href="#">Kargo & Teslimat</a></li>
              <li><a href="#">İptal İade Koşulları</a></li>
              <li><a href="#">Gizlilik ve Güvenlik</a></li>
              <li><a href="#">Kişisel Veri Koruma</a></li>
              <li><a href="#">Aydınlatma Metni</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>HIZLI MENÜ</h3>
            <ul>
              <li><a href="#">Sipariş Takibi</a></li>
              <li><a href="#">Sıkça Sorulan Sorular</a></li>
              <li><a href="#">Üyelik Yardım</a></li>
              <li><NuxtLink to="/contact" style="font-weight: bold; text-decoration: underline;">İLETİŞİM / BİZE ULAŞIN</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>BİZİ TAKİP EDİN</h3>
            <ul class="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">X (Twitter)</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Store55 Instagram</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
          <div class="footer-brand">
            <div class="brand-signature">
              <span class="brand-top">Made By</span>
              <span class="brand-name">EMİR MUSLU</span>
              <span class="brand-line"></span>
              <span class="brand-sub">DESIGN & CODE</span>
            </div>
          </div>
          
          <div class="footer-center-text">
             Kredi Kartı Bilgileriniz 256Bit SSL Sertifikası ile korunmaktadır.
          </div>

          <div class="footer-payment">
            <div class="ssl-badge">
              <span class="lock-icon">🔒</span>
              <span class="ssl-text">256 Bit SSL Secured</span>
            </div>
            <img src="/visa.png" alt="Visa" class="card-icon" />
            <img src="/mastercard.png" alt="MasterCard" class="card-icon" />
          </div>
        </div>

        <div class="copyright">
          &copy; 2025 Store 55 - Tüm Hakları Saklıdır.
        </div>

      </div>
    </footer>
  </div>
</template>

<style scoped>
/* WRAPPER */
.footer-wrapper {
  margin-top: auto;
  width: 100%;
}

/* --- 1. STADYUM BANNER STİLİ (ZORUNLU AYARLAR) --- */
.full-banner-container {
  width: 100%;
  line-height: 0; /* Resim altındaki boşluğu siler */
  overflow: hidden; /* Taşmayı engeller */
}

.stadium-img {
  width: 100%;       /* Ekranı kapla */
  height: auto;      /* Oranını koru */
  display: block;    /* Blok eleman yap */
  object-fit: cover; /* Gerekirse doldur */
}

/* --- 2. İKON ŞERİDİ --- */
.info-bar {
  background-color: white; 
  padding: 40px 0;
  border-bottom: 1px solid #eee;
}
.info-flex {
  display: flex;
  justify-content: center;
  gap: 100px; /* İkonlar arası boşluk */
  flex-wrap: wrap;
}
.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
}
.icon-circle {
  color: #d30000;
}
.info-text h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: #000;
  text-transform: uppercase;
}

/* --- 3. KIRMIZI FOOTER (AYNI) --- */
.site-footer {
  background-color: #d30000;
  color: white;
  padding: 50px 0 20px;
  font-family: 'Arial', sans-serif;
}
.container { max-width: 1400px; width: 95%; margin: 0 auto; }
.footer-top { display: grid; grid-template-columns: 1fr 1fr 1.5fr; gap: 40px; margin-bottom: 40px; }
.footer-col h3 { font-size: 16px; font-weight: 800; margin-bottom: 20px; }
.footer-col ul { list-style: none; padding: 0; margin: 0; }
.footer-col ul li { margin-bottom: 10px; }
.footer-col ul li a { text-decoration: none; color: white; font-size: 14px; opacity: 0.9; }
.footer-col ul li a:hover { text-decoration: underline; opacity: 1; }
.social-links li { margin-bottom: 8px; }

.footer-divider { height: 1px; background-color: rgba(255,255,255,0.2); margin-bottom: 30px; }

.footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.brand-signature { display: flex; flex-direction: column; align-items: flex-start; border-left: 3px solid white; padding-left: 10px; }
.brand-top { font-size: 10px; opacity: 0.8; text-transform: uppercase; }
.brand-name { font-size: 18px; font-weight: 900; line-height: 1; margin: 2px 0; }
.brand-sub { font-size: 9px; font-weight: bold; opacity: 0.7; letter-spacing: 2px; }

.footer-center-text { font-size: 12px; opacity: 0.8; }

.footer-payment { display: flex; align-items: center; gap: 10px; }
.ssl-badge { background: white; color: #333; padding: 5px 10px; border-radius: 4px; display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: bold; }
.card-icon { height: 24px; background: white; padding: 2px; border-radius: 2px; }

.copyright { text-align: center; font-size: 11px; opacity: 0.5; margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; }

@media (max-width: 768px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .brand-signature { border-left: none; border-bottom: 3px solid white; padding-left: 0; padding-bottom: 10px; }
  .info-flex { gap: 40px; }
}
</style>