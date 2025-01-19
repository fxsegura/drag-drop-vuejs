<template>
  <table class="w-full table-auto">
    <tbody>
      <TableRow
        v-for="page in pages"
        :key="page.id"
        :page="page"
        @editPage="$emit('editPage', page.id)"
        @deletePage="$emit('deletePage', page.id)"
      />
    </tbody>
  </table>
</template>

<script setup>
import TableRow from './LandingPageTableRow.vue'

defineProps({
  pages: Array,
})
</script>
