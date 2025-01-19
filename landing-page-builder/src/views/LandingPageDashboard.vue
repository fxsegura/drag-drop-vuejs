<template>
  <div class="w-full p-56">
    <div class="flex flex-col">
      <h1 class="text-2xl font-bold mb-4">Landing Pages Dashboard</h1>
      <div class="flex justify-end">
        <button
          @click="createNewPage"
          class="mb-4 px-4 py-2 bg-[#09C269] text-white rounded hover:bg-blue-600"
        >
          Create New Page
        </button>
      </div>
      <div class="w-full bg-[#363638]">
        <LandingPageTable :pages="pages" @editPage="editPage" @deletePage="deletePage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LandingPageTable from '../components/LandingPageTable.vue'

const router = useRouter()
const pages = ref([
  {
    id: 1,
    name: 'Sample Page 1',
    preview: 'https://dummyimage.com/600x400/000/fff&text=test+image',
  },
  {
    id: 2,
    name: 'Sample Page 2',
    preview: 'https://dummyimage.com/600x400/000/fff&text=test+image',
  },
])

const createNewPage = () => {
  router.push({ name: 'Builder' })
}

const editPage = (pageId) => {
  router.push({ name: 'Builder', query: { id: pageId } })
}

const deletePage = (pageId) => {
  pages.value = pages.value.filter((page) => page.id !== pageId)
}
</script>
