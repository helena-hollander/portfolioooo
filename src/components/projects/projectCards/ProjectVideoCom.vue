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
});
</script>

<template>
  <video autoplay loop muted playsinline :alt="title" class="object-cover">
    <source :src="videoUrl" :type="type">
    Your browser does not support the video tag.
  </video>
</template>