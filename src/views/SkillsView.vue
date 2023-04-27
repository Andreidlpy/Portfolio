<template>
  <section id="skills" class="min-h-screen bg-gray-100 sm:pt-32 px-5" > 
       <div class="animate-fade">

         <div class="text-center text-2xl sm:text-4xl  text-[#3f3d56] pb-10 font-krub font-semibold uppercase"><span>{{  t('skills') }}</span></div>
         <div class="grid mx-auto  grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 gap-5  max-w-[1200px]">
           <div v-for="(skill, index) in skills" :key="index"  @mouseleave="toggleDetails(index)"  @mouseenter="toggleDetails(index)"  class="bg-gray-100 transition-all duration-700 group relative items-center justify-center overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-black/3" >
           
            
            <div class="max-w-full min-h-[150px] sm:min-h-[220px] md:max-w-[400px] md:min-h-[220px] overflow-hidden  flex flex-col justify-center items-center transition-all duration-700 py-2  " > 
              <img loading="lazy"  class="duration-700 max-h-[50px] md:max-h-[100px] md:max-w-[150px] group-hover:-translate-y-[50%] md:group-hover:-translate-y-[80%] group-hover:opacity-0"
                  :class="[skill.showDetails ? '-translate-y-6' : '']" 
                  :src="getUrl(skill.svg)">
                </div>
                <div class="absolute inset-0"></div>
                <div class="absolute inset-0  flex flex-col items-center justify-center  text-center translate-y-[90%] group-hover:translate-y-0 duration-700 transition-all ">
                  <h1 class="text-xl md:text-2xl font-bold text-black font-krub lg:hidden">{{skill.name}}</h1>
                  <p  class="text-[16px] font-krub  hidden  lg:block text-black  mb-3  transition-opacity duration-700 md:group-hover:opacity-100 px-4 text-justify">{{ skill.description }}</p>
                </div>
                
                <!-- group-hover:from-[#3f3d56]/70 group-hover:via-[#3f3d56]/60 group-hover:to-[#3f3d56]/70 bg-gradient-to-b from-transparent via-transparent  -->
              </div>
            </div>
          </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useIcons from '@/composables/useIcons'
import { useI18n } from "vue-i18n";
const {  t } =useI18n()
const { getUrl } = useIcons()

interface Skill {
  name: string;
  description: string;
  showDetails: boolean;
  svg?: string
}

const skills = ref<Skill[]>([
  {
    name: 'Vue.js',
    description: 'Vue.js es un framework de JavaScript de código abierto que se utiliza para crear aplicaciones web interactivas y dinámicas del lado del cliente.',
    showDetails: false,
    svg: 'vue.svg',
  },
  {
    name: 'Javascript',
    description: 'JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, diseñado para crear aplicaciones web interactivas y dinámicas.',
    showDetails: false,
    svg: 'js.svg',
  },
  {
    name: 'HTML5',
    description: 'HTML5 es la última versión del lenguaje de marcado de hipertexto (HTML) utilizado para crear páginas web. ',
    showDetails: false,
    svg: 'html.svg',
  },
  {
    name: 'CSS3',
    description: 'CSS3 es la última versión de la hoja de estilos en cascada (CSS) utilizada en la creación de páginas web.',
    showDetails: false,
    svg: 'css.svg',
  },
  {
    name: 'Node.js',
    description: 'Node.js es un entorno de tiempo de ejecución de JavaScript del lado del servidor que permite a los desarrolladores construir aplicaciones web y de red escalables y de alta velocidad.',
    showDetails: false,
    svg: 'node.svg',
  },
  {
    name: 'Jira',
    description: 'Jira es una herramienta de gestión de proyectos y seguimiento de problemas desarrollada por Atlassian.',
    showDetails: false,
    svg: 'jira.svg',
  },
  {
    name: 'GitHub',
    description: 'GitHub es una plataforma de alojamiento de código fuente y herramienta de colaboración para desarrolladores.',
    showDetails: false,
    svg: 'github.svg',
  },
  {
    name: 'Tailwindcss',
    description: 'Tailwind CSS es un framework de CSS de código abierto que permite a los desarrolladores crear diseños y estilos de manera rápida y eficiente.',
    showDetails: false,
    svg: 'tailwind-css.svg',
  },
]);

const toggleDetails = ( index : number ) => {
  skills.value[index].showDetails = !skills.value[index].showDetails
}

</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.chart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.chart-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.chart {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.bar {
  width: calc(100% / 6 - 8px);
  background-color: #378ad8;
  border-radius: 4px 4px 0 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: height 0.5s ease;
}

.bar-label {
  display: block;
  padding: 8px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: bottom 0.5s ease;
}

.bar:hover {
  height: 100%;
}

.bar:hover .bar-label {
  bottom: -60px;
}
.contenedor_skills {
  width: 400px;
  height: 400px;
  margin: 40px auto;
  border: 1px solid #000;
  display:grid;
  grid-template-columns:30px;
  grid-template-rows:30px;
  place-content: center;
  border-radius: 50%;
}
.item_skill {
  grid-area:1/1;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  animation: spin 12s var(--d,0s) linear infinite; /* duration 7 12s, numbor of item = 6 so a delay of 12/6 = 2s */
  transform:rotate(0) translate(100px) rotate(0); 
}
@keyframes spin {
  100% {
    transform:rotate(1turn) translate(100px) rotate(-1turn);
  }
}
</style>