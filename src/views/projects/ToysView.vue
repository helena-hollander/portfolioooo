<script setup>
import { ref } from 'vue'
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
</script>

<template>
     <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.2%] sm:grid-cols-10 sm:grid-rows-[repeat(32,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1  justify-items-end sm:row-start-1 sm:col-span-4 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-5 sm:content-center">
            <img src="/images/toys/toysSketch01.png" class="w-[80%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-4 sm:col-start-3 sm:h-[10vw] sm:row-span-1 sm:row-start-7 sm:content-center">
            <img src="/images/toys/toysSketch02.png" class="w-[0%] sm:mt-[4%] sm:w-[80%] object-cover"/>
        </div>
         <div class="row-start-3 justify-items-center sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-1 sm:justify-items-end">
            <video class="w-[60%] sm:mt-[0%] sm:w-[90%] object-cover" autoplay loop muted playsinline>
                <source src="/videos/toys/toys01.mp4" type="video/mp4">
            </video>
     
        </div>
         <div class=" sm:row-start-1 sm:col-span-3 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-10 sm:content-center sm:justify-items-end">
            <img src="/images/toys/moco.jpeg" class="w-[50%] sm:mt-[12%] sm:w-[80%] object-cover"/>
        </div>
         <div class="justify-items-center sm:row-start-1 sm:col-span-3 sm:col-start-8 sm:h-[10vw] sm:row-span-1 sm:row-start-11 sm:content-center">
            <img src="/images/toys/peech.jpeg" class="w-[50%] sm:mt-[10%] sm:w-[80%] object-cover"/>
        </div>
         <div class="justify-items-end sm:row-start-1 sm:col-span-3 sm:col-start-7 sm:h-[10vw] sm:row-span-1 sm:row-start-[13] sm:content-center">
            <img src="/images/toys/queerBritain.jpeg" class="w-[50%] sm:mt-[0%] sm:w-[90%] object-cover"/>
        </div>
         <div class="justify-items-center sm:row-start-1 sm:col-span-3 sm:col-start-8 sm:h-[10vw] sm:row-span-1 sm:row-start-[9] sm:content-center">
            <img src="/images/toys/colors.png" class="w-[70%] sm:mt-[4%] sm:w-[60%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] sm:justify-items-end">
            <video class="w-[100%] sm:mt-[0%] sm:w-[80%] object-cover" autoplay loop muted playsinline>
                <source src="/videos/toys/demoFloorToys.mp4" type="video/mp4">
            </video>
     
        </div>
            <div class="justify-items-end sm:row-start-1 sm:col-span-2 sm:col-start-8 sm:h-[10vw] sm:row-span-1 sm:row-start-[19] sm:content-center">
            <img src="/images/toys/flogger3dToys.jpg" class="w-[40%] sm:mt-[0%] sm:w-[80%] object-cover"/>
            </div>
            <div class="justify-items-center sm:row-start-1 sm:col-span-2 sm:col-start-6 sm:h-[10vw] sm:row-span-1 sm:row-start-[18] sm:content-center">
            <img src="/images/toys/satisfyerBlender.jpg" class="w-[40%] sm:mt-[12%] sm:w-[60%] object-cover"/>
            </div>
            <div class="justify-items-start sm:row-start-1 sm:col-span-2 sm:col-start-9 sm:h-[10vw] sm:row-span-1 sm:row-start-[21] sm:content-center">
            <img src="/images/toys/processingVarsToys.jpg" class="w-[40%] sm:mt-[0%] sm:w-[60%] object-cover"/>
            </div>
            <div class="justify-items-center sm:row-start-1 sm:col-span-6 sm:col-start-2 sm:h-[10vw] sm:row-span-1 sm:row-start-[20] sm:content-center">
            <img src="/images/toys/processingFloggerToys.jpg" class="sm:mt-[0%] sm:w-[90%] object-cover"/>
            </div>
            <div class="justify-items-center sm:col-span-2 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-end">
                <video class="w-[60%] sm:mt-[0%] sm:w-[80%] object-cover" autoplay loop muted playsinline>
                    <source src="/videos/toys/toysTweaks.mp4" type="video/mp4">
                </video>
            </div>
            <!-- <div class="justify-items-center sm:col-span-9 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-[28] sm:content-center">
            <img src="/images/toys/wandPng.png" class="sm:mt-[0%] sm:w-[100%] object-cover"/>
            </div> -->
            <div class="justify-items-end mt-[-20%] sm:mt-0 sm:row-start-1 sm:col-span-2 sm:col-start-9 sm:h-[10vw] sm:row-span-1 sm:row-start-[25] sm:content-center">
            <img src="/images/toys/w-tote.png" class=" w-[60%] sm:mt-[0%] sm:w-[100%] object-cover"/>
            </div>
            <div class="justify-items-end mt-[-16%] sm:mt-0 sm:row-start-1 sm:col-span-2 sm:col-start-3 sm:h-[10vw] sm:row-span-1 sm:row-start-[27] sm:content-center sm:justify-items-end">
            <img src="/images/toys/toysDildPoster.jpg" class="w-[50%] sm:mt-[0%] sm:w-[90%] object-cover"/>
            </div>
            <div class="justify-items-center sm:row-start-1 sm:col-span-2 sm:col-start-8 sm:h-[10vw] sm:row-span-1 sm:row-start-[30] sm:content-center sm:justify-items-end">
            <img src="/images/toys/toysWandPoster.jpg" class="w-[50%] sm:mt-[0%] sm:w-[90%] object-cover"/>
            </div>
            <div class="row-start-[21] justify-items-start mt-[-34%] sm:mt-0 sm:row-start-1 sm:col-span-2 sm:col-start-7 sm:h-[10vw] sm:row-span-1 sm:row-start-[28] ">
            <img src="/images/toys/w-bottle.png" class="w-[24%] ml-[10%] sm:mt-[0%] sm:w-[50%] object-cover"/>
            </div>
            <div class="row-start-[24] justify-items-start sm:row-start-1 sm:col-span-2 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-[27] sm:justify-items-end">
                <img src="/images/toys/toysSatisfyerPoster.jpg" class="w-[50%] sm:mt-[0%] sm:w-[90%] object-cover"/>
            </div>
            <div class="justify-items-end mt-[-30%] sm:mt-0 sm:row-start-1 sm:col-span-3 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[28] sm:justify-items-start">
            <img src="/images/toys/w-t-shirt.png" class="w-[70%] sm:mt-[0%] sm:w-[90%] object-cover"/>
            </div>
            <div class="justify-items-center mt-[-24%] sm:mt-0 sm:row-start-1 sm:col-span-3 sm:col-start-3 sm:h-[10vw] sm:row-span-1 sm:row-start-[30] sm:content-end">
            <img src="/images/toys/tote.png" class="w-[70%] sm:mt-[0%] sm:w-[90%] object-cover"/>
            </div>
        <!--TEXT-->

        <div class="row-start-2 mt-[-12%] sm:col-span-5 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-3 ">
           
            <ProjectTextCom
                title="Title: The Sex Toy Gallery"
                textType="display"
                textContent="The SEX TOY GALLERY"
                 class="mx-[10%] sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Discription"
                textType="description"
                textContent="// Visual identity using Processing, Blender and Adobe Illustrator to create generative logo-assets and animations."
                 class="mx-[10%] sm:mx-[4%]"
                 />
                
        </div>
        <div class="row-start-4 sm:col-span-3 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-6"> 
            <ProjectTextCom
                title="sketch"
                textType="description"
                textContent="// Processing sketch recording"
                 class="sm:mx-[14%] sm:mt-[10%]"
                 />
                
        </div>
        <div class="mx-[4%] row-start-5 sm:col-span-5 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-11 sm:mx-0">
            <ProjectTextCom
                title="Intro"
                textType="body"
                textContent="The concept focuses on sextoys being playful and ‘pop’, rather than taboo. Giving this museum of sextoys, an identity and interactive feature that can draw in visitors in a playful yet modern manner."
                 class="sm:mx-[4%] sm:w-[82%]"
                 />
            
            <ProjectTextCom
                title="Intro"
                textType="body"
                textContent="Inspired by the lack of erotic museums in Denmark, and my love for pop-art I invented my own gallery of sextoys. I wanted to play with people's idea of sex vs. culture, and how I could reshape their associations and spark curiosity through the visual identity. "
                 class="sm:mx-[4%] sm:w-[82%]"
                 />
                
        </div>
        <div class="row-start-10 sm:col-span-6 sm:col-start-7 sm:h-[10vw] sm:row-span-1 sm:row-start-[14]"> 
            <ProjectTextCom
                title="References"
                textType="description"
                textContent="//Moco Museum, Peech and Queer Britain"
                 class="sm:mx-[4%] sm:mt-[16%]"
                 />
            
            
                
        </div>
        <div class="row-start-[13] mx-[4%] sm:mx-0 sm:col-span-6 sm:col-start-5 sm:h-[10vw] sm:row-span-1 sm:row-start-[16]"> 
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
        <div class="row-start-[18] mx-[4%] sm:mx-0 sm:col-span-7 sm:col-start-3 sm:h-[10vw] sm:row-span-1 sm:row-start-[24]"> 
            <ProjectTextCom
                title="Interactive floor"
                textType="body"
                textContent="I created a series of 3D toys in Blender and imported them into Processing. I mapped the darknes of each pixel with a 2D grid, to make the square's sizes depend on how the light appeared on the model. The 'Asset Generator' makes random SVG toys, to be used on posters, merch, advertisement and communication inside the museum. "
                 class="sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Interactive floor"
                textType="body"
                textContent="Pixels, often used to censor bodies or sextoys, are now re-used to draw them. Turning society's, sometimes narrow and conservative, approach on it's head."
                 class="sm:mx-[4%]"
                 />
                
        </div>
        <div class="mt-[-20%] sm:mt-0 row-start-[26] sm:col-span-4 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[31]"> 
            <ProjectTextCom
                title="Karl Emil Bager"
                textType="description"
                textContent="// Mock-ups by Karl Emil Bager <3"
                 class="sm:mx-[4%]"
                 />
          
                
        </div>
    </div>




</template>