<script setup>
import WorkCardCom from '@/components/cards/WorkCardCom.vue';
</script>

<template>
<div class="grid grid-cols-7 gap-[2%] pt-[4%] mx-[4%] text-darkest font-bold">
    <WorkCardCom 
      imageUrl="/images/toys/toysWandPoster.png"
      title="SEXTOY GALLERY"
      description="Optional description text here"
      class="row-span-1 col-span-1"
    />
    <WorkCardCom 
      imageUrl="/images/work_tags/studiekort_card.png"
      title="STUDIEKORT"
      description="Optional description text here"
      class="col-span-3 col-start-5 row-span-1"/>
      
  </div>
</template>