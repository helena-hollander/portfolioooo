<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
});
</script>

<template>
  <img :src="imageUrl" :alt="title" class="object-cover"/>
</template>