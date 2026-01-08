<script setup>
import { Button, Card } from 'primevue';
import { onMounted, ref } from 'vue'
import marga from './assets/img/marga.png';
import fightingGame from './assets/img/fighting-game.png';
import koopaTroopa from './assets/img/koopa-troopa.png';
import CulturaEnTerritorio from './assets/img/cultura-territorio.png';

const showMarga = ref(false);
const showFrontend = ref(true);

let scrollTimeout;

onMounted(() => {
    const lightCursor = document.querySelector('.light-cursor')
    
    document.addEventListener('mousemove', (e) => {
        if (lightCursor) {
            lightCursor.style.transform = `translate(${e.clientX - 500}px, ${e.clientY - 500}px)`
        }
    });
    
    const scrollContainer = document.querySelector('.cont-sections');
    if (!scrollContainer) return;
    
    scrollContainer.addEventListener('scroll', () => {
        showMarga.value = true;
        
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            showMarga.value = false;
        }, 500);
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll('.button-header');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.firstChild.classList.remove('active')); 
                btn.firstChild.classList.add('active'); 
            });
        });
    });
    
})

const goToLink = (link) => {
  window.open(link, '_blank')
}


const experience = [
    {
        title: 'Ministerio de Justicia y DDHH',
        role: 'Frontend Developer',
        date: '2024 Nov - Presente',
        resume: 'Diseño y desarrollo del frontend de un sistema de empadronamiento de personas privadas de su libertad. Implementación de funcionalidades de carga de datos, captura de huellas y fotografías, utilizando Vue.js y Pinia. Trabajo colaborativo con equipos técnicos del Servicio Penitenciario Federal.',
        tech: ['Javascript', 'Vue js', 'Pinia']
    },
    {
        title: 'Pucara',
        role: 'Frontend Developer',
        date: '2025 Ago - Presente',
        resume: 'Desarrollo de interfaces frontend para una POC orientada a la seguridad de sistemas basados en modelos de IA. El producto funciona como un firewall para IA, detectando y previniendo prompts maliciosos o solicitudes indebidas. Implementación de dos módulos CRUD consumiendo una API propia, trabajando en conjunto con el equipo backend y sobre un frontend base desarrollado por un proveedor externo.',
        tech: ['Next js', 'Typescript']
    },
    {
        title: 'Instituto Cultural de la Prov. de Buenos Aires',
        role: 'Design UX/UI · FullStack Developer',
        date: '2025 Ene - Presente',
        resume: 'Diseño y desarrollo de un sistema de gestión para el programa Sembrar Cultura. Implementación de una ventanilla virtual con Symfony, Twig y PHP, permitiendo la inscripción y asistencia técnica a espacios culturales. Participé en la creación de la interfaz con foco en accesibilidad y funcionalidad.',
        tech: ['Figma', 'Javascript', 'Symfony', 'Php', 'Twig' ]
    },
    {
        title: 'Presidencia de la Nacion',
        role: 'Fullstack Developer',
        date: '2021 Ago - 2024',
        resume: 'Desarrollo backend con Python y Django Rest Framework, incluyendo operaciones CRUD, validaciones de endpoints y configuración de entornos con Docker y bases de datos en PostgreSQL.Participación activa en el frontend con React.js, creando custom hooks para reutilización de lógica, aplicando Redux para estado global, y React Router Dom para navegación. Uso de Bootstrap y Material UI para estilos consistentes.',
        tech: ['Javascript', 'React js', 'Python', 'Docker']
    }
]

