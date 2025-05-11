<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
     <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:h-[20vw]">
            <img src="/images/stones/sketchbook2.png" class="w-[60%] mt-[4%] sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-4 sm:col-start-4 sm:row-span-2 sm:row-start-2 sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/moodboard.png" class="w-full  sm:w-[66%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-3 sm:h-[20vw]">
            <img src="/images/stones/sketchbook3.png" class="w-full  sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-5 sm:col-start-3 sm:row-span-2 sm:row-start-6 sm:h-[20vw]">
            <img src="/images/stones/sketchbook1.png" class="w-full sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-2 sm:col-start-8 sm:row-span-2 sm:row-start-8 sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/blender1.jpeg" class="w-full sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-2 sm:col-start-6 sm:row-span-2 sm:row-start-10 sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/blender2.jpeg" class="w-full sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:row-span-2 sm:row-start-[12] sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/stonesSketch.jpeg" class="w-full sm:w-[100%] object-cover"/>
        </div>

        <!--TEXT-->
        <div class="sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-3">
           
           <ProjectTextCom
               title="Interactive 'stone collector'"
               textType="display"
               textContent="App design for neck pain and interactive stone collector"
               class="mx-[4%] sm:mt-[16%]"
                />
           <ProjectTextCom
               title="description"
               textType="description"
               textContent="// School project. Using Three.js Blender, Figma and looooads of sketchbook paper, I created a mobile app prototype to help young people with neck pains."
               class="mx-[4%]"
                />
           <ProjectTextCom
               title="sender"
               textType="description"
               textContent="// Sender is Danske Fysioterapeuter (fictional)"
               class="mx-[4%]"
                />
           <ProjectTextCom
               title="date"
               textType="description"
               textContent="// Janurary 2025"
               class="mx-[4%]"
                />
        </div>
        <div class="sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-9">
           
           <ProjectTextCom
               title="Interactive 'stone collector'"
               textType="body"
               textContent="To help educate young people about neck pain and how it is connected to our daily habits, I created a mobile app library with exercises and resources. The app focuses on the nervos system and the 'Vagus Nerve', placed at the top of our spine. Meditation, yoga, breathwork, massage and cold showers are all desribed and put into categories like 'Calm your nerves', 'Find balance' and 'Create energy through movement'."
               class="mx-[4%] sm:mt-[16%]"
                />
           <ProjectTextCom
               title="Interactive 'stone collector'"
               textType="body"
               textContent="The visusal identity uses colors and shapes from the ocean and the beach. Inspired by 'zen stones', a meditative practice, where you collect and balance stones in a pile. Waves are also often used to guide breathwork, and the blue color calming."
               class="mx-[4%]"
                />
          
        </div>
  </div>
</template>