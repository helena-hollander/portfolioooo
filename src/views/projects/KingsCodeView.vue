<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
</script>
<template>
    <div class="absolute grid grid-cols-10 grid-rows-[repeat(30,minmax(10vw,auto))]">
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
                textContent="The sketch was made in Processing, and displayed a pixel-like grid, with sqaures that changed color, mapped from the camera input, and animated on sound. The colors were picked from random vectors on images of the King himself. We could scroll through an array of palettes from keyboard inputs, and the size of the squares was mapped to the x-position of the mouse."
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
        <div class="col-span-3 col-start-3 h-[10vw] row-span-1 row-start-[14] ml-[2%] content-center">
            <ProjectTextCom
                title="Sketch recording"
                textType="description"
                textContent="// Screenrecording of Processing sketch"
                 />
        </div>
        <div class="col-span-3 col-start-7 h-[10vw] row-span-1 row-start-[17] ml-[10%] content-center">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Photo by Christian Falch Wolff"
                 />
        </div>

        <div class="col-span-3 col-start-2 h-[30vw] row-span-3 row-start-[17] content-center">
            <img src="/images/kingscode/processingTiles.jpeg" class="w-[80%] object-cover"/>
        </div>
        <div class="col-span-4 col-start-5 h-[30vw] row-span-3 row-start-[18] content-center justify-items-center">
            <img src="/images/kingscode/colorPicker.jpeg" class="w-[80%] object-cover"/>
        </div>
        <div class="col-span-4 col-start-5 h-[30vw] row-span-3 row-start-[21] ">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Random color picker on an image from Royal Run"
                class="mt-[-16%] ml-[10%]"
                 />
        </div>
        <div class="col-span-4 col-start-7 h-[30vw] row-span-3 row-start-[21] content-center">
            <img src="/images/kingscode/kingPixels3.jpeg" class="w-[90%] object-cover"/>
        </div>
        <div class="col-span-4 col-start-3 h-[30vw] row-span-3 row-start-[21] content-center">
            <img src="/images/kingscode/kingPixels1.jpeg" class="w-[90%] object-cover"/>
        </div>
        <div class="col-span-3 col-start-1 h-[30vw] row-span-3 row-start-[23] content-center">
            <img src="/images/kingscode/processingPallette.jpeg" class="w-[90%] object-cover"/>
        </div>
        <div class="col-span-5 col-start-4 h-[30vw] row-span-3 row-start-[26] justify-items-end">
            <img src="/images/kingscode/stigAndMe.jpeg" class="w-[90%] object-cover"/>
        </div>
        <div class="col-span-3 col-start-1 h-[30vw] row-span-3 row-start-[28] justify-items-end ">
            <img src="/images/kingscode/hanniShout.jpeg" class="w-[90%] object-cover mt-[2%]"/>
        </div>
        <div class="col-span-6 col-start-4 h-[20vw] row-span-2 row-start-[24] ">
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
        </div>
        <div class="col-span-5 col-start-4 h-[10vw] row-span-1 row-start-[29] justify-items-start">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Stig and I making weird faces to the camera input"
                class=" w-full ml-[10%] mt-[-4%]"
                 />
        </div>
        <div class="col-span-4 col-start-1 h-[10vw] row-span-1 row-start-[30] ">
            <ProjectTextCom
                title="Press image"
                textType="description"
                textContent="// Hannibal and I shouting to test the mic input"
                class="mt-[-7%] ml-[8%]"
                 />
        </div>
    </div>
</template>