<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
   <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-3 sm:col-start-2 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/dsr/dsrSketch1.png" class="w-[0%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-2 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
            <img src="/images/dsr/insta6.jpeg" class="w-[0%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center sm:col-span-3 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-4">
            <img src="/images/dsr/insta2.jpeg" class="w-[0%] sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-3">
            <img src="/images/dsr/dsrSketch2.png" class="w-[0%] sm:w-full object-cover"/>
        </div>

        <div class="row-start-3 sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-5">
           
           <ProjectTextCom
               title="Title"
               textType="display"
               textContent="DSR, DMJX Amager"
                class="w-[280px] mx-[4%] sm:w-[500px]"
                />
           <ProjectTextCom
               title="Title"
               textType="description"
               textContent="// New visual identity for DSR, the Student Body Council at DMJX. Logo, colors, typography and illstration assets."
                class="w-[280px] mx-[4%] sm:w-[500px]"
                />
           <ProjectTextCom
               title="Title"
               textType="description"
               textContent="// Janurary 2024"
               class="w-[280px] mx-[4%] sm:w-[500px]"
                />
          
       </div>
    </div>
</template>