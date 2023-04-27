<template>
      <section id="contact" class="bg-gray-100 ">
          <div class="min-h-[500px] mx-auto max-w-[800px] flex flex-col justify-center items-center gap-5 font-krub px-5 lg:px-0 animate-fade">
              <div class="text-[#3f3d56] text-4xl font-bold uppercase">{{t('contact')}}</div>
              <p class="text-base md:text-lg dm:text-xl py-2 text-gray-700 text-justify font-semibold">Gracias por visitar mi página web. Si necesita ponerse en contacto conmigo, estaré encantado de ayudarle. Puede hacerlo a través de los siguientes enlaces:</p>
              <div class="flex items-center justify-center space-x-4 w-full">
                  <a href = "mailto:dyausinoh@hotmail.com?subject = Feedback&body = Message" class="hover:animate-wiggle">
                      <img src="../assets/icons/email-round-solid-icon.svg"  class="w-8 " alt="send-email" >
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/andrei-de-la-puente-yaus%C3%ADn-452a38224">
                      <img src="../assets/icons/linkedin-round-icon.svg"  class="w-8 " alt="send-email" >
                  </a>
              </div>
          </div>
      </section>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from "vue-i18n";
  const {  t } =useI18n()
  
  </script>
  
  <style scoped>
  
  </style>