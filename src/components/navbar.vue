<template>
  <nav class="bg-[#000000] w-full fixed animate-fade-in z-20 font-krub " :class="{ '-translate-y-full': hideNav }">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 ">
        <RouterLink to="/" class=" duration-200">
            <button  v-if="showLanguage" @click="changeLanguage('en')">
              <img class="w-10 " src="@/assets/icons/peru-flag.svg" alt="" srcset="">
            </button>
            <button  v-else @click="changeLanguage('es')">
              <img class="w-10 " src="@/assets/icons/united-states-flag.svg" alt="" srcset="">
            </button>
        </RouterLink>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center">
            
            <template v-for="link in links">
              <div @click="scrollToSection(link.name)" 
              class=" cursor-pointer px-3 py-2 text-lg font-semibold  text-white  hover:text-white hover:underline duration-500 focus:underline capitalize">
              {{ t(link.name) }}
            </div>
            </template>
          </div>
        </div>
        <menu-icon @menuBar="useMenuBar"/>
      </div>
    </div>
    <Transition name="expand">
      <div v-if="menu" 
      class="
      md:hidden
      bg-gray-100 
      dark:bg-black 
      dark:text-white 
      dark:bg-opacity-0
      ease-linear 
      font-bold 
      mobile-menu 
      text-center 
      tracking-wide 
      uppercase 
      w-full"  >
      <RouterLink v-for="{ name } of links"  :key="name" to="" 
        @click=scrollToSection(name)
        class="text-normal 
        bg-opacity-80
        block 
        border-white
        dark:bg-black 
        dark:bg-opacity-80
        dark:hover:bg-black
        decoration-2
        decoration-stone-500
        duration-100
        ease-in
        hover:bg-gray-200  
        hover:underline
        pb-3 
        pt-2 
        px-4 
        underline-offset-8
        ">
        <div
          class="duration-500 animate-fade"
          >
          {{name}}
        </div>
      </RouterLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useI18n } from "vue-i18n";

import menuIcon from './menu-icon.vue';

const hideNav = ref(false);
let scrollPosition = 0;
const { locale, t } =useI18n()
const showLanguage = ref( true )

const links = ref([
  { name: 'home'},
  { name: 'skills'},
  { name: 'projects'},
  { name: 'contact'},
])

const menu = ref( false )

const useMenuBar = ( ) => {
    menu.value = !menu.value
}

const changeLanguage = ( value: string ) => {
  showLanguage.value = !showLanguage.value
  locale.value = value;
};


const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition === 0) return  hideNav.value = false;
    
  
  if (currentScrollPosition < scrollPosition) {
    hideNav.value = false;
  } else {
    hideNav.value = true;
  }
  scrollPosition = currentScrollPosition;
};
const scrollToSection = ( sectionId : string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });

  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>

nav{
  transition: transform 0.4s linear;
}

svg {
  fill: currentColor;
}
option {
  color: #374151;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 0.5rem;
}
/* Estilo de las opciones seleccionadas */
option:checked {
  background-color: #2563eb;
  color: #fff;
}

</style>