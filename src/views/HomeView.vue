<script setup>
import { RouterLink } from 'vue-router'
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import TitleCom from '@/components/universal/TitleCom.vue';
import WorkLayoutCom from '@/components/cards/WorkLayoutCom.vue';
import WorkSecondLayoutCom from '@/components/cards/WorkSecondLayoutCom.vue';


</script>

<template>
  <main class="h-[300vh] bg-lightest main">
   
      <div class="absolute self-center hover:underline">
      <RouterLink to="/toys">sextoys</RouterLink>
       </div>
       <div class="logo-container fixed w-full sm:h-[100%] h-[100%]">
        <InteractiveLogoCom 
          text="HELENA HOLLÆNDER" 
          :textSize="0.09"
          textColor="#0E183D"
          backgroundColor="#FFFCF8"
          fontFamily="Vazirmatn"
          class="text-center text-darkest"
        />
      </div>

    <div class="w-screen absolute sm:mt-0 mt-[20%]">
      <TitleCom class="z-[30] relative pointer-events-none"/>
      <div class="h-[300vh] w-full mt-[-20%] sm:mt-[-0%] z-[10]">
        <WorkSecondLayoutCom class="mt-[-10%] relative" ></WorkSecondLayoutCom>
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
/* Default cursor for the entire page */
.main {
  cursor: url('/images/cursor_blue.png'), auto;
}

/* Pointer cursor for clickable elements */
.main a, /* Links */
.main button, /* Buttons */
.main .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer;
}

</style>
