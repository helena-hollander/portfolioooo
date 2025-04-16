<script setup>
import WorkCardCom from '@/components/cards/WorkCardCom.vue';
import WorkVideoCardCom from '@/components/cards/WorkVideoCardCom.vue';
</script>

<template>
<div class="grid grid-cols-1 gap-0 mt-[28%] sm:mt-0 sm:grid-cols-10  sm:gap-[0%] sm:pt-[4%] mx-[8%] text-darkest font-bold">
    
    <WorkVideoCardCom 
      videoUrl="/videos/toys01.mp4"
      widthVideo="300px"
      heightVideo="400px"
      title="SEXTOY GALLERY"
      description="Optional description text here"
      class="sm:col-span-2 sm:row-start-1 sm:row-span-1 col-span-1 row-span-3" />
    <WorkCardCom 
      imageUrl="/images/work_tags/studiekort_card.png"
      title="STUDIEKORT"
      class="sm:col-span-4 sm:col-start-5 col-span-1 col-start-1"/>
    <WorkCardCom 
      imageUrl="/images/toys/toysWandPoster.png"
      title="TESTER"
      class="sm:col-span-4 sm:col-start-3 col-span-1 col-start-1"/>
      
  </div>
</template>