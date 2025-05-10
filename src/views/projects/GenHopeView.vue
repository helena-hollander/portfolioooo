<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
</script>
<template>
    <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start sm:col-span-1 sm:row-start-1 sm:col-span-3 sm:col-start-4 sm:h-[20vw]  sm:row-span-2 sm:row-start-1">
            <img src="/images/genhope/brev1.jpeg" class="w-[60%] mt-[4%] sm:w-full object-cover"/>
        </div>
        <div class="sm:col-span-2 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-3 sm:justify-items-end">
            <img src="/images/genhope/brev3.jpeg" class="sm:w-[90%] object-cover"/>
        </div>

        <div class="row-start-2 sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
           
            <ProjectTextCom
                title="Generation Hope x SNART"
                textType="display"
                textContent="Generation Hope x SNART"
                 />
        </div>
        
    </div>
</template>