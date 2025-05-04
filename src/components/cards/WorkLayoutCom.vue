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
      class="pointerCursor sm:col-span-2 sm:row-start-1 sm:row-span-1 col-span-1 row-span-3" />
    <WorkVideoCardCom 
      videoUrl="/videos/lola/lola_work_card.webm"
      type="video/webm"
      title="PROJECTION MAPPING"
      description="Lola <3"
      projectUrl="/projectionmapping"
      class="pointerCursor sm:col-span-3 sm:col-start-5 sm:h-[40%] col-span-1 col-start-1 object-cover "/>
      <WorkCardCom 
      imageUrl="/images/genhope/genhope_setup.jpg"
      title="GENERATION HOPE"
      projectUrl="/generationhope"
      class="pointerCursor sm:col-span-3 sm:col-start-3 col-span-1 col-start-1"/>
      <WorkCardCom 
      imageUrl="/images/rundetaarn/biblioteksslaen1.jpg"
      title="Rundetårn Bibliotekssal"
      projectUrl="/rundetaarn"
      class="pointerCursor sm:col-span-4 sm:col-start-7 col-span-1 col-start-1"/>

      <WorkVideoCardCom 
        videoUrl="/videos/tunniit/tunniit_scroll_through (1).mp4"
        type="video/webm"
        title="Greenland Experience Site"
        description="A scroll though graphic novel"
        projectUrl="/projectionmapping"
        class="pointerCursor sm:col-span-4 sm:col-start-7 col-span-1 col-start-1"/>
      
  </div>
</template>

<style scoped>
/* Default cursor for the entire component
.pointerCursor {
  cursor: url('/images/cursor_blue.png'), auto;
}

Change cursor to pink when hovering over WorkCardCom or WorkVideoCardCom
.pointerCursor:hover {
  cursor: url('/images/cursor_pink.png'), pointer;
} */
</style>