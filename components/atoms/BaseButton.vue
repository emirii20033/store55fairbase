<template>
  <button :class="['base-button', variantClass]" :type="type">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  type: {
    type: String,
    default: 'button',
  },
  // YENİ PROP: Yedek yazı
  text: {
    type: String,
    default: '',
  },
})

const variantClass = computed(() => {
  return `base-button--${props.variant}`
})
</script>

<style scoped>
/* Stiller aynı kalıyor */
.base-button {
  display: inline-block;
  width: 100%;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid transparent;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
  text-decoration: none;
}
.base-button--primary {
  background-color: #e60000;
  color: #ffffff;
  border-color: #e60000;
}
.base-button--primary:hover {
  background-color: #b30000;
  border-color: #b30000;
}
.base-button--secondary {
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
}
.base-button--secondary:hover {
  background-color: #333333;
  border-color: #333333;
}
.base-button--outline {
  background-color: #ffffff;
  color: #4a4a4a;
  border: 1px solid #dddddd;
}
.base-button--outline:hover {
  background-color: #f5f5f5;
  border-color: #cccccc;
}
</style>
