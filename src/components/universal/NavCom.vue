<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
     <nav class="fixed w-full grid grid-cols-5 auto-cols-auto font-trispace text-4xl justify-items-center text-darkest mt-4">
        <RouterLink activeClass="bg-scribbleWorkHover" to="/" class="px-4 justify-self-start ml-10 active:opacity-60 bg-cover hover:bg-scribbleWorkHover">home</RouterLink>
        <RouterLink activeClass="bg-scribbleAboutHover" to="/about" class="col-start-3 px-8 active:opacity-60 bg-cover bg-center hover:bg-scribbleAboutHover">about</RouterLink>
        <RouterLink activeClass="bg-scribbleContactHover" to="/contact" class="col-start-5 justify-self-end mr-10 px-4 active:opacity-60 bg-fit bg-center hover:bg-scribbleContactHover">contact</RouterLink>
      </nav>  <!-- Den der activeClass var Karls fede idé! -->
 
</template>