<script setup>
import { ref } from 'vue'
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
import FooterCom from '@/components/universal/FooterCom.vue';
</script>

<template>
     <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:row-start-1 sm:col-span-4 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-5 sm:content-center">
            <img src="/images/toys/toysSketch01.png" class="w-[60%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:row-start-1 sm:col-span-4 sm:col-start-3 sm:h-[10vw] sm:row-span-1 sm:row-start-7 sm:content-center">
            <img src="/images/toys/toysSketch02.png" class="w-[60%] sm:mt-[4%] sm:w-[80%] object-cover"/>
        </div>
         <div class="sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-1 sm:justify-items-end">
            <video class="sm:mt-[0%] sm:w-[90%] object-cover" autoplay loop muted playsinline>
                <source src="/videos/toys01.mp4" type="video/mp4">
            </video>
     
        </div>
         <div class=" sm:row-start-1 sm:col-span-3 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-10 sm:content-center sm:justify-items-end">
            <img src="/images/toys/moco.jpeg" class="sm:mt-[12%] sm:w-[80%] object-cover"/>
        </div>
         <div class="justify-items-center sm:row-start-1 sm:col-span-3 sm:col-start-8 sm:h-[10vw] sm:row-span-1 sm:row-start-11 sm:content-center">
            <img src="/images/toys/peech.jpeg" class="sm:mt-[10%] sm:w-[80%] object-cover"/>
        </div>
         <div class="justify-items-center sm:row-start-1 sm:col-span-3 sm:col-start-7 sm:h-[10vw] sm:row-span-1 sm:row-start-[13] sm:content-center">
            <img src="/images/toys/queerBritain.jpeg" class="sm:mt-[0%] sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] sm:justify-items-end">
            <video class="sm:mt-[0%] sm:w-[80%] object-cover" autoplay loop muted playsinline>
                <source src="/videos/demoFloorToys.mp4" type="video/mp4">
            </video>
     
        </div>
        <!--TEXT-->

        <div class=" sm:col-span-5 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-3">
           
            <ProjectTextCom
                title="Title: The Sex Toy Gallery"
                textType="display"
                textContent="The SEX TOY GALLERY"
                 class="sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Discription"
                textType="description"
                textContent="// Visual identity using Processing, Blender and Adobe Illustrator to create generative logo-assets and animations."
                 class="sm:mx-[4%]"
                 />
                
        </div>
        <div class=" sm:col-span-3 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-6"> 
            <ProjectTextCom
                title="sketch"
                textType="description"
                textContent="// Processing sketch recording"
                 class="sm:mx-[14%] sm:mt-[10%]"
                 />
                
        </div>
        <div class=" sm:col-span-5 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-11">
            <ProjectTextCom
                title="Intro"
                textType="body"
                textContent="The concept focuses on sextoys being playful and ‘pop’, rather than taboo. Giving this museum of sextoys, an identity and interactive feature that can draw in visitors in a playful yet modern manner."
                 class="sm:mx-[4%] sm:w-[82%]"
                 />
            
            <ProjectTextCom
                title="Intro"
                textType="body"
                textContent="Inspired by the lack of erotic museums in Denmark, and my love for pop-art. I wanted to play with people's idea of sex vs. culture, and how I could reshape their associations and spark curiosity."
                 class="sm:mx-[4%] sm:w-[82%]"
                 />
                
        </div>
        <div class=" sm:col-span-6 sm:col-start-7 sm:h-[10vw] sm:row-span-1 sm:row-start-[14]"> 
            <ProjectTextCom
                title="Interactive floor"
                textType="description"
                textContent="//Moco Museum, Peech and Queer Britain"
                 class="sm:mx-[4%] sm:mt-[16%]"
                 />
            
            
                
        </div>
        <div class=" sm:col-span-6 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-[16]"> 
            <ProjectTextCom
                title="Interactive floor"
                textType="body"
                textContent="I designed an interactive floor-plan in the exherbitions, which lights up and sparks pixels, wherever you walk. (As a projection or screen) Leaving a trail behind you, a clear representation of your presence in the gallery. Playful and inviting."
                 class="sm:mx-[4%]"
                 />
            
            <ProjectTextCom
                title="Demo"
                textType="body"
                textContent="This demo is made in Processing, where the mouse postion represents the visitors route, seen from above. "
                 class="sm:mx-[4%]"
                 />
                
        </div>
    </div>




    <!-- <div class="h-full">
        <ProjectScribbleCom
            scribbleUrl="/images/toys/toysDisplayScribble.png"
            title="Generative Logo"
            class="absolute w-full mt-[50%] sm:w-[80%] top-0 z-50 sm:right-0 sm:mt-[0%]" 
    />
        <div class="grid grid-cols-3">
       <ProjectVideoCom
            videoUrl="/videos/toys01.mp4"
            type="video/mp4"
            title="toys"
            class="w-[100%] sm:mt-[30%] row-span-1 col-span-3 sm:col-span-1 self-center"
       /> 
            <div class="grid col-span-3 sm:grid-rows-4 sm:col-span-2">
                <ProjectTextCom
                 textType="display"
                 textContent="The SEX TOY GALLERY"
                 class=" row-start-1 sm:row-start-2 self-end"
                />
                <ProjectTextCom
                 textType="body"
                 textContent="Visual identity combining 3D models with Processing filters, to create consistent and generative logo-assets. The concept focuses on sextoys being playful and ‘pop’, rather than taboo. Giving this museum of sextoys, an identity and interactive feature that can draw in visitors in a playful yet modern manner."
                 class="mx-[4%] row-start-4 self-start sm:row-start-3"
                />
                <ProjectTextCom
                 textType="description"
                 textContent="// Blender // Processing //Adobe Illustrator"
                 class=" self-start row sm:row-start-4"
                />

            </div>
   
     <div class="grid grid-cols-5 grid-cols-1 col-span-3 col-start-1">   
        <ProjectImageCom
            imageUrl="/images/toys/toysSketch01.png"
            title="sketchbook"
            class="col-span-5 w-full justify-self-end row-span-1 sm:row-span-2 sm:row-start-1 sm:w-[100%] sm:col-span-2 sm:col-start-4"

        />
        <ProjectImageCom
            imageUrl="/images/toys/toysSketch02.png"
            title="sketchbook"
            class="w-[0%] sm:w-[78%] sm:col-start-1 sm:col-span-2 sm:justify-self-start sm:row-start-2 sm:col-start-2"
        />
        <ProjectVideoCom
            videoUrl="/videos/demoFloorToys.mp4"
            type="video/mp4"
            title="demoFloorToys"
            class="col-span-5 row-start-2 w-[60%] self-center sm:col-span-2 sm:w-[70%] sm:row-start-3 sm:justify-self-end sm:ml-[6%] mt-[4%]"
        />
        <ProjectTextCom
            textType="description"
            textContent="//Processing demo sketch, the mouse representing the visitor walking around."
            class="row-start-3 col-span-3 sm:col-span-2  sm:row-start-4"
        />
        <ProjectTextCom
            textType="body"
            textContent="To egnite visitor's cuiriosity, I designed an interactive floor-plan in the exherbitions, which lights up and sparks pixels, wherever you walk. Leaving a trail behind you, a clear representation of your presence in the gallery. Playful and inviting."
            class="col-span-5 row-start-4 mx-[4%] sm:col-span-3 mt-[2%] sm:mr-[6%] sm:mx-[6%] sm:row-start-3"

        />
    </div>
    <ProjectScribbleCom
        scribbleUrl="/images/toys/valuesToysScribble.png"
        title="values"
        class=" col-span-3 col-start-1 justify-self-end mt-[-88%] w-[58%] sm:col-start-2 sm:pr-[14%] sm:mt-[-24%] sm:w-[50%]"
    />
    <div class="col-span-5 grid grid-cols-1 sm:grid-cols-7 gap-x-[4%] mt-[4%]">
        <ProjectImageCom
        imageUrl="/images/toys/flogger3dToys.jpg"
        title="flogger3d"
        class="col-start-1 w-[40%] justify-self-center sm:col-span-2 sm:w-[70%] sm:justify-self-end"
        /> 
        <ProjectImageCom
        imageUrl="/images/toys/processingFloggerToys.jpg"
        title="floggerProcessing"
        class="row-start-2 mt-[4%] sm:col-start-3 sm:col-span-5 sm:row-span-2"
        /> 
        <ProjectScribbleCom
        scribbleUrl="/images/toys/arrowToysScribble.png"
        title="arrow"
        class="w-0 sm:row-start-2 sm:w-[60%] sm:col-start-2 justify-self-end"
        />
        <ProjectTextCom
            textType="description"
            textContent="// Processing sketch, creating a SVG file using the 3D model and the pixelfilter. "
            class="sm:col-span-5 sm:col-start-3"
        />
    </div>
    <div class="grid grid-cols-3 col-span-5 mr-[4%]">
        <ProjectTextCom
            textType="body"
            textContent="Re-using the round-cornered pixels in the logo and logo assets. The 'Asset Generator' makes random SVG toys, to be used on posters, merch, advertisement and communication inside the museum."
            class="col-span-3 sm:col-span-2 ml-[6%]"
        />
        <ProjectTextCom
            textType="body"
            textContent="Pixels, often used to censor bodies or sextoys, are now re-used to draw them. Turning society's sometimes narrow and conservative view of sextoys, on it's head."
            class="col-span-3 sm:col-span-2 ml-[6%]"
        />
    </div>
     </div>
    </div>
 -->




    <!-- <div class="grid sm:grid-cols-2">
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

    scribble div
    <div class="absolute top-0 grid w-full sm:grid-cols-3">   
     <img src="/images/toys/toyScribble01.png" class="w-[50%] mt-[30%] ml-[4%] sm:col-start-1 sm:w-[76%] sm:mt-[44%] sm:ml-[24%]">
     <img src="/images/toys/toysScribbleHearts01.png" class="w-[28%] mt-[44%] justify-self-end mr-[10%] sm:col-start-3 sm:row-start-2 sm:w-[34%] sm:justify-self-start">
     <img src="/images/toys/toyScribbleD01.png" class="w-[32%] mt-[80%] justify-self-end mr-[4%] sm:col-start-2 sm:row-start-1 sm:w-[44%] sm:mr-[20%] sm:mt-[34%]">
     <img src="/images/toys/toysLogoBlue.png" class="w-[16%] mt-[0%] justify-self-start ml-[26%] sm:col-start-1 sm:w-[34%] sm:justify-self-end sm:mt-[80%] sm:mr-[-38%]">
     <img src="/images/toys/scribbleDemoFloor.png" class="w-[10%] mt-[13%] justify-self-start ml-[41%] sm:col-start-3 sm:mt-[20%] sm:w-[18%] sm:mr-[14%] sm:justify-self-end">
    
   
     <div class="h-[0px] content-end">
    <img src="/images/toys/scribbleDemoFloor.png" class="w-[10vw] justify-self-start ml-[40vw]">
        </div> 
    </div> -->
    <!-- displayText div -->
        <!-- <div class="absolute top-0 grid w-full justify-items-end">
        <h1 class="mt-[124%] mr-[4%] font-trispace text-darkest text-displaySizeMobile/[1.15] text-right w-[36%] sm:col-start-1 sm:w-[100%] sm:text-5xl sm:text-nowrap">the SEXTOY GALLERY</h1>
        <p class="pr-[4%] font-trispace text-darkest text-right text-contextSizeMobile text-nowrap">[school project, June '24]</p>
      

    </div>
    <FooterCom /> -->
</template>