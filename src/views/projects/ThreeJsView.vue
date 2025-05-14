<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
     <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.2%] sm:grid-cols-10 sm:grid-rows-[repeat(31,minmax(10vw,auto))] sm:gap-0">
        <div class="justify-items-end col-start-1 col-span-1  sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-1 sm:h-[20vw]">
            <img src="/images/threejs/storytellingSketch1.png" class="w-[60%] mt-[-24%] sm:mt-0 sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-4 sm:col-start-1 sm:row-span-2 sm:row-start-3 sm:h-[20vw]">
            <img src="/images/threejs/storytellingSketch2.png" class="w-0  sm:mt-0 sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-4 sm:col-start-7 sm:row-span-2 sm:row-start-8 sm:h-[20vw]">
            <img src="/images/threejs/storytellingSketch3.png" class="w-full mt-[-4%] sm:mt-0 sm:w-full object-cover"/>
        </div>
        <div class="justify-items-start sm:justify-items-end  sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-6 sm:h-[20vw]">
            <img src="/images/threejs/limbo.jpeg" class="w-[50%] sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end  sm:col-span-2 sm:col-start-3 sm:row-span-2 sm:row-start-7 sm:h-[20vw]">
            <img src="/images/threejs/coraline.jpeg" class="w-[50%] sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-end sm:justify-items-start  sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-[8] sm:h-[20vw]">
            <img src="/images/threejs/littleN.jpeg" class="w-[50%] sm:mt-0 sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center  sm:col-span-3 sm:col-start-3 sm:row-span-2 sm:row-start-[9] sm:h-[20vw]">
            <img src="/images/threejs/gris.jpeg" class="w-[50%] sm:mt-0 sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center  sm:col-span-2 sm:col-start-7 sm:row-span-2 sm:row-start-[15] sm:h-[20vw]">
            <img src="/images/threejs/stringConceptArt2.jpeg" class="w-0 sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-2 sm:col-start-8 sm:row-span-2 sm:row-start-[12] sm:h-[20vw]">
            <img src="/images/threejs/stringConceptArt1.jpeg" class="w-[100%] sm:mt-0 sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-start sm:justify-items-center  sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-[18] sm:h-[20vw]">
            <img src="/images/threejs/logicScreen.jpeg" class="w-[60%] sm:mt-0 sm:w-[70%] object-cover"/>
        </div>
        <div class="row-start-[11] justify-items-center sm:justify-items-start  sm:col-span-5 sm:col-start-2 sm:row-span-2 sm:row-start-[13] sm:h-[20vw]">
            <img src="/images/threejs/storyboard.jpeg" class="w-full sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-end sm:justify-items-start  sm:col-span-3 sm:col-start-2 sm:row-span-3 sm:row-start-[19] sm:h-[30vw] content-end">
            <img src="/images/threejs/powerplant1.jpeg" class="w-[80%] sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-5 sm:row-span-2 sm:row-start-[19] sm:h-[20vw]">
            <img src="/images/threejs/treeModel.jpeg" class="w-full sm:mt-0 sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-6 sm:row-span-2 sm:row-start-[21] sm:h-[20vw]">
            <img src="/images/threejs/stringScreen1.jpeg" class="w-0 sm:mt-0 sm:w-[100%] object-cover"/>
        </div>
           <div class="justify-items-center sm:col-span-6 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-end">
            <video class="w-[80%] sm:w-full object-cover" controls loop playsinline>
                <source src="/images/threejs/stringsVideo.mp4" type="video/mp4">
            </video>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-5 sm:col-start-6 sm:row-span-2 sm:row-start-[28] sm:h-[20vw]">
            <img src="/images/threejs/stringScreen2.jpeg" class="w-full sm:mt-0 sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center sm:col-span-4 sm:col-start-1 sm:row-span-2 sm:row-start-[29] sm:h-[20vw]">
            <img src="/images/threejs/stringScreen3.jpeg" class="w-[80%] sm:mt-0 sm:w-[80%] object-cover"/>
        </div>

        <!--TEXT-->
        <div class="row-start-2 sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
           
           <ProjectTextCom
               title="STRINGS"
               textType="display"
               textContent="STRINGS"
               class="mx-[4%] sm:mt-[10%]"
                />
           <ProjectTextCom
               title="description"
               textType="description"
               textContent="// Three.Js introduction and World Building"
               class="mx-[4%]"
                />
           <ProjectTextCom
               title="description"
               textType="description"
               textContent="// October 2024"
               class="mx-[4%]"
                />
        </div>
        <div class="row-start-5 sm:col-span-6 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-4">
           
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
               class="mx-[4%]"
                />
         
        </div>
        <div class="row-start-10 sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[8] top-0">
           
           <ProjectTextCom
               title="Inspiration"
               textType="description"
               textContent="// Moodboard, pinterest"
               class="sm:mt-[21%]"
                />
        </div>
        <div class="row-start-[13] sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-10">
           
           <ProjectTextCom
               title="Concept"
               textType="body"
               textContent="I sketched out a lot of scenes and compositions and started playing with this idea, that everything would be hanging by a thread. This created a fun framework and little stories started to appear depending on which objects were grouped together: A livingroom, a dirty bathroom, a car crash, a lonely plum tree. I also realized that this composition would make the story expand vertically, which I quite liked."
               class="mx-[4%] sm:mt-[10%]"
                />
        </div>
        <div class="row-start-[12] sm:col-span-6 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] top-0">
           
           <ProjectTextCom
               title="Storyboard"
               textType="description"
               textContent="// Storyboard"
               class="sm:mt-[13%]"
                />
        </div>
        <div class="row-start-[19] sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[16]">
           
           <ProjectTextCom
               title="Concept"
               textType="body"
               textContent="I chose 3 scenes and started building models in Blender, then exporting them into Three.js. Then I build the compositions and placed the light and camera. I chose to keep it very dark and eerie, leaving room for the imagination to run. I recorded sounds in Logic Pro that trickers when an object is clicked. This deepens the stories and is just kinda creepy and fun."
               class="mx-[4%] sm:mt-[10%]"
                />
        </div>
        <div class="row-start-[22] sm:col-span-6 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[27]">
           <ProjectTextCom
               title="Scroll-through"
               textType="description"
               textContent="// Scroll through the world (sound on)"
               class="sm:mt-[2%]"
                />
        </div>
        <div class="row-start-[24] sm:col-span-2 sm:col-start-6 sm:h-[10vw] sm:row-span-1 sm:row-start-[30]">
              <p  class="ml-[4%] sm:mt-[15%] text-darkest font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize">
            //Link to live website: <a href="https://storytelling-hh.netlify.app/" class="hover:underline hover:text-lightContrast" target="_blank">STRINGS</a>
             </p>
        </div>
    </div>
</template>