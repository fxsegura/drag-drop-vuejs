<template>
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 p-2">Preview</th>
        <th class="border border-gray-300 p-2">Name</th>
        <th class="border border-gray-300 p-2">Actions</th>
      </tr>
    </thead>
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

<script>
import TableRow from './LandingPageTableRow.vue'

export default {
  name: 'LandingPageTable',
  props: {
    pages: Array,
  },
  components: {
    TableRow,
  },
}
</script>
