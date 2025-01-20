<template>
  <div
    contenteditable
    class="focus:outline-none hover:outline-dashed hover:outline-2 hover:outline-green-500 focus:outline-green-500 focus:outline-2 bg-white text-black p-4 rounded"
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
  content: String, // Content prop for the editable block
})
const emit = defineEmits(['updateContent']) // Emit updated content

// Placeholder Text
const placeholder =
  'Use this space to add more details about your site, a customer quote, or to talk about important news.'

// Focused State
const isFocused = ref(false)

// Emit updated content on input
const updateContent = (event) => {
  emit('updateContent', event.target.innerText)
}

// Set focused state for styling
const setFocused = (state) => {
  isFocused.value = state
}
</script>
