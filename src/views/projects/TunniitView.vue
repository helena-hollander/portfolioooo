<script setup>
import { ref } from 'vue';
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
</script>


<template>
 <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
    <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-4 sm:col-start-1 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/tunniit/tunniitSketch3.png" class="w-[60%] mt-[4%] sm:w-full object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-4 sm:justify-items-start">
            <img src="/images/tunniit/moodboard.jpg" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-5 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-4 sm:justify-items-end">
            <img src="/images/tunniit/tunniitSketch1.png" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-5 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-7 sm:justify-items-end">
            <img src="/images/tunniit/tunniitSketch2.png" class="sm:w-[90%] object-cover"/>
        </div>

        <div class="row-start-2 sm:col-span-5 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
           
            <ProjectTextCom
                title="Inuusuttunik Noorliit"
                textType="display"
                textContent="EXPERIENCE SITE: 'Inuusuttunik Noorliit'"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="description"
                textContent="// A scroll based graphic novel about young people in Greenland"
                 />
        </div>   
    <!-- <ProjectVideoCom
            videoUrl="/videos/tunniit/tunniit_scroll_through (1).mp4"
            type="video/mp4"
            title="Site_scroll_through"
        /> -->
    </div>

</template>