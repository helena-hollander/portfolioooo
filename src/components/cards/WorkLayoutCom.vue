<script setup>
import WorkCardCom from '@/components/cards/WorkCardCom.vue';
import WorkVideoCardCom from '@/components/cards/WorkVideoCardCom.vue';
</script>

<template>
<div class="grid grid-cols-1 gap-0 mt-[28%] sm:mt-0 sm:grid-cols-10 sm:gap-y-[4%] sm:pt-[4%] mx-[8%] text-darkest font-bold">
    
    <WorkVideoCardCom 
      videoUrl="/videos/toys01.mp4"
      type="video/mp4"
      title="SEXTOY GALLERY"
      description="Optional description text here"
      projectUrl="/toys"
      class="sm:col-span-2 sm:row-start-1 sm:row-span-1 col-span-1 row-span-3" />
    <WorkVideoCardCom 
      videoUrl="/videos/lola.webm"
      type="video/webm"
      title="PROJECTION MAPPING"
      description="Lola <3"
      projectUrl="/projectionmapping"
      class="sm:col-span-3 sm:col-start-5 sm:h-[40%] col-span-1 col-start-1 object-cover "/>
    <WorkCardCom 
      imageUrl="/images/toys/toysWandPoster.png"
      title="GENERATION HOPE"
      projectUrl="/generationhope"
      class="sm:col-span-3 sm:col-start-3 col-span-1 col-start-1"/>
    <WorkCardCom 
      imageUrl="/images/toys/toysWandPoster.png"
      title="TESTER"
      projectUrl="/toys"
      class="sm:col-span-4 sm:col-start-7 col-span-1 col-start-1"/>
      
  </div>
</template>