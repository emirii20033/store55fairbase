<template>
  <div class="ticker-wrap">
    <div class="ticker-content">
      <span>SAMSUNSPOR FK <span class="dot">•</span></span>
      <span class="red">SAMSUNSPOR FK <span class="dot">•</span></span>
      <span>SAMSUNSPOR FK <span class="dot">•</span></span>
      <span class="red">SAMSUNSPOR FK <span class="dot">•</span></span>

      <span>SAMSUNSPOR FK <span class="dot">•</span></span>
      <span class="red">SAMSUNSPOR FK <span class="dot">•</span></span>
      <span>SAMSUNSPOR FK <span class="dot">•</span></span>
      <span class="red">SAMSUNSPOR FK <span class="dot">•</span></span>
    </div>
  </div>
</template>

<script setup>
// Bu bileşenin bir script'e ihtiyacı yok
</script>

<style scoped>
.ticker-wrap {
  width: 100%;
  overflow: hidden; /* Taşan yazıları gizle */
  background-color: #f0f0f0; /* Resimdeki gri arka plan */

  /* Resimdeki kırmızı çizgiler */
  border-top: 3px solid #e60000;
  border-bottom: 3px solid #e60000;

  padding: 15px 0; /* Yazı için dikey boşluk */
  box-sizing: border-box;
}

.ticker-content {
  display: flex; /* Yazıları yan yana diz */
  white-space: nowrap; /* Yazıların alta kaymasını engelle */

  /* Animasyonun adı 'scroll', süresi 20sn,
    sürekli (infinite) ve aynı hızda (linear) dönsün
  */
  animation: scroll 20s linear infinite;
}

.ticker-content span {
  font-size: 24px;
  font-weight: 900; /* PDF'teki gibi çok kalın */
  color: #000; /* Siyah renk */
  padding: 0 15px;
}

.ticker-content span.red {
  color: #e60000; /* Kırmızı renk */
}

.ticker-content span .dot {
  color: #888; /* Noktanın rengi */
  vertical-align: middle;
}

/* Animasyonun tanımı */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* İçeriğin yarısı kadar (%50) sola kaydır ve başa dön */
    transform: translateX(-50%);
  }
}
</style>
