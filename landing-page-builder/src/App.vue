<template>
  <div>
    <nav class="p-4 bg-gray-200">
      <router-link to="/" class="mr-4">Dashboard</router-link>
      <router-link to="/builder">Landing Page Builder</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
