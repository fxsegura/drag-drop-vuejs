<template>
  <div class="w-full max-w-screen overflow-x-hidden h-full">
    <div class="flex flex-row py-4 px-4 text-white bg-[#363638] items-center">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 rounded"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </router-link>
      <h1 class="pl-16">Landing Page Builder</h1>
      <div class="flex-grow"></div>
      <div class="flex">
        <button @click="savePage" class="px-4 py-2 rounded bg-[#09C269] hover:bg-[#079B54]">
          Save
        </button>
      </div>
    </div>

    <div class="flex min-h-screen bg-[#1E1E1F]">
      <!-- Toolbar -->
      <BuilderToolbar @addBlock="addBlock" />

      <!-- Canvas -->
      <div class="flex-1 lg:px-64 items-center">
        <BuilderCanvas
          :elements="elements"
          @updateElement="updateElement"
          @deleteElement="deleteElement"
          @duplicateElement="duplicateElement"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BuilderToolbar from '@/components/BuilderToolbar.vue'
import BuilderCanvas from '@/components/BuilderCanvas.vue'

const elements = ref([])

const addBlock = (type) => {
  const newBlock = {
    id: Date.now(),
    type,
    position: { x: 100, y: 100 },
    size: { width: 200, height: 100 },
    content: type === 'text' ? 'Editable Text' : 'https://via.placeholder.com/150',
  }
  elements.value.push(newBlock)
}

const updateElement = (updatedElement) => {
  const index = elements.value.findIndex((el) => el.id === updatedElement.id)
  if (index !== -1) elements.value[index] = updatedElement
}

const deleteElement = (id) => {
  elements.value = elements.value.filter((el) => el.id !== id)
}

const duplicateElement = (id) => {
  const elementToDuplicate = elements.value.find((el) => el.id === id)
  if (elementToDuplicate) {
    const newElement = { ...elementToDuplicate, id: Date.now() }
    elements.value.push(newElement)
  }
}

const savePage = () => {
  console.log(JSON.stringify(elements.value, null, 2))
}
</script>
