<script setup>
import { RouterLink } from 'vue-router'
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import TitleCom from '@/components/universal/TitleCom.vue';


</script>

<template>
  <main class="h-[200vh] bg-lightest main">
   
      <div class="absolute self-center hover:underline">
      <RouterLink to="/toys">sextoys</RouterLink>
       </div>
       <div class="logo-container fixed w-full sm:h-[100%] h-[100%] z-10">
        <InteractiveLogoCom 
          text="helena hollænder" 
          :textSize="0.12"
          textColor="#0E183D"
          backgroundColor="#FFFCF8"
          fontFamily="Vazirmatn"
          class="text-center text-darkest"
        />
      </div>

    <div class="w-screen z-30 absolute">
      <TitleCom />
      <div class="h-screen w-full bg-lightContrast z-20">
    </div>
    </div>
   
   
  </main>
</template>

<style>
.logo-container {
  width: 100%;

  justify-content: center;
  align-items: center;
}
.main {
  cursor: url('/images/cursor_orange.png'), auto;
}

</style>
