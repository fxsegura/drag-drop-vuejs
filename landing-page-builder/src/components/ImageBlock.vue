<template>
  <div class="space-y-2">
    <img :src="content" alt="Image" class="w-full h-auto rounded" />
    <select @change="updateContent" class="w-full border p-2 rounded">
      <option value="https://via.placeholder.com/150">Image 1</option>
      <option value="https://via.placeholder.com/200">Image 2</option>
      <option value="https://via.placeholder.com/250">Image 3</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  content: String,
})
const emit = defineEmits(['updateContent'])

// Emit Updates on Dropdown Change
const updateContent = (event) => {
  emit('updateContent', event.target.value)
}
</script>
