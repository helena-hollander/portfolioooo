<script setup>
import { RouterLink } from 'vue-router'
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import TitleCom from '@/components/universal/TitleCom.vue';


</script>

<template>
  <main class="h-[200vh] bg-lightest main">
    <div class="h-screen grid gric-cols-5 sm:w-[80vw] w-[108vw]">
      <div class="absolute self-center hover:underline">
      <RouterLink to="/toys">sextoys</RouterLink>
       </div>
       <div class="logo-container fixed w-full h-[100%] z-10 mt-[-10%]">
        <InteractiveLogoCom 
          text="helena hollænder" 
          :textSize="0.12"
          textColor="#0E183D"
          backgroundColor="#FFFCF8"
          fontFamily="Vazirmatn"
          class="text-center text-darkest"
        />
      </div>
    </div>
    <div class="w-screen z-30 absolute top-0">
      <TitleCom />
    </div>
    <div class="h-screen w-full bg-lightContrast absolute z-20">

    </div>
   
  </main>
</template>

<style>
.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  cursor: url('/images/cursor_orange.png'), auto;
}

</style>