const projects = [
    {
        title: 'Juego de combate',
        img: fightingGame,
        link: 'https://fighting-game-tau.vercel.app/?fbclid=PAQ0xDSwL84GJleHRuA2FlbQIxMQABp1PKjk_1MV8TD0MIf8mtD3U6Zg2yAFBmAblR-o2x105jilK4zmJj9p_OSckJ_aem_udHfTn2CQqWv55CIOHIm8g',
        resume: 'Juego de pelea 2D desarrollado con HTML Canvas y JavaScript. Los personajes, decorados con sprites personalizados y recursos de itch.io, se enfrentan en un combate uno a uno: quien pierde toda su vida, pierde el juego. Incluye un temporizador que, al agotarse sin un ganador, determina un empate. El proyecto combina lógica de combate, animaciones y diseño visual simple pero efectivo.',
        tech: ['Javascript', 'HTML']
    },
    {
        title: 'Diseño Responsive UX/UI de tienda',
        img: koopaTroopa,
        link: 'https://www.figma.com/design/wAYIiQmHy2OESYbJtJ7bXs/Untitled?node-id=0-1&t=AY55izayE46DyG8L-1',
        resume: 'Un cliente me encargó el diseño UX/UI en Figma de una tienda de figuras de colección de videojuegos, anime y más. Fue mi primer acercamiento a Figma, donde aprendí la herramienta desde cero y logré un diseño visual atractivo y funcional.',
        tech: ['Figma']
    
    },
    {
        title: 'Diseño Web UX/UI Prov. Cultura',
        img: CulturaEnTerritorio,
        link: 'https://www.figma.com/design/xWqEtqumSdnb7QVX6BokhB/Untitled?node-id=30-396&t=DH1P6zfoeDERcrCS-1',
        resume: 'Diseño UX/UI realizado en Figma para el Instituto Cultural de la Provincia de Buenos Aires. Busqué romper con la estética tradicional de los sitios institucionales, dándole más personalidad al diseño sin salir del esquema de colores y lineamientos oficiales.',
        tech: ['Figma']
    },
]


</script>

