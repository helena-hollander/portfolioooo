<script setup>
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
  description: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <div class="grid grid-rows-2">
    <img :src="imageUrl" :alt="title" class="row-span-2"/>
    <h1 class="text-xl mt-2">{{ title }}</h1>
    <p v-if="description" class="font-extralight">{{ description }}</p>
  </div>
</template>