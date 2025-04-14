<script setup>
import { RouterLink } from 'vue-router'
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import { ref, onMounted, onUnmounted } from 'vue';


</script>

<template>
  <main class="h-[200vh] bg-lightest cursor-default">
    <div class="h-screen grid gric-cols-5 sm:w-[80vw] w-[108vw]">
      <div class="absolute self-center hover:underline">
      <RouterLink to="/toys">sextoys</RouterLink>
       </div>
       <div class="container w-full justify-content-center">
  
    <InteractiveLogoCom 
      text="helena hollænder" 
      :textSize="0.1"
      textColor="#0404FF"
      backgroundColor="#ffffff"
      fontFamily="Vazirmatn"
      class="text-center text-darkest"
    />

  </div>
    </div>
   
  </main>
</template>

<style>
.container {
  width: 100%;
  height: 500px;
}
</style>
