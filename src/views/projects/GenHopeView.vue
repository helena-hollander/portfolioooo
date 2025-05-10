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
        
    </div>
</template>