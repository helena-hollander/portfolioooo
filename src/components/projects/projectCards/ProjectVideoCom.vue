<script setup>
defineProps({
  videoUrl: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  controls: {
    type: Boolean,
    default: false // Default to no controls
  },
  muted: {
    type: Boolean,
    default: true // Default to no controls
  }
});
</script>

<template>
  <video autoplay loop muted playsinline :controls="controls" :muted="muted" :alt="title" class="object-cover">
    <source :src="videoUrl" :type="type">
    Your browser does not support the video tag.
  </video>
</template>