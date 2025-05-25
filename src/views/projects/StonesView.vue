<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
     <div class="stonesView absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(24,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:h-[20vw]">
            <img src="/images/stones/sketchbook2.png" class="w-[88%] mt-[-14%] sm:mt-0 sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-4 sm:col-start-4 sm:row-span-2 sm:row-start-2 sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/moodboard.png" class="w-[80%]  sm:w-[66%] object-cover"/>
        </div>
        <div class="row-start-3 justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-3 sm:h-[20vw]">
            <img src="/images/stones/sketchbook3.png" class="w-full  sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-5 sm:col-start-3 sm:row-span-2 sm:row-start-6 sm:h-[20vw]">
            <img src="/images/stones/sketchbook1.png" class="w-full sm:w-full object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-2 sm:col-start-8 sm:row-span-2 sm:row-start-8 sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/blender1.jpeg" class="w-[50%] sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-2 sm:col-start-6 sm:row-span-2 sm:row-start-10 sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/blender2.jpeg" class="w-full sm:w-[70%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-3 sm:col-start-7 sm:row-span-2 sm:row-start-[12] sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/stonesSketch.jpeg" class="w-[70%] sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:justify-items-start  sm:col-span-6 sm:col-start-2 sm:row-span-2 sm:row-start-[14] sm:h-[20vw] sm:justify-items-center">
            <img src="/images/stones/styleFull.jpeg" class="w-full sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[18] sm:justify-items-end">
            <video class="w-[80%] sm:w-[80%] object-cover" autoplay loop muted playsinline>
                <source src="/videos/interactiveStone/implementering.mp4" type="video/mp4">
            </video>
        </div>
        <div class="sm:col-span-3 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[18] sm:justify-items-end">
            <video class=" sm:w-[80%] object-cover" autoplay loop muted playsinline>
                <source src="/videos/interactiveStone/threejsPrototypeStones.mp4" type="video/mp4">
            </video>
        </div>

        <!--TEXT-->
        <div class="row-start-2 sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-3">
           
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
        <div class="row-start-9 sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-9">
           
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
        <div class="row-start-[11] sm:col-span-6 sm:col-start-2 sm:h-[10vw] sm:row-span-1 sm:row-start-[17] content-start">
           
           <ProjectTextCom
               title="Interactive 'stone collector'"
               textType="description"
               textContent="// Style tile. The logo is a blue version of Danske Fysioterapeuter's logo. A bit softer to look like rings in water. The font is also the same."
               class="mx-[4%] sm:mx-0 mt-[-4%]"
                />
          
        </div>
        <div class="sm:col-span-6 sm:col-start-7 sm:h-[10vw] sm:row-span-1 sm:row-start-[19] content-start">
           
           <ProjectTextCom
               title="Interactive 'stone collector'"
               textType="body"
               textContent="The app features an interactive page, that collects 3D stones (Three.js and Blender) each time you open your mobile device. The amount of time spent on each 'visit', determines the size of the stone. The stones reacts to the rotation of the device, and roles around with physics. (Prototyped with mouse position) Each stone contains the data of each visit, and the info button reveals more in depth statistics related to time spent on the phone."
               class="mx-[4%]"
                />
           
           <ProjectTextCom
               title="Interactive 'stone collector'"
               textType="body"
               textContent="The goal is to inform, not scare, the users to let them make more intentional choices and build better habits. This could be in the context of physical - or mental health related treatment."
               class="mx-[4%]"
                />
            <p class="mx-[4%] mt-[4%] font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize">Link to live prototype: <a href="https://rullesten.netlify.app/" class="hover:underline hover:text-lightContrast" target="_blank">https://rullesten.netlify.app/</a> <br>(click to spawn the stones)</p>
          
        </div>
        <div class="row-start-[13] sm:col-span-6 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[23] content-start">
           <ProjectTextCom
               title="Figma prototype"
               textType="description"
               textContent="// Figma prototype"
               class="mt-[-4%] mx-[4%] sm:mx-0 sm:mt-[3%] sm:ml-[10%]"
                />
        </div>
        <div class="row-start-[15] sm:col-span-6 sm:col-start-4 sm:h-[10vw] sm:row-span-1 sm:row-start-[23] content-start">
           <ProjectTextCom
               title="Three.js prototype"
               textType="description"
               textContent="// Three.js prototype"
               class="mt-[-4%] mx-[4%] sm:mx-0 sm:mt-[3%] sm:ml-[10%]"
                />
        </div>
        <div class="sm:col-span-6 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[24] content-start">
            <p class="mx-[4%] mt-[4%] font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize">Danske Fysioterapeuter: <a href="https://www.fysio.dk/" class="hover:underline hover:text-lightContrast" target="_blank">fysio.dk</a></p>
        </div>
  </div>
</template>

<style>
.stonesView{
  cursor: url('/images/cursor_blue.png'), auto;
}
/* Default cursor for the entire page */
/* Pointer cursor for clickable elements */
.stonesView a, /* Links */
.stonesView button, /* Buttons */
.stonesView .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer;
}
</style>