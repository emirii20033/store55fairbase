<template>
  <div id="default-layout">
    <TheHeader />

    <main class="main-content">
      <slot />
    </main>

    <TheFooter />
    <FloatingButton />
  </div>
</template>

<style scoped>
.main-content { min-height: 80vh; }
</style>