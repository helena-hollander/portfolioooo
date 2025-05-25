<script setup>
import { ref } from 'vue'
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
 <div class="portraitsView absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(13,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 justify-items-center sm:justify-items-end  sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
            <img src="/images/portraits/Ladybug.color.face – stor.jpeg" class="w-[80%] mt-[4%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-end sm:col-span-4 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-1">
            <img src="/images/portraits/Ladybug.color – stor.jpeg" class="w-[80%] mt-[4%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-start sm:justify-items-center sm:col-span-2 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-7">
            <img src="/images/portraits/eggRef1.jpg" class="w-[40%] sm:w-[64%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center sm:col-span-2 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-7">
            <img src="/images/portraits/eggRef2.jpg" class="w-[40%] sm:w-[64%] object-cover"/>
        </div>
        <div class="justify-items-end sm:justify-items-center sm:col-span-2 sm:col-start-9 sm:h-[20vw] sm:row-span-2 sm:row-start-7">
            <img src="/images/portraits/eggRef3.jpg" class="w-[40%] sm:w-[64%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-center sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-9">
            <img src="/images/portraits/portraitPrint.jpeg" class="w-[100%] sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center row-start-8 sm:col-span-3 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-10 sm:justify-items-end">
            <video class="w-[70%] sm:w-[80%] object-cover" autoplay loop muted playsinline>
                <source src="/videos/portraits/portraitsProcess.mp4" type="video/mp4">
            </video>
        </div>
<!--TEXT-->
         <div class="row-start-4 mt-[0%] sm:col-span-3 sm:col-start-9 sm:h-[10vw] sm:row-span-1 sm:row-start-5">
           
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
         <div class="row-start-1 mt-[20%] sm:mt-0 sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-7">
           
            <ProjectTextCom
                title="portraits"
                textType="display"
                textContent="self-portraits"
                 class=""
                 />
            <ProjectTextCom
                title="description"
                textType="description"
                textContent="// A digitally painted duo made in Procreate."
                 class=""
                 />
        </div>
 </div>
</template>

<style>
.portraitsView{
  cursor: url('/images/cursor_blue.png'), auto;
}
/* Default cursor for the entire page */
/* Pointer cursor for clickable elements */
.portraitsView a, /* Links */
.portraitsView button, /* Buttons */
.portraitsView .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer;
}
</style>