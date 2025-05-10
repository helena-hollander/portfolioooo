<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
</script>
<template>
    <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start sm:col-span-1 sm:row-start-1 sm:col-span-3 sm:col-start-4 sm:h-[20vw]  sm:row-span-2 sm:row-start-1 sm:justify-items-end">
            <img src="/images/genhope/reol.jpg" class="w-[60%] mt-[4%] sm:w-[96%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-3 sm:justify-items-end">
            <img src="/images/genhope/brev3.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-6 sm:justify-items-end">
            <img src="/images/genhope/brev1.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-9 sm:justify-items-end">
            <img src="/images/genhope/genhopeSketch2.png" class="sm:w-[100%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-10 sm:justify-items-end">
            <img src="/images/genhope/genhopeSketch1.png" class="sm:w-[100%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-12 sm:justify-items-start">
            <img src="/images/genhope/fedtfarver.jpg" class="sm:w-[76%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[14] sm:justify-items-start content-end">
            <img src="/images/genhope/karlsKamera.jpg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] sm:justify-items-start content-end">
            <img src="/images/genhope/genhopeSketch3.png" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[18] sm:justify-items-end">
            <video class=" sm:w-full object-cover" autoplay loop muted playsinline>
                <source src="/videos/genhope/genhopeCard.mp4" type="video/mp4">
            </video>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[19] sm:justify-items-end content-end">
            <img src="/images/genhope/haaber.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-[19] sm:justify-items-end content-end">
            <img src="/images/genhope/sommerfugle.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/regnbuer.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/baglaens.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/droemme.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-center content-end">
            <img src="/images/genhope/fald.jpeg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-9 sm:h-[20vw] sm:row-span-2 sm:row-start-[24] sm:justify-items-end content-end">
            <img src="/images/genhope/fred.jpeg" class="sm:w-[90%] object-cover"/>
        </div>


        <!--Text-->
        <div class="row-start-2 sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
           
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="display"
                textContent="Generation Hope x SNART"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="//Projection Mapping school project in collaboration with Thoravej 29, SNART and Generation Hope."
                class="w-[60%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="// Curated by Majken Overgaard"
                class="w-[60%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="// In collaboration with Karl Emil Bager <3"
                class="w-[60%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="description"
                textContent="// March 2025"
                class="w-[60%]"
                 />
        </div>
        <div class="sm:col-span-7 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-6">
           
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="body"
                textContent="In the beginning of March, Generation Hope visited our classroom with their arms full of 'Loveletters to the Future'. A collection of more than 1,500 letter written by young people as a response to the rising levels of anxiety about the future. Their goal is to spark new hope and exitement in the next generations, and help shift the media narrative's unproportionate foces on chaos, onto the positive things happening in the world."
                class="sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="body"
                textContent="Together with Majken Overgaard and the SNART lab at Thoravej 29, we were asked to interperate the letters and create a projection mapping installation."
                class="sm:mx-[4%]"
                 />
         
        </div>
        <div class="sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[27]">
           
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="body"
                textContent="In the beginning of March, Generation Hope visited our classroom with their arms full of 'Loveletters to the Future'. A collection of more than 1,500 letter written by young people as a response to the rising levels of anxiety about the future. Their goal is to spark new hope and exitement in the next generations, and help shift the media narrative's unproportionate foces on chaos, onto the positive things happening in the world."
                class="sm:mx-[4%]"
                 />
           
         
        </div>
        
    </div>
</template>