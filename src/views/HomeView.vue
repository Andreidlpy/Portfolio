<template>
  <section id="home" class="px-5 bg-gray-100">
    <div class="min-h-screen flex items-center justify-center  font-krub " >
      <div class="container  py-12 flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto ">
        <div class="animate-fade-in  md:pr-8">
          <h1 ref="title" class="text-3xl md:text-5xl font-bold text-gray-800 mb-4 self-start capitalize ">{{ t('hello') }}! {{t('im')}} Andrei.</h1>
          <h2 class="text-base md:text-2xl text-gray-700 self-start font-semibold uppercase ">FRONT END Developer</h2>
          <p class="text-base md:text-lg dm:text-xl py-2 text-gray-700 text-justify font-normal ">"{{ t('phrase1') }}".</p>
          <button class="  text-sm md:text-lg flex items-center gap-5 text-white my-3 px-3 py-2 rounded-lg bg-[#3f3d56]  hover:shadow-lg hover:shadow-[#3f3d56]/50 duration-500 ease-linear capitalize"
            @click="downloadPdf" >{{t('download')}} CV 
            <div><img loading="lazy"  src="@/assets/icons/download-install-line-icon.svg" class="w-4 md:w-5 h-5" alt=""></div>
          </button>
        </div>
        <div class="w-3/4 md:w-1/2  flex items-center justify-center animate-fade-in ">
          <my-svg class="h-52 sm:h-96 "> </my-svg>
        </div>
      </div>
    </div>
  </section>
  <SkillsViewVue></SkillsViewVue>
  <ProyectsView></ProyectsView>
  <ContactoView></ContactoView>
</template>



<script setup lang="ts">
import MySvg from '../assets/icons/DeveloperSvg.vue'
import  SkillsViewVue from './SkillsView.vue';
import ProyectsView from './ProyectsView.vue';
import { useI18n  } from 'vue-i18n'
const { t } =useI18n()
import { downloadPdf } from '../assets/curriculum/downloadPDF';
import ContactoView from './ContactoView.vue';





</script>
<style>
.animate-fade-in {
  animation: fadeIn 1s;
}
  
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


</style>
