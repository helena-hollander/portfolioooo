<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CopyMailCom from "@/components/universal/CopyMailCom.vue";

const isSmallScreen = ref(window.matchMedia('(min-width: 640px)').matches)

const updateScreenSize = () => {
  isSmallScreen.value = window.matchMedia('(min-width: 640px)').matches
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})

const imageSrc = computed(() => {
  return isSmallScreen.value ? '/images/scribbles/contact/scribbleDisplayBubbleWide.png' : '/images/scribbles/contact/scribbleBubbleSmall.png'
})
</script>
<template>
    <div class="grid  h-full bg-lightContrast pt-[10%] content-start sm:h-screen">
        <h2 class="mt-[10%] ml-[4%] font-trispace text-3xl/6 text-darkest w-[360px] lg:text-displayContact sm:w-full  lg:max-w-[84%]">Let’s <img src="/images/scribbles/contact/scribbleShare.png" class="w-[140px] inline ml-[-20px] sm:w-[200px]"><span class="ml-[-120px] sm:ml-[-180px]">share</span></img> ideas and get creative.</h2>
        <img :src="imageSrc" class="w-[100%] mt-[-30%] lg:w-[84%]">

    
        <div class="grid font-trispace text-darkest text-base/8 mt-[-10%]">
            <p class="m-[6%]"><img src="/images/scribbles/contact/pTagStart.png" class="w-[70px] inline ml-[-5%]"></img>I am currently looking for an 
                
                <img src="/images/scribbles/contact/scribbleCircle.png" class="w-[132px] ml-[-20px]  mt-[-10px] inline relative"><span class="ml-[-110px]">internship</span></img> 
                
                as part of my bachelor in Coded Design, DMJX, Copenhagen. The period is from 20th of October ‘25 - 6th of March ‘26. (It can be split into two halves) <br><br>I would love to explore the crossover between interactive design, creative code, 3d and installation/stage design. I want to tell stories and facilitate rooms where people dare to dance and dream. <br><br>Other work inquiries are also very welcome. Big or small.<img src="/images/scribbles/contact/pTagEnd.png" class="w-[70px] inline"></img></p>
        </div>
        <div class="grid">
            <img src="/images/scribbles/contact/scribbleCursor.png" class="w-[20%] mt-[-10%] justify-self-end">
            <a href="https://www.behance.net/helenahollnder" target="_blank"><img src="/images/scribbles/contact/scribbleBehance.png" class="w-[64%] justify-self-end hover:opacity-60 mt-[-12%]"></a>
            <a href="https://www.linkedin.com/in/helena-holl%C3%A6nder-b0641728b/" target="_blank"><img src="/images/scribbles/contact/scribbleLinkedin.png" class="w-[70%] justify-self-end hover:opacity-60"></a>
            <a href="https://www.instagram.com/hollanderen/" target="_blank"><img src="/images/scribbles/contact/scribbleInsta.png" class="w-[80%] justify-self-end hover:opacity-60"></a>
            <img src="/images/scribbles/contact/scribbleClickMail.png" class="w-[38%] ml-[-8%] mt-[-12%]">
            <CopyMailCom class="mt-[-2%]"></CopyMailCom>
        </div>
    </div>
   
</template>