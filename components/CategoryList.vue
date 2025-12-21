<template>
  <section class="tum-alan">
    <div class="container">
      
      <div class="ust-kisim">
        <h2 class="baslik">Formalar</h2>
        <div class="oklar">
          <button class="ok-butonu">&lt;</button>
          <button class="ok-butonu">&gt;</button>
        </div>
      </div>

      <div class="urun-listesi">
        
        <NuxtLink to="/product/1" class="kart">
          <div class="resim-kutusu">
            <img src="~/assets/beyazforma.png" alt="Beyaz Forma" />
          </div>
          <h3>BEYAZ FORMA</h3>
        </NuxtLink>

        <NuxtLink to="/product/2" class="kart">
          <div class="resim-kutusu">
            <img src="~/assets/cubukluforma.png" alt="Çubuklu Forma" />
          </div>
          <h3>ÇUBUKLU FORMA</h3>
        </NuxtLink>

        <NuxtLink to="/product/3" class="kart">
          <div class="resim-kutusu">
            <img src="~/assets/kingofthenorth.png" alt="Kuzeyin Kralı" />
          </div>
          <h3 class="kirmizi-yazi">KING OF THE NORTH FORMA</h3>
        </NuxtLink>

        <NuxtLink to="/product/4" class="kart">
          <div class="resim-kutusu">
            <img src="~/assets/kapsayici.png" alt="Kapsayıcı Forma" />
          </div>
          <h3>KAPSAYICI FORMA</h3>
        </NuxtLink>

      </div> 
    </div>
  </section>
</template>

<style scoped>
/* SAYFA DÜZENİ */
.tum-alan {
  padding: 30px 0;
  font-family: Arial, sans-serif;
  background-color: white;
}

.container {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
}

.ust-kisim {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.baslik {
  font-size: 24px;
  font-weight: 800;
  color: #000;
  margin: 0;
}

.oklar { display: flex; gap: 5px; }
.ok-butonu {
  width: 35px; height: 35px; border: 1px solid #ccc; background: white; cursor: pointer; font-weight: bold;
}

/* GRID YAPISI */
.urun-listesi {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* KART TASARIMI - Link olduğu için text-decoration sıfırlıyoruz */
.kart {
  text-align: left;
  cursor: pointer;
  text-decoration: none; /* Link alt çizgisini kaldır */
  display: block;
}

.resim-kutusu {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f9f9f9;
}

.resim-kutusu img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.kart:hover .resim-kutusu img {
  transform: scale(1.05);
}

.kart h3 {
  font-size: 15px;
  font-weight: 800;
  margin-top: 10px;
  color: #000;
  text-transform: uppercase;
}

.kirmizi-yazi { color: #d30000 !important; }

@media (max-width: 768px) {
  .urun-listesi { grid-template-columns: repeat(2, 1fr); }
}
</style>