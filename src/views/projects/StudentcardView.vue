<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
</script>
<template>
   <div class="absolute grid grid-cols-1 grid-rows-auto gap-2 sm:grid-cols-10 sm:grid-rows-[repeat(32,minmax(10vw,auto))] sm:gap-0">
        <div class="col-start-1 col-span-1 justify-items-start sm:col-span-1 sm:row-start-1 sm:col-span-3 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-1 sm:justify-items-end">
            <img src="/images/studiekort/mockupGd.jpeg" class="w-[100%] sm:mt-[4%] sm:w-[100%] object-cover"/>
        </div>
        <div class="sm:col-span-1 sm:row-start-1 sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-3 sm:justify-items-center">
            <img src="/images/studiekort/studiekortSketch1.png" class="w-[80%] mt-[4%] sm:mt-[4%] sm:w-[86%] object-cover"/>
        </div>
        <div class="justify-items-end sm:col-span-1 sm:row-start-1 sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-6 sm:justify-items-end">
            <img src="/images/studiekort/studiekortSketch2.png" class="w-[60%] mt-[-4%] sm:mt-[4%] sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-4 sm:col-start-6 sm:row-span-2 sm:row-start-11 sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/pinterest.jpeg" class="w-[80%] sm:mt-[4%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-4 sm:col-start-2 sm:row-span-2 sm:row-start-[12] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/aiSketch.jpeg" class="w-[40%] sm:mt-[4%] sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-[14] sm:h-[20vw] sm:justify-items-start">
            <img src="/images/studiekort/blender1.jpeg" class="w-[60%] sm:mt-[4%] sm:w-[90%] object-cover"/>
        </div>
        <div class="justify-items-end sm:col-span-3 sm:col-start-8 sm:row-span-2 sm:row-start-[16] sm:h-[20vw] sm:justify-items-start">
            <img src="/images/studiekort/blender2.jpeg" class="w-[60%] sm:mt-[4%] sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-6 sm:col-start-1 sm:row-span-2 sm:row-start-[18] sm:h-[20vw] sm:justify-items-start">
            <img src="/images/studiekort/processing.jpeg" class="w-[100%] sm:mt-[4%] sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-2 sm:col-start-8 sm:row-span-2 sm:row-start-[20] sm:h-[20vw] sm:justify-items-start">
            <img src="/images/studiekort/colorSamples.jpeg" class="w-[60%] sm:mt-[4%] sm:w-[100%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-1 sm:row-span-2 sm:row-start-[22] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/idKort.png" class="w-[60%] sm:mt-[4%] sm:w-[96%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-4 sm:row-span-2 sm:row-start-[22] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/gdKort.png" class="w-[60%] sm:mt-[4%] sm:w-[96%] object-cover"/>
        </div>
        <div class="justify-items-end sm:col-span-3 sm:col-start-3 sm:row-span-2 sm:row-start-[24] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/cdKort.png" class="w-[60%] sm:mt-[4%] sm:w-[96%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-6 sm:row-span-2 sm:row-start-[24] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/kkKort.png" class="w-[60%] sm:mt-[4%] sm:w-[96%] object-cover"/>
        </div>
        <div class="justify-items-start sm:col-span-3 sm:col-start-1 sm:row-span-2 sm:row-start-[27] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/mockupCd.jpeg" class="w-[60%] sm:mt-[4%] sm:w-[80%] object-cover"/>
        </div>
        <div class="sm:col-span-5 sm:col-start-6 sm:row-span-2 sm:row-start-[28] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/mockupId.jpeg" class="w-[100%] sm:mt-[4%] sm:w-[100%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-3 sm:col-start-2 sm:row-span-2 sm:row-start-[30] sm:h-[20vw] sm:justify-items-end">
            <img src="/images/studiekort/mockupGd.jpeg" class="w-0 sm:mt-[4%] sm:w-[100%] object-cover"/>
        </div>

              <!--TEXT-->
        <div class="row-start-2 sm:col-span-5 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-4">
           
           <ProjectTextCom
               title="Student ID Card re-design"
               textType="display"
               textContent="DMJX Student ID Card Re-design"
               class="mx-[4%]"
                />
           <ProjectTextCom
               title="Using Processing"
               textType="description"
               textContent="// School project using Processing and Blender to update the look of the DMJX student ID card. "
               class="mx-[4%]"
                />
       </div>
        <div class="row-start-7 sm:col-span-2 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[13]">
           
           <ProjectTextCom
               title="pinterest"
               textType="description"
               textContent="// Pinterest moodboard"
               class="mx-[4%] sm:ml-[24%]"
                />
          
       </div>
        <div class="row-start-5 sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-7">
           
           <ProjectTextCom
               title="intro"
               textType="body"
               textContent="In this course we were asked to create a product/rebrand/logo using a variety of rhetorical analises tools. We chose to rebrand our student ID card."
               class="mx-[4%]"
                />
           <ProjectTextCom
               title="intro"
               textType="body"
               textContent="We started interviewing fellow classmates to get to know our focus group. A common theme was the sense of identity newly accepted students feel when receiving their student ID card. We collected keywords like pride, community, design, ambition, and curiosity. But our current card didn't mirror these values. People thought it was boring. "
               class="mx-[4%]"
                />
           <ProjectTextCom
               title="intro"
               textType="body"
               textContent="Another important point was the functionality of the card. We initially chose this re-design because we noticed some design issues with our existing card. Critical information was missing or not clear. We needed to change the hierarchy of information to increase clarity."
               class="mx-[4%]"
                />
          
       </div>
        <div class="row-start-11 sm:col-span-6 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[16]">
           
           <ProjectTextCom
               title="intro"
               textType="body"
               textContent="To increase a sense of identity and community we created different designs for each study programme. Using the school's font, we made 3D models of the initials or nicknames for each programme in Blender. Then we popped it into Processing..."
               class="mx-[4%]"
                />
       </div>
        <div class="row-start-[13] sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[18]">
           
           <ProjectTextCom
               title="intro"
               textType="description"
               textContent="// The 3D model is on an invisible layer, which is mapped onto the grid of squares. Their size depend on the light/dark values of the 3D layer. The model can be rotated to create more generative and unique cards."
               class="mx-[4%] sm:mt-[12%]"
                />
       </div>
        <div class=" sm:col-span-3 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[27]">
           
           <ProjectTextCom
               title="intro"
               textType="description"
               textContent="// Created in collaboration with Anna, Oliver, Baldrian, Josefine and Mille (CD2326)"
               class="mb-[4%] mx-[4%] sm:mt-[4%] "
                />
       </div>
  
    </div>
</template>