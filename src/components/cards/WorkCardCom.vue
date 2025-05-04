<script setup>
import { RouterLink } from 'vue-router'
// Define props with their types and default values
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  projectUrl: {
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
  
  <div class="grid grid-rows-2 mb-[2%] sm:grid-rows-2 ">
    <RouterLink :to="projectUrl" class="row-span-2 sm:row-span-1 h-[100%]">
    <img :src="imageUrl" :alt="title" />
    <div class="row-span-1">
    <h1 class="text-xl mt-2">{{ title }}</h1>
    <p v-if="description" class="font-light">{{ description }}</p>
  </div>
</RouterLink>
  </div>
</template>

