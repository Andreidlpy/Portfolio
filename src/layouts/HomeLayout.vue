<template>
    <div >
      <Navbar :style="{ height: navbarHeight + 'px', }"></Navbar>
      <div>
        <RouterView ></RouterView>
      </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar.vue';

import { onBeforeUnmount, onMounted, ref } from 'vue';

const  navbarHeight = ref(80) 
const  contentHeight = ref(0) 
const calculateContentHeight = () => {
    contentHeight.value = window.innerHeight - navbarHeight.value;
}

onMounted( () => {
  window.addEventListener('resize', calculateContentHeight);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateContentHeight);
})


</script>

<style >


</style>

