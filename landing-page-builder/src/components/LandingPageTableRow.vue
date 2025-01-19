<template>
  <tr>
    <td class="border border-gray-300 p-2">
      <img :src="page.preview" alt="Preview" class="w-16 h-16 rounded" />
    </td>
    <td class="border border-gray-300 p-2">{{ page.name }}</td>
    <td class="border border-gray-300 p-2">
      <button
        @click="$emit('editPage')"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Edit
      </button>
      <button
        @click="$emit('deletePage')"
        class="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'LandingPageTableRow',
  props: {
    page: Object,
  },
}
</script>
