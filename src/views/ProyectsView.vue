<template>
    <section id="projects" class="min-h-screen bg-gray-100 px-5" > 
      <div class="animate-fade">
        <div class="text-center text-2xl sm:text-4xl font-semibold text-[#3f3d56] py-10 font-krub uppercase"> {{ t('projects') }}</div>
        <div class="grid mx-auto  grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5  max-w-[1200px]">
        <div v-for="(proyect, index) in proyects" :key="index" 
          class="px-4 mb-4 border-2 border-[#3f3d56] shadow-xl transition-all duration-300 rounded-xl hover:scale-110" 
          @mouseenter="toggleDetails(index)">
        <div  class="overflow-hidden  flex flex-col justify-start items-center transition-all duration-200 py-5 " > 
          <div class="font-bold font-krub uppercase text-black text-base py-3 md:text-xl">{{ proyect.name }}</div> 
          <div class=" duration-300 transition-all">
            <img loading="lazy" v-if="proyect.img" :src="proyect.img" alt="" srcset="" class="w-45 h-32 pb-5 ">
            <img  loading="lazy" v-else :src="getUrl('ecommerce-website-icon.svg', 'icons')" class="w-40 h-32 pb-5 ">
          </div>
             <div class="flex justify-between items-center pb-5 overflow-x-auto gap-3 md:gap-5">
               <img loading="lazy" v-for="apps in proyect?.apps" class="h-10 w-10 md:w-10 md:h-10" :src="getUrl(apps)" alt="" srcset="">
              </div>
              <div class="grid grid-cols-2 items-center gap-5">
                <RouterLink to="">
                  <img loading="lazy" src="@/assets/skillsIcons/github.svg" alt="" srcset=""  class="w-8 md:w-10">
                </RouterLink>
                <button class="bg-black px-2 py-1 text-white rounded-lg text-base">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
</template>

<script setup lang="ts">
import useIcons from '@/composables/useIcons';
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
const {  t } =useI18n()

const proyects = ref([
  { name: 'Ecommerce-App', changeState: false, svg: 'ecommerce-website-icon', githubLink: '', demoLink: '', apps: ['vue.svg', 'tailwind-css.svg', 'node.svg'] },
  { 
    name: 'Rick and Morty ',
    changeState: false, 
    svg: 'ecommerce-website-icon', 
    githubLink: '',
    demoLink: '', 
    img: 'https://res.cloudinary.com/andreicloudimg/image/upload/v1682465214/RickAndMortyPage_tnrvbw.jpg',
    apps: ['vue.svg', 'tailwind-css.svg']
  },
])


const { getUrl }= useIcons();

const toggleDetails= ( index : number) => {
  proyects.value[index].changeState = !proyects.value[index].changeState
}
</script>

<style scoped>

</style>