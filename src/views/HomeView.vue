<script setup>
import { RouterLink } from 'vue-router'
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import { ref, onMounted, onUnmounted } from 'vue';


</script>

<template>
  <main class="h-[200vh] bg-lightest main">
    <div class="h-screen grid gric-cols-5 sm:w-[80vw] w-[108vw]">
      <div class="absolute self-center hover:underline">
      <RouterLink to="/toys">sextoys</RouterLink>
       </div>
 <div class="container w-full justify-content-center">
  
    <InteractiveLogoCom 
      text="HELENA HOLLÆNDER" 
      :textSize="0.09"
      textColor="#0E183D"
      backgroundColor="#FFFCF8"
      fontFamily="Vazirmatn"
      class="text-center text-darkest"
    />

  </div>
    </div>
    <div class="h-screen bg-lightContrast z-10">

    </div>
   
  </main>
</template>

<style>
.container {
  width: 100%;
  height: 500px;
}
.main {
  cursor: url('/images/cursor_orange.png'), auto;
}
</style>
