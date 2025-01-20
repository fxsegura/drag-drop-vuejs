<template>
  <div class="flex flex-col h-screen">
    <!-- Canvas Header -->
    <BuilderCanvasHeader />

    <!-- Drag-and-Drop Canvas -->
    <div class="flex-grow bg-white border overflow-auto p-4">
      <VueDraggable
        v-model="canvasElements"
        :group="{ name: 'blocks', pull: false, put: true }"
        item-key="id"
        :ghost-class="'drop-preview'"
        :animation="200"
        class="h-full space-y-4"
      >
        <template #item="{ element }">
          <DraggableElement
            :element="element"
            @deleteElement="deleteElement"
            @duplicateElement="duplicateElement"
            @updateElement="updateElement"
          />
        </template>
      </VueDraggable>
    </div>

    <!-- Canvas Footer -->
    <BuilderCanvasFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import DraggableElement from './DraggableElement.vue'
import BuilderCanvasHeader from './BuilderCanvasHeader.vue'
import BuilderCanvasFooter from './BuilderCanvasFooter.vue'

// Canvas elements
const canvasElements = ref([])

// Methods for element management
const deleteElement = (id) => {
  canvasElements.value = canvasElements.value.filter((el) => el.id !== id)
}

const duplicateElement = (element) => {
  canvasElements.value.push({ ...element, id: Date.now() })
}

const updateElement = (updatedElement) => {
  const index = canvasElements.value.findIndex((el) => el.id === updatedElement.id)
  if (index !== -1) {
    canvasElements.value[index] = { ...updatedElement }
  }
}
</script>

<style scoped>
.drop-preview {
  border: 2px dashed #4caf50;
  background-color: rgba(76, 175, 80, 0.1);
}
</style>
