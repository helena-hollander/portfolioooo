<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
<div class="battleView absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-2 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/inbattleSketch1.png" class="w-[0%] sm:w-full object-cover"/>
        </div>
        <div class="  justify-items-start sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-6 sm:h-[20vw]  sm:row-span-2 sm:row-start-1">
            <img src="/images/inbattle/moodboard2.jpeg" class="w-[0%] sm:w-full object-cover"/>
        </div>
        <div class="  justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-4 sm:col-start-7 sm:h-[20vw]  sm:row-span-2 sm:row-start-4">
            <img src="/images/inbattle/p5Sketch.jpeg" class="w-[70%] sm:w-full object-cover"/>
        </div>
        <div class="row-start-6 justify-items-center sm:justify-items-start sm:row-start-7 sm:col-span-3 sm:col-start-4 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/moodboard1.jpeg" class="w-[80%]  sm:w-full object-cover"/>
        </div>
        <div class="row-start-5 justify-items-center sm:justify-items-start sm:row-start-8 sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/inbattleSketch2.png" class="w-[90%]  sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-[14] sm:col-span-6 sm:col-start-2 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/styleTile.jpeg" class="w-[100%]  sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[11]">
            <img src="/images/inbattle/screen1.jpeg" class="w-[80%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-start sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[13]">
            <img src="/images/inbattle/screen2.jpeg" class="w-[80%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[15]">
            <img src="/images/inbattle/screen4.jpeg" class="w-[80%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-end sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[17]">
            <img src="/images/inbattle/screen5.jpeg" class="w-[80%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[19]">
            <img src="/images/inbattle/screen6.jpeg" class="w-[80%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[21]">
            <video class=" sm:w-full object-cover" autoplay loop muted playsinline>
                <source src="/images/inbattle/inBattleVideo.mp4" type="video/mp4">
            </video>
        </div>
        <div class="justify-items-start sm:justify-items-start sm:row-start-[22] sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/installation1.jpeg" class="w-[70%]  sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end sm:row-start-[24] sm:col-span-3 sm:col-start-6 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/installation2.jpeg" class="w-[100%]  sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-[26] sm:col-span-4 sm:col-start-2 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/installation3.jpeg" class="w-[90%]  sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end sm:row-start-[29] sm:col-span-3 sm:col-start-3 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/installationScreen.jpeg" class="w-[0%]  sm:w-[80%] object-cover"/>
        </div>
        

        <!--TEXT-->
        <div class="row-start-3 sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-5">
           
           <ProjectTextCom
               title="Title"
               textType="display"
               textContent="WHEN IN BATTLE I'M FREE, NEVER FREE TO REST"
                class="w-[280px] mx-[4%] sm:w-[500px]"
                />
          
       </div>
        <div class="row-start-4 sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-6">
           
            <ProjectTextCom
               title="Title"
               textType="description"
               textContent="// A visual identity that makes people move!"
               class="mx-[4%]"
                />
            <ProjectTextCom
               title="Title"
               textType="description"
               textContent="// Website concept and installation design using Processing and camera data. (And I sing a little bit!)"
               class="mx-[4%]"
                />
          
       </div>
        <div class="row-start-7 sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-10">
           
            <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="In June 2024 the Swedish dance company Cullberg visited Copenhagen to do a performance in collaboration with Metropolis: WHILE IN BATTLE I'M FREE, NEVER FREE TO REST. As our end of year exam, we were asked to create a brand new visual identity, poster, website and installation to represent the show. This is my interpretation."
               class="mx-[4%]"
                />
            <ProjectTextCom
               title="Research"
               textType="body"
               textContent="The piece wants to bring be people together across dance genres, political viewpoints and social backgrounds. Mixing contemporary dance with street style, and with a very diverse cast from all over the world. Metropolis facilitates a stage in an outdoor public space, with free access, to bring in a wide variety of audiences. "
               class="mx-[4%]"
                />
            <ProjectTextCom
               title="Research"
               textType="body"
               textContent="My four main themes was MOVEMENT, EXPERIENCE, PEACE vs. CHAOS and SPACE."
               class="mx-[4%]"
                />
          
       </div>
        <div class="row-start-10 sm:col-span-2 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[17]">
           
            <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="// Style tile"
               class="mt-[-4%] mx-[4%] sm:mt-[16%]"
                />
         
          
       </div>
        <div class="row-start-[17] sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[18]">
           
            <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="The visual identity is based around two main colors: a deep blue and a dusty pink. Peaceful and contrastful. The background and the display text is blurred, to create an organic, soft look. The images were created using AI."
               class="mx-[4%]"
                />
            <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="The background is based on a live webcam feed from the website. Using p5.js and CSS, the 'refleksion' of the user is duplicated, blurred, scaled and tinted to create this living deep-blue image. This makes the website and installation interactive and puts the audience at the center of the design. "
               class="mx-[4%]"
                />
           
          
       </div>
        <div class="row-start-[20] sm:col-span-6 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[27]">
           
            <ProjectTextCom
               title="Installation"
               textType="body"
               textContent="The installation is designed to take the audience on a journey, walking through two LED screens, surrounded by their own blue refleksions. It is a tunnel, a pathway for movement, recreating oldschool funhouse mirrors in a digital scale."
               class="mx-[4%]"
                />
            <ProjectTextCom
               title="Installation"
               textType="body"
               textContent="The goal is to create a common experience. A memory enhanced by humor, curiosity and the participation of self. All while listening to ominous vocal arrangements. (In this demo written, recorded and performed be me.) "
               class="mx-[4%]"
                />
        <p  class="mt-[4%] ml-[4%] sm:mt-[15%] text-darkest font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize">
            //Link to live installations demo: <a href="https://whileinbattle-hh-installation.netlify.app/#/" class="hover:underline hover:text-lightContrast" target="_blank">INSTALLATION</a>
             </p>
          
       </div>
        <div class="row-start-[22] sm:col-span-5 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[30]">
        <p  class="mb-[4%] ml-[4%] sm:mt-[14%] text-darkest font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize">
            // Links:  <a href="https://cullberg.com/en/" class="hover:underline hover:text-lightContrast" target="_blank"> Cullberg </a>// <a href="https://www.metropolis.dk/" class="hover:underline hover:text-lightContrast" target="_blank">Metropolis </a>// <a href="https://id.is/en/whileinbattle-2/" class="hover:underline hover:text-lightContrast" target="_blank">WHEN IN BATTLE</a>
             </p>
    
          
       </div>
</div>
</template>

<style>
.battleView{
  cursor: url('/images/cursor_blue.png'), auto;
}
/* Default cursor for the entire page */
/* Pointer cursor for clickable elements */
.battleView a, /* Links */
.battleView button, /* Buttons */
.battleView .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer;
}
</style>