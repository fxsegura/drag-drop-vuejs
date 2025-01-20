<template>
  <div
    contenteditable
    class="focus:outline-none border p-2 bg-gray-50 rounded"
    @input="updateContent"
  >
    {{ content }}
  </div>
</template>

<script setup>
defineProps({
  content: String,
})
const emit = defineEmits(['updateContent'])

// Emit Updates on Text Input
const updateContent = (event) => {
  emit('updateContent', event.target.innerText)
}
</script>
