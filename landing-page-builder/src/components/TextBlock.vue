<template>
  <div
    contenteditable
    class="focus:outline-none hover:outline-dashed hover:outline-2 hover:outline-green-500 focus:outline-green-500 focus:outline-2 bg-white text-black py-4 px-6"
    @focus="setFocused(true)"
    @blur="setFocused(false)"
    @input="updateContent"
    :data-placeholder="placeholder"
  >
    {{ content || placeholder }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  content: String,
})
const emit = defineEmits(['updateContent'])

const placeholder =
  'Use this space to add more details about your site, a customer quote, or to talk about important news.'

const isFocused = ref(false)

const updateContent = (event) => {
  emit('updateContent', event.target.innerText)
}

const setFocused = (state) => {
  isFocused.value = state
}
</script>
