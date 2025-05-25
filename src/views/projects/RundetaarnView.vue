<script setup>
import { ref } from 'vue'
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
  <div class="absolute grid grid-cols-1 grid-rows-auto gap-2 sm:grid-cols-10 sm:grid-rows-[repeat(36,minmax(10vw,auto))] sm:gap-0">
      <div class="col-start-1 col-span-1 justify-items-start sm:col-span-5 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-2 sm:justify-items-center">
          <img src="/images/rundetaarn/rundetaarnSketch2.png" class="w-[100%] sm:w-[80%] object-cover"/>
      </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-1 sm:justify-items-start">
            <img src="/images/rundetaarn/rundetaarnSketch1.png" class="w-[100%] sm:w-[80%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-2 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-4 sm:justify-items-start">
            <img src="/images/rundetaarn/OpenCall.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-5 sm:justify-items-center">
            <img src="/images/rundetaarn/huseRef1.jpeg" class="mt-[20%] w-[100%] sm:w-[60%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-2 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-9 sm:justify-items-center">
            <img src="/images/rundetaarn/huseRef2.jpeg" class=" w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-3 sm:col-start-3 sm:h-[20vw] sm:row-span-2 sm:row-start-8 sm:justify-items-center">
            <img src="/images/rundetaarn/salen.jpeg" class=" w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-10 sm:justify-items-center">
            <img src="/images/rundetaarn/BibliotekssalenLines.png" class="mt-[10%] w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-5 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[12] sm:justify-items-center">
            <img src="/images/rundetaarn/Bibliotekssalen1.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-4 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[16] sm:justify-items-center">
            <img src="/images/rundetaarn/huseSketch.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[20] sm:justify-items-center">
            <img src="/images/rundetaarn/Bibliotekssalen3.2.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-5 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[20] sm:justify-items-center">
            <img src="/images/rundetaarn/Bibliotekssalen3.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[25] sm:justify-items-center">
            <img src="/images/rundetaarn/Bibliotekssalen2.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[25] sm:justify-items-center">
            <img src="/images/rundetaarn/projectionSketch.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-5 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[26] sm:justify-items-center">
            <img src="/images/rundetaarn/Bibliotekssalen2.jpeg" class="w-[100%] sm:w-[100%] object-cover"/>
        </div>

        <!--TEXT-->
         <div class="sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-5">
           
            <ProjectTextCom
                title="Rundetårn"
                textType="display"
                textContent="Little Town"
                 class="sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Installations concept"
                textType="description"
                textContent="// Installation concept for Rundetårn Bibliotekssal, Open Call 2026"
                 class="sm:mx-[4%]"
                 />
            <ProjectTextCom
                title="Installations concept"
                textType="body"
                textContent="In December 2024, I created an installation concept around the theme of 'LIGHT' for the Open Call in Rundtårns Bibliotekssal (Library Hall). These are my sketches and ideas for the experience."
                 class="sm:mx-[4%]"
                 />
        </div>
         <div class="sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[15]">
           
            <ProjectTextCom
                title="Installations concept"
                textType="body"
                textContent="Building on top of Rundetårns history with astronomy, I wanted to turn the entire hall into a starry sky, with projections and lightsbulbs hanging in the empty space, creating depth. Underneeth a town is build, a landscape of white wooden houses with little lives inside, representd by flickering light bulbs. Speaking. Communiacting through enery. "
                 class="sm:mx-[4%]"
                 />
           
            <ProjectTextCom
                title="Installations concept"
                textType="body"
                textContent="As the visitor walks through the night-town, the lightsbulbs react to their presence. Like a wave of energy, following them around the hall. Lighting their path, mapped out by physical computing and cameras. The houses speak, and one house tells the next one to light up, to guide them."
                 class="sm:mx-[4%]"
                 />
        </div>
         <div class="sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[24]">
           
            <ProjectTextCom
                title="Installations concept"
                textType="body"
                textContent="Another version would be lightbubl hanging in wires from the ceiling/sky, to create the effect og fallen stars. These also lights up when someone comes near, but in a genlte, pulsing maner."
                 class="sm:mx-[4%]"
                 />
           
           
        </div>
 </div>
</template>