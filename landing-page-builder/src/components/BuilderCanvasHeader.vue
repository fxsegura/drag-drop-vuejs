<template>
  <header class="bg-white w-full text-white py-4 px-8">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Company Logo -->
      <div class="flex justify-center items-center flex-row space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-green-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
        <p class="text-[#363638] font-bold">Company</p>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <a href="/" class="text-gray-300 hover:text-[#363638]">Home</a>
        <a href="/about" class="text-gray-300 hover:text-[#363638]">About Us</a>
        <a href="/services" class="text-gray-300 hover:text-[#363638]">Services</a>
        <a href="/contact" class="text-gray-300 hover:text-[#363638]">Contact</a>
      </nav>

      <!-- Contact Button (Desktop) -->
      <div class="hidden md:block">
        <a href="/contact" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Contact Us
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button
          id="mobile-menu-toggle"
          @click="mobileMenuToggle"
          class="text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div id="mobile-menu" class="md:hidden flex-col items-center space-y-4 bg-gray-800 py-4 hidden">
      <a href="/" class="text-gray-300 hover:text-white">Home</a>
      <a href="/about" class="text-gray-300 hover:text-white">About</a>
      <a href="/services" class="text-gray-300 hover:text-white">Services</a>
      <a href="/contact" class="text-gray-300 hover:text-white">Contact</a>
      <a href="/contact" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Contact Us
      </a>
    </div>
  </header>
</template>

<script setup>
const mobileMenuToggle = () => {
  const menu = document.getElementById('mobile-menu')
  menu.classList.toggle('hidden')
}
</script>
