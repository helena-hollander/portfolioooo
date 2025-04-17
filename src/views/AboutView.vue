<script setup>
import AboutDrawingCom from '@/components/universal/AboutDrawingCom.vue';
</script>

<template>
 <div class="sm:h-[100%] bg-lightest">
    <div class="grid grid-cols-1 sm:grid-cols-7 sm:h-[100%]">
        <img src="/images/about/tulips_portrait_small.png" class="relative row-start-2 w-[100vw] h-[60vh] sm:col-span-3 sm:row-start-1  sm:w-[40%] sm:h-[100%] object-cover sm:fixed" />
        <p class="my-[8%] px-[6%] font-vazirmatn sm:pb-[4%] sm:col-start-4 sm:col-span-4 sm:text-xl/6 font-bold sm:ml-[0%] z-50">
Hi,

<br><br>My name is___________________ (she/her) and I am a visual creator, illustrator, explorer, coder and artist.
<!-- <br><br>I am inspired by  ___________________. -->
<br><br>I am currently studying for my BA in Visual Communication, ___________________ at DMJX, Copenhagen. <br>I am looking for an internship from 20th of October ‘25 to 6th of March ‘26. 

<br><br>I specialize in interactive design and stage design through creative coding, 3D and motion. Anything within the realm of theatre, museum installations, websites, dancefloors, graphic novels and game design. 

<br><br>My process starts _______________, always. Drawing is like thinking, and the best way for me to map out ideas with friends and colleagues. 

<br><br>I dream about ___________________.

<br><br>In the future I will _______________________________________. Themselves and each other. I want to design a feeling of being connected and present despite our differences. Dare people to dance, whatever that may look like. 

<br><br>I am a queer woman and I practice design from a feministic point of view. I believe the best businesses and projects are driven by true diversity and transparency. 

<br><br>Thank you for stopping by my little corner of the internet. Let’s <RouterLink to="/contact" class="text-darkest underline hover:text-strongContrast">connect.</RouterLink>




 </p>
    </div>
    <AboutDrawingCom class="z-30 top-0 w-full fixed sm:fixed"></AboutDrawingCom> 
    <!-- Vil jeg style denne, se selve com -->
 </div>
</template>