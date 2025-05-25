<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
</script>
<template>
    <div class="kingsView absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start sm:col-span-1 sm:row-start-1 sm:col-span-3 sm:col-start-2 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/kingscode/me.jpeg" class="w-[60%] mt-[4%] sm:w-full object-cover"/>
        </div>
        <div class="sm:col-span-5 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-3 sm:justify-items-end">
            <img src="/images/kingscode/kongePresse.jpeg" class="sm:w-[90%] object-cover"/>
        </div>

        <div class="row-start-2 sm:col-span-5 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
           
            <ProjectTextCom
                title="King's visit"
                textType="display"
                textContent="Processing with the King of Denmark"
                 />
        </div>
        <div class="sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-3 sm:row-start-4 sm:justify-items-end m-[4%]">
           
            <ProjectTextCom
                title="King's visit"
                textType="body"
                textContent="On a very casual Wednesday in March 2024, H.M. King Frederik IX of Denmark visited our classroom to learn a little about coded design. (I don't think my grandparetns have ever been more proud!) I had the pleasure of presenting a small interactive sketch made in collaboration with my teacher Stig Møller Hansen."
                 />
           
            
        </div>
        <div class="row-start-4 sm:col-span-3 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-6 sm:ml-[20%]">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Photo by Christian Falch Wolff"
                 />
        </div>
         <div class="sm:col-span-5 sm:col-start-6 sm:h-[20vw] sm:row-span-3 sm:row-start-7 m-[4%]">
            <ProjectTextCom
                title="King's visit"
                textType="body"
                textContent="The sketch was made in Processing, and displayed a pixel-like grid, with sqaures that changed color, mapped from the camera input, and animated on sound. The colors were picked from random vectors on images of the King himself. We could scroll through an array of palettes from keyboard inputs, and the size of the squares was mapped to the x-position of the mouse."
                 />
        </div>
        <div class="row-start-6 sm:col-span-6 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-11 sm:justify-items-end">
            <video class=" sm:w-full object-cover" autoplay loop muted playsinline>
                <source src="/videos/kingscode/kingScreenRecording.mp4" type="video/mp4">
            </video>
        </div>
       <div class="justify-items-center sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-8 sm:justify-items-end">
            <img src="/images/kingscode/hanniPeace.jpeg" class="w-[80%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] sm:justify-items-center">
            <img src="/images/kingscode/kongePresse2.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="row-start-7 sm:col-span-3 sm:col-start-3 sm:h-[10vw] sm:row-span-1 sm:row-start-[14] sm:ml-[2%] sm:content-center">
            <ProjectTextCom
                title="Sketch recording"
                textType="description"
                textContent="// Screenrecording of Processing sketch"
                 />
        </div>
        <div class="sm:col-span-3 sm:col-start-7 sm:h-[10vw] sm:row-span-1 sm:row-start-[17] sm:ml-[10%] sm:content-center">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Photo by Christian Falch Wolff"
                 />
        </div>

        <div class="sm:col-span-3 sm:col-start-2 sm:h-[30vw] sm:row-span-3 sm:row-start-[17] sm:content-center">
            <img src="/images/kingscode/processingTiles.jpeg" class="w-[70%] sm:w-[80%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-5 sm:h-[30vw] sm:row-span-3 sm:row-start-[18] sm:content-center sm:justify-items-center">
            <img src="/images/kingscode/colorPicker.jpeg" class="sm:w-[80%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-5 sm:h-[30vw] sm:row-span-3 sm:row-start-[21] ">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Random color picker on an image from Royal Run"
                class="sm:mt-[-16%] sm:ml-[10%]"
                 />
        </div>
        <div class="sm:col-span-4 sm:col-start-7 sm:h-[30vw] sm:row-span-3 sm:row-start-[21] sm:content-center">
            <img src="/images/kingscode/kingPixels3.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-3 sm:h-[30vw] sm:row-span-3 sm:row-start-[21] sm:content-center">
            <img src="/images/kingscode/kingPixels1.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-1 sm:h-[30vw] sm:row-span-3 sm:row-start-[23] sm:content-center sm:justify-items-center">
            <img src="/images/kingscode/processingPallette.jpeg" class="w-[60%] sm:w-[90%] object-cover"/>
        </div>
       <div class="sm:col-span-5 sm:col-start-4 sm:h-[30vw] sm:row-span-3 sm:row-start-[26] sm:justify-items-end">
            <img src="/images/kingscode/stigAndMe.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-end sm:col-span-3 sm:col-start-1 sm:h-[30vw] sm:row-span-3 sm:row-start-[28] sm:justify-items-end ">
            <img src="/images/kingscode/hanniShout.jpeg" class="w-[66%] sm:w-[90%] object-cover sm:mt-[2%]"/>
        </div>
        <div class="sm:col-span-6 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] m-[4%]">
            <ProjectTextCom
                title="Press image"
                textType="body"
                textContent="This was such a fun project. It made me appreciate how little interactivity is needed for a live code to be entertaining. Even to a king!"
                class=""
                 />
            <ProjectTextCom
                title="Press image"
                textType="body"
                textContent="Thank you Stig, for including me in this little adventure. I think we nailed it!"
                class=""
                 />
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// March 2024"
                class=""
                 />
        </div>
        <div class="row-start-[19] sm:col-span-5 sm:col-start-4 sm:h-[10vw] sm:row-span-1 sm:row-start-[29] sm:justify-items-start">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Stig and I making weird faces to the camera input"
                class=" sm:w-full sm:ml-[10%] sm:mt-[-4%]"
                 />
        </div>
        <div class="row-start-[21] sm:col-span-4 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[30] ">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Hannibal and I shouting to test the mic input"
                class="sm:mt-[-7%] sm:ml-[8%]"
                 />
        </div>
    </div>
</template>

<style>
.kingsView{
  cursor: url('/images/cursor_blue.png'), auto;
}
/* Default cursor for the entire page */
/* Pointer cursor for clickable elements */
.kingsView a, /* Links */
.kingsView button, /* Buttons */
.kingsView .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer;
}
</style>