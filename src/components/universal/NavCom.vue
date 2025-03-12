<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
     <nav class="fixed w-full grid grid-cols-3 auto-cols-auto font-trispace sm:justify-items-center sm:text-4xl text-2xl text-darkest sm:mt-4 mt-2">
        <RouterLink activeClass="bg-scribbleWorkHover" to="/" class="px-5 sm:px-4 justify-self-start sm:ml-10 active:opacity-60 bg-cover hover:bg-scribbleWorkHover">home</RouterLink>
        <RouterLink activeClass="bg-scribbleAboutHover" to="/about" class="col-start-2 translate-x-[-14px] px-4 sm:mx-10 justify-self-center active:opacity-60 bg-cover hover:bg-scribbleAboutHover">about</RouterLink>
        <RouterLink activeClass="bg-scribbleContactHover" to="/contact" class="col-start-3 justify-self-end sm:mr-10 px-4 active:opacity-60 sm:bg-fit bg-cover bg-center hover:bg-scribbleContactHover">contact</RouterLink>
      </nav>  <!-- Den der activeClass var Karls fede idé! -->
 
</template>