<template>
    <div class="flex flex-wrap w-full h-screen">
        <div class="light-cursor"></div>
        <section class="section-header flex flex-col justify-between w-[30%] ml-[15%] h-screen fixed py-15">
            <div class="flex flex-col p-4">
                <h1>Sol Santopietro</h1>
                <h2>Full stack developer</h2>
                <h3 class="mini-info w-[80%] mt-5">Desarrollo experiencias digitales accesibles, precisas y responsivas para la web, combinando diseño y desarrollo frontend y backend.</h3>
                <div class="cont-buttons flex flex-col justify-start mt-5">
                    <a href="#about" class="button-header flex items-center"><div class="w-[30px] h-[1px] bg-[#fff]"></div><p>about</p></a>
                    <a href="#foryou" class="button-header flex items-center"><div class="w-[30px] h-[1px] bg-[#fff]"></div><p>para vos</p></a>
                    <a href="#experience" class="button-header flex items-center"><div class="w-[30px] h-[1px] bg-[#fff]"></div><p>experiencia</p></a>
                    <a href="#project" class="button-header flex items-center"><div class="w-[30px] h-[1px] bg-[#fff]"></div><p>proyectos</p></a>
                </div>
            </div>
            
            <div class="flex flex-col p-4">
                <div class="flex">
                    <a href="https://github.com/Solsantopietro">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-7 w-7" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sol-santopietro-a6176b196/" class="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                    </a>
                </div>
                <div>
                    <p class="text-marga mt-5">Scrollea para ver a Marga</p>
                </div>
            </div>
        </section>
        <div class="cont-sections flex flex-col w-[70%] ml-[40%] overflow-y-scroll h-screen pb-5 relative pl-8">
            <section class="section-about flex flex-col w-[70%] pt-15" id="about">
                <h1 class="title hidden">about</h1>
                <p class="mt-5">Soy una persona que encontro su <strong>pasión en el trabajo</strong> y por suerte, a edad temprana, me gusta trabajar en equipo, disfruto mucho de hacer diseños UX/UI con personalidad, pero aun mas el desarrollar interfaces accesibles, pixel-perfect y responsive. Me enfoco en crear interfaces cómodas, atractivas y funcionales para el usuario.</p>
                <p class="mt-5">Continuo <strong>capacitándome permanentemente para mejorar mi potencial en informatica</strong> y siempre busco entornos donde haya desafíos que me permitan seguir aprendiendo. Actualmente trabajo en el Ministerio de Justicia y DDHH en La Plata, donde tuve la oportunidad de incorporar Vue.js a mi stack. Aca me enfoco en garantizar que los proyectos tengan un <strong>codigo eficiente y limpio</strong>, y por sobre todas las cosas una <strong>experiencia de usuario fluida y accesible</strong>.</p>
                <p class="mt-5">En mi trabajo anterior, tuve la oportunidad de trabajar con React.js en el frontend y Python con Django en el backend, lo que me permitió sentirme cómoda presentándome como <strong>desarrolladora Fullstack</strong>. Participé en el desarrollo de proyectos de gran escala, dockerizados, y aprendí a trabajar de forma colaborativa, manteniendo mis ramas actualizadas a medida que avanzaba en las tareas.</p>
                <p class="mt-5"><strong>En mi tiempo libre</strong> intento leer un poco para recuperar parte del cerebro quemado por el trabajo. Me gusta relajarme en el sillón con mi michi, jugar a la Play con mi pareja y salir a pasear con mi perra Marga.</p>
            </section>
            <section class="section-foryou flex flex-col w-[70%] pt-15" id="foryou">
                <h1 class="title hidden">para vos</h1>
                
                <div class="flex items-center justify-between">
                    <h2 class="pl-4">Si estas buscando una</h2> 
                    <div class="flex items-center my-5">
                        <button class="button-search" :class="{ 'active-role': showFrontend }" @click="showFrontend = true">Desarrolladora</button>
                        <button class="button-search pl-5" :class="{ 'active-role': !showFrontend }" @click="showFrontend = false">Diseñadora UX/UI</button>
                    </div>
                </div>
                <Card class="card-search">
                    <template #title><h3>{{ showFrontend ? 'Hola! Soy Desarrolladora' : 'Hola! Soy Diseñadora UX-UI'}}</h3></template>
                    <template #content>
                        <p v-if="showFrontend">
                           Diseño y desarrollo soluciones digitales que combinan funcionalidad, estética y una experiencia de usuario cuidada. Me adapto con facilidad a distintos entornos y desafíos, aportando una mirada integral que conecta lo técnico con lo humano. Trabajo con compromiso, atención al detalle y pasión por crear productos claros, eficientes y con propósito.
                        </p>
                         <p v-else>
                           Diseño interfaces con identidad propia, enfocadas en la experiencia del usuario. Uso Figma para crear prototipos navegables con animaciones que simulan la experiencia final, permitiendo testear antes de programar. El diseño cobra vida desde el primer click.
                       </p>
                        </template>
                </Card>
            </section>
            <section class="section-experience flex flex-col pt-15 w-[70%]" id="experience">
                <h1 class="title hidden">experiencia</h1>
                <Card v-for="exp in experience" class="card mt-5">
                    <template #content>
                        <div class="card-content flex">
                            <div class="flex w-[25%] mt-2">
                                <p>{{ exp.date }}</p>
                            </div>
                            <div class="flex flex-col w-[75%] ">
                                <h2 class="title-exp">{{ exp.title }}</h2>
                                <h3>{{ exp.role }}</h3>
                                <p>{{ exp.resume }}</p>
                                <div class="cont-labels flex align-center flex-wrap">
                                    <div v-for="t in exp.tech"  class="label">{{ t }}</div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>
            <section class="section-projects flex flex-col pt-15 w-[70%]" id="project">
                <h1 class="title hidden">proyectos</h1>
                <Card v-for="p in projects" :key="p.title" class="mt-5 cursor-pointer"  @click="goToLink(p.link)">
                    <template #content>
                        <div class="card-content flex">
                            <div class="w-[25%] max-h-30 overflow-hidden flex items-start ">
                                <img :src="p.img" class="w-[90%] mt-2 object-cover" :alt="p.title"/>
                            </div>
                            <div class="flex flex-col w-[75%]">
                                <div class="flex items-center">
                                    <h2 class="title-proj">{{ p.title }}</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-6 w-6 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                   
                                </div>
                                <p>{{ p.resume }}</p>
                                <div class="cont-labels flex align-center flex-wrap">
                                    <div v-for="t in p.tech"  class="label">{{ t }}</div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>
        </div>
        <section class="section-marga fixed right-0 ml-5 transition-transform duration-500 ease-in-out z-50"
        :class="{ 'translate-y-[-250px]': showMarga, 'translate-y-[200px]': !showMarga }">
        <img :src="marga" alt="Marguita asoma" class="w-100 h-auto shadow-md" />
        </section>
    </div>
</template>
