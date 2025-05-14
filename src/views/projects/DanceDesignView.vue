<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
<div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-2 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/inbattleSketch1.png" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-6 sm:h-[20vw]  sm:row-span-2 sm:row-start-1">
            <img src="/images/inbattle/moodboard2.jpeg" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-4 sm:col-start-7 sm:h-[20vw]  sm:row-span-2 sm:row-start-4">
            <img src="/images/inbattle/p5Sketch.jpeg" class="w-[100%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-7 sm:col-span-3 sm:col-start-4 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/moodboard1.jpeg" class="w-[100%]  sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:row-start-8 sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
            <img src="/images/inbattle/inbattleSketch2.png" class="w-[100%]  sm:w-full object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-5">
           
           <ProjectTextCom
               title="Title"
               textType="display"
               textContent="WHEN IN BATTLE I'M FREE, NEVER FREE TO REST"
                class="mx-[4%] sm:w-[500px]"
                />
          
       </div>
        <div class="sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-6">
           
            <ProjectTextCom
               title="Title"
               textType="description"
               textContent="// Website concept and installation design using Processing and camera data"
               class="mx-[4%]"
                />
          
       </div>
</div>
</template>