<template>
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
          </ul>
        </div>

        <div class="footer-col">
          <h3>BİZİ TAKİP EDİN</h3>
          <ul class="social-links">
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                X
              </a>
            </li>
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 5.5v10.5a2.5 2.5 0 1 1-2.5-2.5v-3a5.5 5.5 0 1 0 5.5 5.5v-6.5h3v3h-3v-7h-3z"></path></svg>
                TikTok
              </a>
            </li>
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27z"></path></svg>
                YouTube
              </a>
            </li>
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

        <div class="footer-security-text">
          Kredi Kartı Bilgileriniz 256Bit SSL Sertifikası ile korunmaktadır.
        </div>

        <div class="footer-payment">
          <div class="ssl-badge">
            <span class="lock-icon">🔒</span>
            <div class="ssl-text">
              <span>256 Bit</span>
              <span>SSL Secured</span>
            </div>
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
</template>

<style scoped>
/* GENEL AYARLAR */
.site-footer {
  background-color: #d30000; /* Orijinal Kırmızı */
  color: white;
  padding: 50px 0 20px;
  font-family: 'Arial', sans-serif;
  margin-top: auto;
}

.container {
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
}

/* ÜST KISIM LINKLER */
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr; /* 3 Sütun */
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col h3 {
  font-size: 16px;
  font-weight: 800; /* Kalın Başlık */
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 12px;
}

.footer-col ul li a {
  text-decoration: none;
  color: white;
  font-size: 14px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-col ul li a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* SOSYAL MEDYA İKONLARI */
.social-links svg {
  width: 18px;
  height: 18px;
}

/* AYIRAÇ ÇİZGİSİ */
.footer-divider {
  height: 1px;
  background-color: rgba(255,255,255,0.2);
  margin-bottom: 30px;
}

/* ALT KISIM DÜZENİ */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* SOL: MADE BY EMIR MUSLU (LOGO GİBİ DURUŞ) */
.brand-signature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Arial', sans-serif;
  border-left: 3px solid white; /* Soluna beyaz çizgi */
  padding-left: 10px;
}

.brand-top {
  font-size: 10px;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.brand-name {
  font-size: 18px;
  font-weight: 900; /* Çok Kalın */
  letter-spacing: 0.5px;
  line-height: 1.1;
}

.brand-sub {
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 2px;
  opacity: 0.7;
}

/* ORTA: GÜVENLİK METNİ */
.footer-security-text {
  font-size: 13px;
  opacity: 0.9;
  text-align: center;
}

/* SAĞ: ÖDEME İKONLARI */
.footer-payment {
  display: flex;
  align-items: center;
  gap: 15px;
}

.ssl-badge {
  background: white;
  color: #333;
  padding: 5px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: bold;
  line-height: 1.1;
}

.lock-icon { font-size: 14px; }

.card-icon {
  height: 25px; /* Kart yükseklikleri */
  width: auto;
  background: white;
  padding: 2px;
  border-radius: 2px;
}

/* EN ALT TELİF */
.copyright {
  text-align: center;
  font-size: 11px;
  opacity: 0.5;
  margin-top: 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 10px;
}

/* MOBİL İÇİN */
@media (max-width: 768px) {
  .footer-top { grid-template-columns: 1fr; gap: 30px; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .brand-signature { align-items: center; border-left: none; border-bottom: 3px solid white; padding-left: 0; padding-bottom: 10px; }
}
</style>