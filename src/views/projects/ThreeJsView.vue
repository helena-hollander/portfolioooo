<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
     <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(24,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-1 sm:h-[20vw]">
            <img src="/images/threejs/storytellingSketch1.png" class="w-full mt-[-14%] sm:mt-0 sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-4 sm:col-start-1 sm:row-span-2 sm:row-start-3 sm:h-[20vw]">
            <img src="/images/threejs/storytellingSketch2.png" class="w-full mt-[-14%] sm:mt-0 sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-4 sm:col-start-1 sm:row-span-2 sm:row-start-6 sm:h-[20vw]">
            <img src="/images/threejs/storytellingSketch3.png" class="w-full mt-[-14%] sm:mt-0 sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end  sm:col-span-2 sm:col-start-6 sm:row-span-2 sm:row-start-8 sm:h-[20vw]">
            <img src="/images/threejs/limbo.jpeg" class="w-full sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end  sm:col-span-2 sm:col-start-8 sm:row-span-2 sm:row-start-8 sm:h-[20vw]">
            <img src="/images/threejs/coraline.jpeg" class="w-full sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-2 sm:col-start-9 sm:row-span-2 sm:row-start-[10] sm:h-[20vw]">
            <img src="/images/threejs/littleN.jpeg" class="w-full sm:mt-0 sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-2 sm:col-start-7 sm:row-span-2 sm:row-start-[10] sm:h-[20vw]">
            <img src="/images/threejs/gris.jpeg" class="w-full sm:mt-0 sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center  sm:col-span-3 sm:col-start-5 sm:row-span-2 sm:row-start-[12] sm:h-[20vw]">
            <img src="/images/threejs/stringConceptArt1.jpeg" class="w-full sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-[12] sm:h-[20vw]">
            <img src="/images/threejs/stringConceptArt2.jpeg" class="w-full sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-5 sm:col-start-1 sm:row-span-2 sm:row-start-[10] sm:h-[20vw]">
            <img src="/images/threejs/storyboard.jpeg" class="w-full sm:mt-0 sm:w-[80%] object-cover"/>
        </div>

        <!--TEXT-->
        <div class="sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
           
           <ProjectTextCom
               title="STRINGS"
               textType="display"
               textContent="STRINGS"
               class="mx-[4%] sm:mt-[12%]"
                />
           <ProjectTextCom
               title="description"
               textType="description"
               textContent="// Three.Js introduction and World Building"
               class="mx-[4%]"
                />
        </div>
        <div class="sm:col-span-6 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-4">
           
           <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="How to tell a good story? How to build an immersive world? And how to get acquainted with Three.js, all within 3 weeks time? We were in for a ride. "
               class="mx-[4%] sm:mt-[4%]"
                />
           <ProjectTextCom
               title="Assignment"
               textType="body"
               textContent="After only five days of hectic live coding and tutorials in Three.js, we were tasked to create our own immersive 3D universe and tell a story. I drew inspiration from an old plum tree in my parents garden, that I used to play in as a kid. I wanted to capture the peace and the fantastic worlds we create in our heads when we play. I was very inspired by Nintendo games like Little Nightmares, GRIS and Limbo, which all focus on the exploration of unique worlds, often mysterious and dark. "
               class="mx-[4%] "
                />
         
        </div>
    </div>
</template>