<template>
  <div class="flex flex-col h-screen">
    <BuilderCanvasHeader />

    <div class="flex-grow bg-white border overflow-auto p-4">
      <VueDraggable
        v-model="canvasElements"
        :group="{ name: 'blocks', pull: false, put: true }"
        item-key="id"
        :ghost-class="'drop-preview'"
        :animation="150"
        class="h-full space-y-4 flex flex-col gap-2 p-4 flex-1 rounded"
      >
        <div
          v-for="element in canvasElements"
          :key="element.id"
          class="relative cursor-move shadow-md"
        >
          <component
            :is="element.type === 'text' ? 'TextBlock' : 'ImageBlock'"
            :content="element.content"
            @updateContent="updateElementContent(element.id, $event)"
            :element="element"
            @deleteElement="deleteElement"
            @duplicateElement="duplicateElement"
            @updateElement="updateElementContent"
          />
          <div class="absolute top-2 right-2">
            <button @click="duplicateElement(element.id)" class="text-blue-500">Duplicate</button>
            <button @click="deleteElement(element.id)" class="text-red-500 ml-2">Delete</button>
          </div>
        </div>
      </VueDraggable>
    </div>

    <BuilderCanvasFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import BuilderCanvasHeader from './BuilderCanvasHeader.vue'
import BuilderCanvasFooter from './BuilderCanvasFooter.vue'
import TextBlock from './TextBlock.vue'
import ImageBlock from './ImageBlock.vue'

export default {
  components: {
    VueDraggable,
    TextBlock,
    ImageBlock,
    BuilderCanvasFooter,
    BuilderCanvasHeader,
  },
  setup() {
    const canvasElements = ref([])

    const updateElementContent = (id, newContent) => {
      const element = canvasElements.value.find((el) => el.id === id)
      if (element) element.content = newContent
    }

    const duplicateElement = (id) => {
      const element = canvasElements.value.find((el) => el.id === id)
      if (element) {
        const newElement = { ...element, id: `${id}-copy` }
        canvasElements.value.push(newElement)
      }
    }

    const deleteElement = (id) => {
      canvasElements.value = canvasElements.value.filter((el) => el.id !== id)
    }

    return {
      canvasElements,
      updateElementContent,
      duplicateElement,
      deleteElement,
    }
  },
}
</script>

<style scoped>
.drop-preview {
  border: 2px dashed #09c269;
  background-color: rgba(76, 175, 80, 0.1);
}
</style>
