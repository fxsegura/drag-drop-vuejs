<template>
  <tr class="border-y border-gray-600 border-collapse hover:bg-[#2D2D2E]">
    <td class="p-4">
      <div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
        <img :src="page.preview" alt="Preview" class="w-full md:w-96 md:h-96 rounded" />
        <div
          class="flex flex-col space-y-4 md:space-y-0 md:justify-between md:flex-row md:items-center w-full"
        >
          <p class="text-white text-xl md:text-2xl text-center md:text-left">
            {{ page.name }}
          </p>
          <div
            class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 text-center md:text-right"
          >
            <button
              @click="$emit('editPage')"
              class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Edit
            </button>
            <button
              @click="$emit('deletePage')"
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  page: Object,
})
</script>
