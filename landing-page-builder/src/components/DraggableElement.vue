<template>
  <div
    class="relative border p-2 bg-gray-100 shadow-lg"
    :style="{
      top: element.position?.y + 'px',
      left: element.position?.x + 'px',
      width: element.size?.width + 'px',
      height: element.size?.height + 'px',
    }"
    @click="showMenu = !showMenu"
  >
    <!-- Render TextBlock or ImageBlock -->
    <component
      :is="element.type === 'text' ? 'TextBlock' : 'ImageBlock'"
      :content="element.content"
      @updateContent="updateContent"
    />

    <!-- Context Menu -->
    <div
      v-if="showMenu"
      class="absolute top-0 right-0 bg-white border p-2 rounded shadow z-10 space-x-2"
    >
      <button @click="$emit('deleteElement', element.id)" class="text-red-500">Delete</button>
      <button @click="$emit('duplicateElement', element)" class="text-blue-500">Duplicate</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props and Emits
const props = defineProps({
  element: Object,
})
const emit = defineEmits(['updateElement', 'deleteElement', 'duplicateElement'])

// Reactive State
const showMenu = ref(false)

// Update Content Method
const updateContent = (newContent) => {
  const updatedElement = { ...props.element, content: newContent }
  emit('updateElement', updatedElement)
}
</script>
