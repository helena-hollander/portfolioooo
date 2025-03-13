<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <main class="h-screen bg-lightest">
    <div class="h-screen grid gric-cols-5 sm:w-[80vw] w-[108vw]">
      <img src="/images/scribbles/nameTag.png" class="self-end">
      <div class="absolute self-center hover:underline">
      <RouterLink to="/toys">sextoys</RouterLink>
      <RouterLink to="/toys">sextoys</RouterLink>
      <RouterLink to="/toys">sextoys</RouterLink>
       </div>
    </div>
   
  </main>
</template>
