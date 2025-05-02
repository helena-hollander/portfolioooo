<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CopyMailCom from "@/components/universal/CopyMailCom.vue";
import InteractiveLogoCom from '@/components/universal/InteractiveLogoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';

</script>
<template>
<div class="grid h-[100vh]">
    <div class="logo-container h-[100%] w-full fixed">
        <InteractiveLogoCom 
          text="HIT ME UP!!" 
          :textSize="0.06"
          textColor="#0E183D"
          backgroundColor="#FFFCF8"
          fontFamily="Vazirmatn"
          class="text-center text-darkest"
            />
    </div>
    <div class="w-[80%] mx-[6%] mt-[22%] sm:w-[40%] sm:mx-[4%] sm:mt-[10%] h-full sm:content-start">
        <ProjectTextCom
        textType="body"
        title="Greeting"
        textContent="Let’s connect and cook up something cool. I can’t wait! You can reach me on mail or keep browsing on my other socials. "    
        />
        <ProjectTextCom
        textType="body"
        title="e-mail"
        textContent="HELENA.HOLLAENDER@GMAIL.COM"
        class="font-bold mt-[10%] underline sm:opacity-0 sm:pointer-events-none"
        />
    </div>
    <div class="absolute content-end sm:content-center h-full">
    <a href="https://www.linkedin.com/in/helena-holl%C3%A6nder-b0641728b/" target="_blank">
        <ProjectScribbleCom
        scribbleUrl="/images/contact/Linkedin_scribble.png"
        title="LinkedIn"
        class="sm:w-[52%] sm:justify-self-end mt-[-10%] hover:opacity-[24%]" />
    </a>
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
        class="sm:w-[90%] self-end mb-[18%] w-0" />
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