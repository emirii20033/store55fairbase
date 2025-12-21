<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="base-input"
    />
  </div>
</template>

<script setup>
// Props (özellikler) tanımlıyoruz
defineProps({
  // v-model ile çift yönlü veri bağlama için 'modelValue' kullanılır
  modelValue: {
    type: [String, Number],
    default: '',
  },
  // "E-posta Adresiniz" gibi üst başlık
  label: {
    type: String,
    default: '',
  },
  // Label ve input'u bağlamak için benzersiz ID
  id: {
    type: String,
    required: true,
  },
  // Input'un tipi (text, password, email vb.)
  type: {
    type: String,
    default: 'text',
  },
  // Input'un içinde soluk görünen yazı (varsa)
  placeholder: {
    type: String,
    default: '',
  },
})

// v-model'in çalışması için 'update:modelValue' emit'ini tanımlıyoruz
defineEmits(['update:modelValue'])
</script>

<style scoped>
.input-wrapper {
  width: 100%;
  margin-bottom: 20px; /* Inputlar arası dikey boşluk */
}

.input-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
  text-align: left; /* Etiket sola dayalı */
  font-weight: 600;
}

.base-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box; /* Padding'in genişliği etkilememesi için */
}

.base-input::placeholder {
  color: #aaaaaa;
}

.base-input:focus {
  outline: none;
  border-color: #e60000; /* Odaklanınca kırmızı çerçeve */
  box-shadow: 0 0 0 2px rgba(230, 0, 0, 0.2);
}
</style>
