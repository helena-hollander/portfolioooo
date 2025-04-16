<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
     <nav id="nav" class="fixed w-full grid grid-cols-3 auto-cols-auto mx-[2%] font-vazirmatn  sm:justify-items-center sm:text-3xl text-2xl text-darkest sm:mt-4 mt-2 z-50 ">
        <RouterLink activeClass="bg-scribbleWorkHover" to="/" class="work px-5 sm:px-6 justify-self-start sm:ml-[-1%] active:opacity-60 bg-cover hover:bg-scribbleWorkHover">work</RouterLink>
        <RouterLink activeClass="bg-scribbleAboutHover" to="/about" class="about col-start-2 translate-x-[-14px] px-8 sm:mx-10 justify-self-center active:opacity-60 bg-cover hover:bg-scribbleAboutHover">about</RouterLink>
        <RouterLink activeClass="bg-scribbleContactHover" to="/contact" class="contact col-start-3 justify-self-end sm:mr-10 px-8 active:opacity-60 sm:bg-fit bg-cover bg-center hover:bg-scribbleContactHover">contact</RouterLink>
      </nav>  <!-- Den der activeClass var Karls fede idé! -->
 
</template>
<style scoped> 
#nav{
  cursor: url('/images/cursor_orange.png'), pointer;
}
.work{
  cursor: url('/images/cursor_white.png'), pointer;
}
.about{
  cursor: url('/images/cursor_white.png'), pointer;
}
.contact{
  cursor: url('/images/cursor_white.png'), pointer;
}
</style>