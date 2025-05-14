<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
<div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-2 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/inbattleSketch1.png" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-6 sm:h-[20vw]  sm:row-span-2 sm:row-start-1">
            <img src="/images/inbattle/moodboard2.jpeg" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-4 sm:col-start-7 sm:h-[20vw]  sm:row-span-2 sm:row-start-4">
            <img src="/images/inbattle/p5Sketch.jpeg" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-7 sm:col-span-3 sm:col-start-4 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/moodboard1.jpeg" class="w-[100%]  sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-8 sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/inbattleSketch2.png" class="w-[100%]  sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-[11] sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/aisketch2.jpeg" class="w-[100%]  sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-[14] sm:col-span-6 sm:col-start-2 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/styleTile.jpeg" class="w-[100%]  sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[13]">
            <img src="/images/inbattle/screen1.jpeg" class="w-[100%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[15]">
            <img src="/images/inbattle/screen2.jpeg" class="w-[100%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[17]">
            <img src="/images/inbattle/screen4.jpeg" class="w-[100%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[19]">
            <img src="/images/inbattle/screen5.jpeg" class="w-[100%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[21]">
            <img src="/images/inbattle/screen6.jpeg" class="w-[100%]  sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-[22] sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/installation1.jpeg" class="w-[100%]  sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end sm:row-start-[24] sm:col-span-3 sm:col-start-6 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/installation2.jpeg" class="w-[100%]  sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-[26] sm:col-span-4 sm:col-start-2 sm:h-[20vw] sm:row-span-2 ">
            <img src="/images/inbattle/installation3.jpeg" class="w-[100%]  sm:w-[90%] object-cover"/>
        </div>

        <!--TEXT-->
        <div class="sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-5">
           
           <ProjectTextCom
               title="Title"
               textType="display"
               textContent="WHEN IN BATTLE I'M FREE, NEVER FREE TO REST"
                class="mx-[4%] sm:w-[500px]"
                />
          
       </div>
        <div class="sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-6">
           
            <ProjectTextCom
               title="Title"
               textType="description"
               textContent="// Website concept and installation design using Processing and camera data"
               class="mx-[4%]"
                />
          
       </div>
        <div class="sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-10">
           
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
               textContent="My 4 main themes was MOVEMENT, EXPERIENCE, PEACE vs. CHAOS and SPACE."
               class="mx-[4%]"
                />
          
       </div>
        <div class="sm:col-span-2 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[17]">
           
            <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="// Style tile"
               class="mx-[4%] sm:mt-[8%]"
                />
         
          
       </div>
        <div class="sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[18]">
           
            <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="The visual identity is based around 2 main colors: a deep blue and a dusty pink. Peaceful and contrastful. The background and the display text is blurred, to create an organic, soft look. The images were created using AI."
               class="mx-[4%]"
                />
            <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="The background is based on a live webcam feed from the website. Using p5.js and CSS, the 'refleksion' of the user is duplicated, blurred, scaled and tinted to create this living deep-blue image. This makes the website and installation interactive and puts the audience at the center of the design. "
               class="mx-[4%]"
                />
           
          
       </div>
</div>
</template>