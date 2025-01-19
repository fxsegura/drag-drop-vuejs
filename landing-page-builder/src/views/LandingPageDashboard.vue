<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Landing Pages Dashboard</h1>
    <button
      @click="createNewPage"
      class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Create New Page
    </button>
    <LandingPageTable :pages="pages" @editPage="editPage" @deletePage="deletePage" />
  </div>
</template>

<script>
import LandingPageTable from '../components/LandingPageTable.vue'

export default {
  name: 'LandingPageDashboard',
  components: {
    LandingPageTable,
  },
  data() {
    return {
      pages: [
        {
          id: 1,
          name: 'Sample Page 1',
          preview: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          name: 'Sample Page 2',
          preview: 'https://via.placeholder.com/150',
        },
      ],
    }
  },
  methods: {
    createNewPage() {
      this.$router.push({ name: 'Builder' })
    },
    editPage(pageId) {
      this.$router.push({ name: 'Builder', query: { id: pageId } })
    },
    deletePage(pageId) {
      this.pages = this.pages.filter((page) => page.id !== pageId)
    },
  },
}
</script>
