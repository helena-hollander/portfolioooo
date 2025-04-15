<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive variable to store the image source
const imageSrc = ref('/images/work_tags/portfolio_title_blue.png');

// Function to update the image source based on window width
const updateImageSrc = () => {
  if (window.innerWidth < 470) { // Tailwind's 'sm' breakpoint is 640px
    imageSrc.value = '/images/work_tags/portfolio_title_small.png'; // Mobile version
  } else {
    imageSrc.value = '/images/work_tags/portfolio_title_blue.png'; // Desktop version
  }
};

// Add event listener on mount and remove it on unmount
onMounted(() => {
  updateImageSrc(); // Set the initial image source
  window.addEventListener('resize', updateImageSrc); // Listen for window resize
});

onUnmounted(() => {
  window.removeEventListener('resize', updateImageSrc); // Clean up the event listener
});
</script>

<template>
  <img :src="imageSrc" alt="portfolio_title" />
</template>