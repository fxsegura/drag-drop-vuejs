<template>
  <div class="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 py-8 md:py-12 lg:py-20">
    <div class="flex flex-col">
      <div class="flex flex-row">
        <h1
          class="text-xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-center md:text-left"
        >
          Landing Pages Dashboard
        </h1>
        <div class="flex-grow"></div>
        <div class="w-24 md:w-auto flex justify-center md:justify-end">
          <button
            @click="createNewPage"
            class="mb-4 px-4 py-2 bg-[#09C269] text-white rounded hover:bg-[#079B54] w-full md:w-auto"
          >
            Create
          </button>
        </div>
      </div>
      <div
        class="w-full bg-[#363638] overflow-y-auto md:max-h-[63vh] py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8"
      >
        <LandingPageTable :pages="pages" @editPage="editPage" @deletePage="deletePage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LandingPageTable from '../components/LandingPageTable.vue'
import { getLandingPages, deleteLandingPage } from '@/api/landingPageApi'

const router = useRouter()
const pages = ref([])

const fetchPages = async () => {
  try {
    const response = await getLandingPages()
    pages.value = response
    console.log('Fetched landing pages:', pages.value)
  } catch (error) {
    console.error('Failed to fetch landing pages:', error)
  }
}

fetchPages()

const createNewPage = () => {
  router.push({ name: 'Builder' })
}

const editPage = (pageId) => {
  router.push({ name: 'Builder', query: { id: pageId } })
}

const deletePage = async (pageId) => {
  try {
    await deleteLandingPage(pageId)
    pages.value = pages.value.filter((page) => page.id !== pageId)
    console.log('Deleted landing page:', pageId)
  } catch (error) {
    console.error('Failed to delete landing page:', error)
  }
}
</script>
