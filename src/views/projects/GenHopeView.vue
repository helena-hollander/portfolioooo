<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
</script>
<template>
    <div class="absolute grid grid-cols-1 grid-rows-auto gap-2 sm:grid-cols-10 sm:grid-rows-[repeat(36,minmax(10vw,auto))] sm:gap-0">
        <div class="row-start-3 col-start-1 col-span-1 justify-items-start sm:col-span-1 sm:row-start-1 sm:col-span-3 sm:col-start-5 sm:h-[20vw]  sm:row-span-2 sm:row-start-1 sm:justify-items-end">
            <img src="/images/genhope/reol.jpg" class="w-[60%] mt-[-20%] sm:mt-[4%] sm:w-[96%] object-cover"/>
        </div>
        <div class="mt-[-6%] sm:col-span-2 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-3 justify-items-end sm:mt-0">
            <img src="/images/genhope/brev3.jpeg" class="w-[30%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-6 sm:justify-items-end">
            <img src="/images/genhope/brev1.jpeg" class="w-[50%] mt-[2%] sm:mt-0 sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-9 sm:justify-items-end">
            <img src="/images/genhope/genhopeSketch2.png" class="mt-[2%] sm:mt-0 sm:w-[100%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-10 sm:justify-items-end">
            <img src="/images/genhope/genhopeSketch1.png" class="w-0 sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-12 sm:justify-items-start">
            <img src="/images/genhope/fedtfarver.jpg" class="w-[60%] sm:w-[76%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[14] sm:justify-items-start content-end">
            <img src="/images/genhope/karlsKamera.jpg" class="w-0 sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-start sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] sm:justify-items-start content-end">
            <img src="/images/genhope/genhopeSketch3.png" class="w-[90%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[18] sm:justify-items-end">
            <video class="w-[60%] sm:w-full object-cover" autoplay loop muted playsinline>
                <source src="/videos/genhope/genhopeCard.mp4" type="video/mp4">
            </video>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] sm:justify-items-center sm:content-end">
            <img src="/images/genhope/haaber.jpeg" class="w-[100%] sm:w-[60%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-[20] sm:justify-items-end content-end">
            <img src="/images/genhope/sommerfugle.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/regnbuer.jpeg" class="w-0 sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/baglaens.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/droemme.jpeg" class="w-0 sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/fald.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-9 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-end content-end">
            <img src="/images/genhope/fred.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[30] sm:justify-items-end">
            <video class="w-[60%] sm:w-full object-cover" autoplay loop muted playsinline>
                <source src="/images/genhope/genHopekort.webm" type="video/webm">
            </video>
        </div>
        <div class="justify-items-start sm:col-span-2 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[29] sm:justify-items-end content-end">
            <img src="/images/genhope/karlsComputer.jpg" class="w-[36%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-end sm:col-span-2 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[33] sm:justify-items-end content-end">
            <img src="/images/genhope/karlsKage.jpg" class=" mt-[-14%] sm:mt-0 w-[60%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-1 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[30] sm:justify-items-end">
            <video class="w-[80%] sm:w-full object-cover" autoplay loop muted playsinline>
                <source src="/videos/genhope/genhopeKort2.webm" type="video/webm">
            </video>
        </div>
      

        <!--Text-->
        <div class="row-start-1 mt-[12%] sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
           
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="display"
                textContent="Generation Hope x SNART"
                 class="sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="//Projection Mapping school project in collaboration with Thoravej 29, SNART and Generation Hope."
                class="w-[70%] sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="// Curated by Majken Overgaard"
                class="w-[70%] sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="// In collaboration with Karl Emil Bager <3"
                class="w-[70%] sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="// March 2025"
                class="w-[70%] sm:mx-[4%]"
                 />
        </div>
        <div class="row-start-4 sm:col-span-7 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-6">
           
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="body"
                textContent="In the beginning of March, Generation Hope visited our classroom with their arms full of 'Loveletters to the Future'. A collection of more than 1,500 letter written by young people as a response to the rising levels of anxiety about the future. Their goal is to spark new hope and exitement in the next generations, and help shift the media narrative's unproportionate foces on chaos, onto the positive things happening in the world."
                class="mx-[4%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="body"
                textContent="Together with Majken Overgaard and the SNART lab at Thoravej 29, we were asked to interperate the letters and create a projection mapping installation."
                class="mx-[4%]"
                 />
         
        </div>
        <div class="row-start-[19] sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[27]">
           
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="body"
                textContent="After many iterations of the projected object, the class decided on a vase and a paper tulip. Karl and I chose to create a stop motion video in 3 days, using the roots of the flower to write quotes from the letters."
                class="mx-[4%] sm:mt-[4%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="body"
                textContent="I handdrew all of our frames, while Karl took pictures and edited the video. The result is a 1,5 minute video, seperated in 3 themes: Hopes, Believes and Demands."
                class="mx-[4%]"
                 />
           
         
        </div>
        <div class="sm:col-span-6 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[36] font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize">
           
           <p class="mx-[2%] ">// Generation Hope: <a href="https://generationhope.dk/" class="hover:underline hover:text-lightContrast" target="_blank">generationhope.dk/</a></p>
           <p class="mx-[2%] ">// Thoravej 29: <a href="https://www.thoravej29.dk/da" class="hover:underline hover:text-lightContrast" target="_blank">thoravej29.dk/da</a></p>
           <p class="mx-[2%] ">// SNART: <a href="https://www.fremtid-snart.dk/" class="hover:underline hover:text-lightContrast" target="_blank">fremtid-snart.dk/</a></p>
           <p class="mx-[2%] mb-[4%]">// Karl <a href="https://www.portfolio.karlbager.dk/" class="hover:underline hover:text-lightContrast" target="_blank">portfolio.karlbager.dk/</a></p>
         
        </div>
        
    </div>
</template>