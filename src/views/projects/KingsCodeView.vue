<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
</script>
<template>
    <div class="absolute grid grid-cols-10 grid-rows-[repeat(38,minmax(10vw,auto))]">
        <div class="col-span-3 col-start-2 h-[20vw] bg-white row-span-2 row-start-2">
            <img src="/images/kingscode/me.jpeg" class="w-full object-cover"/>
        </div>
        <div class="col-span-5 col-start-5 h-[20vw] row-span-2 row-start-3 justify-items-end">
            <img src="/images/kingscode/kongePresse.jpeg" class="w-[90%] object-cover"/>
        </div>

        <div class="col-span-5 col-start-5 h-[20vw] row-span-2 row-start-2">
           
            <ProjectTextCom
                title="King's visit"
                textType="display"
                textContent="Processing with the King of Denmark"
                 />
        </div>
        <div class="col-span-4 col-start-1 h-[20vw] row-span-3 row-start-4 justify-items-end m-[4%]">
           
            <ProjectTextCom
                title="King's visit"
                textType="body"
                textContent="On a very casual Wednesday in March 2024, H.M. King Frederik IX of Denmark visited our classroom to learn a little about coded design. (I don't think my grandparetns have ever been more proud!) I had the pleasure of presenting a small interactive sketch made in collaboration with my teacher Stig Møller Hansen."
                 />
           
            
        </div>
        <div class="col-span-3 col-start-5 h-[20vw] row-span-2 row-start-6 ml-[20%]">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Photo by Christian Falch Wolff"
                 />
        </div>
        <div class="col-span-5 col-start-6 h-[20vw] row-span-3 row-start-7 m-[4%]">
            <ProjectTextCom
                title="King's visit"
                textType="body"
                textContent="The sketch was made in Processing, and displayed a pixel-like grid, with sqaures that changed color, mapped from the camera input, and animated on sound. The colors were picked from random vectors on images of the King himself. And we could scroll through an array of palettes from keyboard inputs."
                 />
        </div>
        <div class="col-span-6 col-start-3 h-[20vw] row-span-2 row-start-11 justify-items-end">
            <video class=" w-full object-cover" autoplay loop muted playsinline>
                <source src="/videos/kingscode/kingScreenRecording.mp4" type="video/mp4">
            </video>
        </div>
        <div class="col-span-5 col-start-1 h-[20vw] row-span-2 row-start-8 justify-items-end">
            <img src="/images/kingscode/hanniPeace.jpeg" class="w-[80%] object-cover"/>
        </div>
        <div class="col-span-4 col-start-7 h-[20vw] row-span-2 row-start-[15] justify-items-center">
            <img src="/images/kingscode/kongePresse2.jpeg" class="w-[90%] object-cover"/>
        </div>

        <!-- <div class="col-span-3 col-start-7 h-[20vw] row-span-2 row-start-10 justify-items-end">
            <img src="/images/kingscode/processingTiles.jpeg" class="w-[80%] object-cover"/>
        </div> -->
    </div>
</template>