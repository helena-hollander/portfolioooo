<script setup>
import { ref } from 'vue'
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
 <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 justify-items-center sm:justify-items-end  sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
            <img src="/images/portraits/Ladybug.color.face – stor.jpeg" class="w-[60%] mt-[4%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end sm:col-span-4 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
            <img src="/images/portraits/Ladybug.color – stor.jpeg" class="w-[60%] mt-[4%] sm:w-[90%] object-cover"/>
        </div>

         <div class="mt-[0%] sm:col-span-3 sm:col-start-9 sm:h-[10vw] sm:row-span-1 sm:row-start-5">
           
            <ProjectTextCom
                title="titles"
                textType="description"
                textContent="// Ladybug 1 & 2"
                 class="sm:mx-[4%]"
                 />
           
            <ProjectTextCom
                title="titles"
                textType="description"
                textContent="// October '24"
                 class="sm:mx-[4%]"
                 />
        </div>
         <div class="mt-[0%] sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-7">
           
            <ProjectTextCom
                title="portraits"
                textType="display"
                textContent="self-portraits"
                 class="sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="description"
                textType="description"
                textContent="// A digitally painted duo made in Procreate."
                 class="sm:mx-[4%]"
                 />
        </div>
 </div>
</template>