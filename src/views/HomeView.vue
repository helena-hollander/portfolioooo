<script setup>
import { RouterLink } from 'vue-router'
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import TitleCom from '@/components/universal/TitleCom.vue';
import WorkLayoutCom from '@/components/cards/WorkLayoutCom.vue';


</script>

<template>
  <main class="h-[200vh] bg-lightest main">
   
      <div class="absolute self-center hover:underline">
      <RouterLink to="/toys">sextoys</RouterLink>
       </div>
       <div class="logo-container fixed w-full sm:h-[100%] h-[100%] z-10">
        <InteractiveLogoCom 
          text="HELENA HOLLÆNDER" 
          :textSize="0.09"
          textColor="#0E183D"
          backgroundColor="#FFFCF8"
          fontFamily="Vazirmatn"
          class="text-center text-darkest"
        />
      </div>

    <div class="w-screen z-30 absolute sm:mt-0 mt-[20%]">
      <TitleCom />
      <div class="h-[300vh] w-full  z-20 mt-[-20%] sm:mt-[-0%]">
      <WorkLayoutCom></WorkLayoutCom>
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
