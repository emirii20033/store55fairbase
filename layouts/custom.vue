<template>
  <div class="custom-layout">
    <div class="content-box">
      <slot />
      
      <div class="back-link">
        <NuxtLink to="/">← Ana Sayfaya Dön</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-layout {
  background-color: #f3f4f6; /* Hafif gri arka plan */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
}
.back-link { margin-top: 20px; }
.back-link a { color: #d01c1c; text-decoration: none; font-weight: bold; }
</style>