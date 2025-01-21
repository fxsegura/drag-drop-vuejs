<template>
  <div class="flex flex-col h-screen">
    <BuilderCanvasHeader />

    <div class="flex-grow bg-white border overflow-auto p-4">
      <VueDraggable
        v-model="canvasElements"
        :group="{ name: 'blocks', pull: false, put: true }"
        item-key="id"
        :animation="150"
        handle=".handle"
        class="h-full space-y-4 flex flex-col gap-2 p-4 flex-1"
      >
        <div v-for="element in canvasElements" :key="element.id" class="relative group">
          <div
            class="absolute top-1/2 left-[-20px] transform -translate-y-1/2 hidden group-focus:flex group-hover:flex bg-gray-600 py-2 rounded"
          >
            <IconHandle class="handle cursor-move text-white" />
          </div>
          <div
            class="absolute right-1 top-[-15px] transform -translate-y-1/2 hidden group-focus:flex group-hover:flex bg-gray-600 p-2 rounded"
          >
            <div class="flex flex-row items-center space-x-2">
              <button @click="duplicateElement(element.id)" class="text-white">
                <IconCopy />
              </button>
              <button @click="deleteElement(element.id)" class="text-white">
                <IconClose />
              </button>
            </div>
          </div>

          <component
            :is="element.type === 'text' ? 'TextBlock' : 'ImageBlock'"
            :content="element.content"
            @updateContent="updateElementContent(element.id, $event)"
            :element="element"
            @deleteElement="deleteElement"
            @duplicateElement="duplicateElement"
            @updateElement="updateElementContent"
          />
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
import IconHandle from './icons/IconHandle.vue'
import IconClose from './icons/IconClose.vue'
import IconCopy from './icons/IconCopy.vue'

export default {
  components: {
    VueDraggable,
    TextBlock,
    ImageBlock,
    BuilderCanvasFooter,
    BuilderCanvasHeader,
    IconHandle,
    IconClose,
    IconCopy,
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
        const uniqueId = `${id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`
        const newElement = { ...element, id: uniqueId }

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
.cursor-move:hover {
  cursor: move;
}

button:hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}
</style>
