<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
   <div class="dsrView absolute grid grid-cols-1 grid-rows-auto gap-[0.2%] sm:grid-cols-10 sm:grid-rows-[repeat(28,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-2 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/dsr/dsrSketch1.png" class="w-[100%] mt-[-16%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-2 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
            <img src="/images/dsr/insta6.jpeg" class="w-[70%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center sm:col-span-3 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-4">
            <img src="/images/dsr/insta2.jpeg" class="w-[60%] sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-3">
            <img src="/images/dsr/dsrSketch2.png" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-7">
            <img src="/images/dsr/insta8.jpeg" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-2 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-9">
            <img src="/images/dsr/insta1.jpeg" class="w-[60%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-2 sm:col-start-9 sm:h-[20vw] sm:row-span-2 sm:row-start-11">
            <img src="/images/dsr/insta3.jpeg" class="w-[100%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-2 sm:col-start-9 sm:h-[20vw] sm:row-span-2 sm:row-start-6">
            <img src="/images/dsr/Hoola (hvid).png" class="w-[100%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-2 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[12]">
            <img src="/images/dsr/insta5.jpeg" class="w-[70%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[12]">
            <img src="/images/dsr/stickers1.jpeg" class="w-[100%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[10]">
            <img src="/images/dsr/Kim 3.png" class="w-[0%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[13]">
            <img src="/images/dsr/Tøjsnor (hvid).png" class="w-[100%] sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[14]">
            <img src="/images/dsr/dsrCard.png" class="w-[100%] sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[15]">
            <img src="/images/dsr/Rodehoved(hvid).png" class="w-[100%] sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[15]">
            <img src="/images/dsr/Venner(hvid).png" class="w-[100%] sm:w-[60%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[17]">
            <img src="/images/dsr/DSR_Cykel(hvid) 1.png" class="w-[100%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[19]">
            <img src="/images/dsr/Computer(hvid).png" class="w-[0%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[20]">
            <img src="/images/dsr/Ide(hvid).png" class="w-[100%] sm:w-[90%] object-cover"/>
        </div>
        <div class="row-start-[21] justify-items-center sm:justify-items-cente sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[22]">
            <img src="/images/dsr/insta7.jpeg" class="w-[80%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-cente sm:col-span-2 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[23]">
            <img src="/images/dsr/poster1.jpeg" class="w-[100%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-cente sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[24]">
            <img src="/images/dsr/stella.jpeg" class="w-[100%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-cente sm:col-span-5 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[25]">
            <img src="/images/dsr/Regnbue(hvid).png" class="w-[0%] sm:w-[80%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-cente sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[26]">
            <img src="/images/dsr/På-Hoved(hvid).png" class="w-[100%] sm:w-[76%] object-cover"/>
        </div>

        <div class="row-start-2 sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-5">
           
           <ProjectTextCom
               title="Title"
               textType="display"
               textContent="DSR, DMJX Amager"
                class="w-[60%] mx-[4%] sm:w-[500px]"
                />
           <ProjectTextCom
               title="Descrition"
               textType="description"
               textContent="// New visual identity for DSR, the Student Body Council at DMJX. Logo, colors, typography and illstration assets."
                class=" mx-[4%] sm:w-[500px]"
                />
           <ProjectTextCom
               title="Date"
               textType="description"
               textContent="// Janurary 2024"
               class="w-full mx-[4%] sm:w-[500px]"
                />
           <ProjectTextCom
               title="Intro"
               textType="body"
               textContent="To increase visibility among the students at DMJX, Amager, we decicede to update 'De Studerendes Råds' visual identity. Stella Areschoug and I was tasked with putting together a new palette of colors, logo, typo and assets to catch the attention of our fellow students. A warm, divers and funny concept, to represent the work and community of DSR."
               class=" mx-[4%] sm:w-[500px]"
                />
          
       </div>
        <div class="row-start-10 sm:col-span-4 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-[17]">
           <ProjectTextCom
               title="Concept"
               textType="body"
               textContent="We decided a combination of brirght, playfull colors, a funky logo-type and I created a series of character illustrations. They all represent the everyday life, ups and downs of being a student at DMJX. They are purposefully made in a gender-neutral likeness, to be diverse and relateable across genders and backrounds."
               class=" mx-[4%] sm:w-full"
                />
          
       </div>
       <div class="row-start-[13] sm:col-span-2 sm:col-start-2 sm:h-[10vw] sm:row-span-1 sm:row-start-[14]">
           <ProjectTextCom
           title="stickers"
           textType="description"
           textContent="// Stickers"
           class="w-[280px] sm:mx-[2%] sm:w-full sm:mt-[19%]"
           />
        </div>
        <div class="row-start-[19] sm:col-span-2 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[19]">
            <ProjectTextCom
            title="Intro"
            textType="procreate"
            textContent="// Illustrations done in Procreate"
            class="w-[280px] sm:mx-[6%] sm:w-full sm:mt-[0%]"
            />
        </div>
        <div class="row-start-[26] sm:col-span-2 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[26]">
            <ProjectTextCom
            title="Stella"
            textType="description"
            textContent="// This is Stella <3"
            class="w-[280px] sm:mx-[18%] sm:w-full sm:mt-[-10%]"
            />
            
        </div>
        <div class="row-start-[27] sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[25]">
           <ProjectTextCom
               title="Community"
               textType="body"
               textContent="Take a walk around the school and see the posters, stickers and illustrations bringing color and community. Spreading important messages and adorning our social events."
               class="w-[280px] mx-[4%] sm:w-full"
                />
          
       </div>
        <div class="row-start-[28] sm:col-span-2 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[24]">
           <p  class="ml-[2%] sm:ml-[10%] sm:mt-[18%] text-darkest font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize">
            //Link to <a href="https://www.instagram.com/dsr.kbh/" class="hover:underline hover:text-lightContrast" target="_blank">DSR's Instragram</a>
             </p>
          
       </div>
    </div>
</template>

<style>
.dsrView{
  cursor: url('/images/cursor_blue.png'), auto;
}
/* Default cursor for the entire page */
/* Pointer cursor for clickable elements */
.dsrView a, /* Links */
.dsrView button, /* Buttons */
.dsrView .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer;
}
</style>