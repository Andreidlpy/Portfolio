<script setup lang="ts">
import useDarkMode from './composables/useDarkMode';
import HomeLayout from './layouts/HomeLayout.vue';
useDarkMode()
</script>

<template>
      <HomeLayout></HomeLayout>
</template>

<style scoped>

</style>
