<template>
  <div
    class="relative space-y-2 h-64 border overflow-hidden focus:outline-none hover:outline-dashed hover:outline-2 hover:outline-green-500 focus:outline-green-500 focus:outline-2"
    @focus="setFocused(true)"
    @blur="setFocused(false)"
  >
    <!-- Placeholder or Selected Image -->
    <img :src="content || placeholderImage" alt="Image Block" class="w-full h-full object-cover" />

    <!-- Overlay Image Picker -->
    <div
      class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center transition-transform transform translate-y-full hover:translate-y-0"
    >
      <div class="flex justify-center gap-4">
        <img
          v-for="image in images"
          :key="image"
          :src="image"
          @click="updateContent(image)"
          class="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-green-500 rounded"
          :class="{ 'border-green-500': image === content }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  content: String,
})

const emit = defineEmits(['updateContent'])

const placeholderImage = 'src/assets/placeholderimage.png'

const images = ['src/assets/mailerlite-logo.png', 'src/assets/vetimage.jpg', 'src/assets/cat.jpg']

const updateContent = (image) => {
  emit('updateContent', { id, content: image })
}
</script>

<style scoped>
div > div {
  transition: transform 0.3s ease-in-out;
}

div:hover > div {
  transform: translateY(0);
}

img:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
</style>
