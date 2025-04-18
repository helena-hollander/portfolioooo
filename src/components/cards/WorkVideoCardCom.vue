<script setup>
import { RouterLink } from 'vue-router'
// Define props with their types and default values
defineProps({
  videoUrl: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  projectUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  }
});
</script>

<template>
  
  <div class="grid grid-rows-2 mb-[2%] sm:grid-rows-1 row-span-1">
    <RouterLink :to="projectUrl" class="row-span-2 sm:row-span-1 sm:h-[100%]">
    <video autoplay muted loop playsinline  :alt="title" >
      <source :src="videoUrl" :type="type">
      Your browser does not support the video tag.
    </video>
    <div class="row-span-1">
    <h1 class="text-xl mt-2">{{ title }}</h1>
    <p v-if="description" class="font-extralight">{{ description }}</p>
  </div>
</RouterLink>
  </div>

</template>