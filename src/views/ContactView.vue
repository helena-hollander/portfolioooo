<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CopyMailCom from "@/components/universal/CopyMailCom.vue";
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';

</script>
<template>
<div class="grid h-[100vh]">
    <div class="logo-container h-[100%] w-full fixed">
        <InteractiveLogoCom 
          text="HIT ME UP!" 
          :textSize="0.06"
          textColor="#0E183D"
          backgroundColor="#FFFCF8"
          fontFamily="Vazirmatn"
          class="text-center text-darkest"
            />
    </div>
    <div class="absolute ">
    <a href="https://www.linkedin.com/in/helena-holl%C3%A6nder-b0641728b/" target="_blank">
        <ProjectScribbleCom
        scribbleUrl="/images/contact/Linkedin_scribble.png"
        title="LinkedIn"
        class="sm:w-[52%] sm:justify-self-end mt-[-2%] hover:opacity-[24%]" />
    /></a>
    <a href="https://github.com/helena-hollander" target="_blank">
        <ProjectScribbleCom
        scribbleUrl="/images/contact/gitHub_scribble.png"
        title="Instagram"
        class="sm:w-[52%] sm:justify-self-end mt-[-6%] hover:opacity-[24%]" />
    </a>
    <a href="https://www.behance.net/helenahollnder" target="_blank">
        <ProjectScribbleCom
        scribbleUrl="/images/contact/BeHance_scribble.png"
        title="Instagram"
        class="sm:w-[52%] sm:justify-self-end mt-[-6%] hover:opacity-[24%]" />
    </a>
    </div>
    <div class="absolute grid h-full">
        <ProjectScribbleCom
        scribbleUrl="/images/contact/copyMail_scribble.png"
        title="Instagram"
        class="sm:w-[92%] self-end mb-[22%]" />
    </div>
    <CopyMailCom class="absolute sm:self-end sm:w-[76%] w-0 hover:opacity-[24%]"></CopyMailCom>
</div>


   
</template>

<style scoped>
.logo-container {
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>