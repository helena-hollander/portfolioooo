<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
</script>

<template>
    <div class="grid sm:grid-cols-2">
        <img src="/images/toys/toysSketch01.png" class="w-[70%] justify-self-end pt-4 sm:w-[86%] sm:cols-start-2">
        <img src="/images/toys/toysSketch02.png" class="w-[70%] justify-self-start translate-y-[-20px] translate-x-[-20px] sm:w-[86%] sm:mt-[-28%] sm:col-start-1">
        <video autoplay muted loop playsinline class="w-[50%] justify-self-center mt-[10%] sm:w-[46%] sm:col-start-1 sm:row-start-1 sm:justify-self-end sm:mt-0"> ">
            <source src="/videos/toys01.mp4" type="video/mp4">
        </video>
        <div class="grid grid-cols-2 sm:col-span-2 w-full mt-[10%] text-right justify-self-start font-trispace text-darkest text-contextSizeMobile/[1.8] sm:grid-cols-3 sm:mt-[-6%]">
            <video autoplay muted loop playsinline class="ml-[-14%] sm:col-start-3 sm:row-span-2 sm:w-[70%] sm:ml-0 sm:mr-[10%] sm:justify-self-start">
                <source src="/videos/demoFloorToys.mp4" type="video/mp4">
            </video>
            <p class="self-end mr-[8%] mb-[4%] sm:col-start-1 sm:row-start-1 sm:col-span-2 sm:text-base sm:ml-[4%] sm:mr-[4%]">Visual identity combining 3d models with Processing filters, to create consistent and generative logo-assets.</p>
            <p class="mx-[4%] my-[8%] col-span-2 font-trispace text-darkest text-right text-contextSizeMobile/[1.8] sm:text-base sm:my-0">
                The concept focuses on sextoys being playful and ‘pop’, rather than taboo.
                The squares in the pixelsgrid maps the 3d elements, creating a filter and an SVG export.
                The whole idea ties into the interactive floor, on display in the museum, spawning where you walk, inviting you to explore.  </p>
        </div>
        <div class="sm:grid sm:grid-cols-5 sm:col-span-2">
            <img src="/images/toys/toysFloggerBlender01.png" class="w-[36%] justify-self-center sm:w-[66%] sm:justify-self-end ">
            <img src="/images/toys/toysScribbleGenerator01.png" class="w-[58%] my-[2%] justify-self-center sm:col-start-2 sm:col-span-3 sm:self-center sm:w-[50%] sm:mt-[-4%]">
            <img src="/images/toys/toysGeneratorProcessing01.png" class="w-full justify-self-center z-10 sm:col-start-2 sm:col-span-3 sm:w-[82%] sm:mt-[-10%]">
            <img src="/images/toys/toysFloggerPixel01.png" class="w-[90%] justify-self-end translate-y-[-12%] translate-x-[40px] sm:w-[70%] sm:col-span-3 sm:col-start-3 sm:mt-[-48%]">
            <img src="/images/toys/toysSvgScribble01.png" class="w-[30%] mt-[-58%] justify-self-start ml-[12%] sm:col-start-4 sm:row-start-3 sm:mt-[22%] sm:w-[36%]">
            <img src="/images/toys/toysProcessing02.png" class="w-[38%] justify-self-end mt-[10%] sm:col-start-1 sm:mt-[4%] sm:row-start-4 sm:row-span-2 sm:w-[74%] ">
            <img src="/images/toys/toysTweaksScribble01.png" class="w-[22%] mt-[-20%] ml-[32%] sm:col-start-2 sm:row-start-4 sm:mt-0 sm:self-end sm:w-[54%] sm:justify-self-end ">
            <video autoplay muted loop playsinline class="w-[54%] justify-self-start sm:col-start-2 sm:row-span-2 sm:w-[88%] sm:mt-0 sm:justify-self-end sm:self-end">
                <source src="/videos/toysTweaks.mp4" type="video/mp4">
            </video>
            <div class="grid grid-cols-3 mt-[4%] gap-[8%] sm:col-span-3  sm:w-[80%] sm:justify-self-center sm:mt-0 sm:self-center sm:gap-[4%]">
                <img src="/images/toys/toysSatisfyerPoster.png" class="w-full">
                <img src="/images/toys/toysDildPoster.png" class="w-full">
                <img src="/images/toys/toysWandPoster.png" class="w-full">
               </div>
               <p class="mx-[4%] m-[4%] font-trispace text-darkest text-contextSizeMobile sm:col-span-3 sm:col-start-3 sm:text-base">Pixels, often used to censor bodies or sextoys, are now re-used to draw them. </p>
        </div>
     <img src="/images/toys/toysCollectionScribble01.png" class="w-[52%] mt-[4%] justify-self-center">
    <img src="/images/toys/toysCollection3d01.png" class="w-[96%] mt-[-6%] justify-self-center">
    </div>

    <!-- scribble div -->
    <div class="absolute top-0 grid w-full sm:grid-cols-3">   
     <img src="/images/toys/toyScribble01.png" class="w-[50%] mt-[30%] ml-[4%] sm:col-start-1 sm:w-[76%] sm:mt-[44%] sm:ml-[24%]">
     <img src="/images/toys/toysScribbleHearts01.png" class="w-[28%] mt-[44%] justify-self-end mr-[10%] sm:col-start-3 sm:row-start-2 sm:w-[34%] sm:justify-self-start">
     <img src="/images/toys/toyScribbleD01.png" class="w-[32%] mt-[80%] justify-self-end mr-[4%] sm:col-start-2 sm:row-start-1 sm:w-[44%] sm:mr-[20%] sm:mt-[34%]">
     <img src="/images/toys/toysLogoBlue.png" class="w-[16%] mt-[0%] justify-self-start ml-[26%] sm:col-start-1 sm:w-[34%] sm:justify-self-end sm:mt-[80%] sm:mr-[-38%]">
     <img src="/images/toys/scribbleDemoFloor.png" class="w-[10%] mt-[13%] justify-self-start ml-[41%] sm:col-start-3 sm:mt-[20%] sm:w-[18%] sm:mr-[14%] sm:justify-self-end">
    
   
        <!-- <div class="h-[0px] content-end">
    <img src="/images/toys/scribbleDemoFloor.png" class="w-[10vw] justify-self-start ml-[40vw]">
        </div> -->
    </div>
    <!-- displayText div -->
    <!-- <div class="absolute top-0 grid w-full justify-items-end">
        <h1 class="mt-[124%] mr-[4%] font-trispace text-darkest text-displaySizeMobile/[1.15] text-right w-[36%] sm:col-start-1 sm:w-[100%] sm:text-5xl sm:text-nowrap">the SEXTOY GALLERY</h1>
        <p class="pr-[4%] font-trispace text-darkest text-right text-contextSizeMobile text-nowrap">[school project, June '24]</p>
      

    </div> -->
    <FooterCom />
</template>