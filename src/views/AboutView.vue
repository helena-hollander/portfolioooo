<script setup>
import AboutDrawingCom from '@/components/universal/AboutDrawingCom.vue';
</script>

<template>
 <div class="aboutView sm:min-h-[100%] bg-lightest">
    <div class="grid grid-cols-1 sm:grid-cols-7 sm:h-[100%]">
        <img src="/images/about/tulips_portrait.jpeg" class="relative row-start-2 w-[100vw] h-[60vh] sm:col-span-3 sm:row-start-1  sm:w-[40%] sm:h-[100%] object-cover sm:fixed" />
        <p class="my-[8%] px-[6%] font-vazirmatn sm:px-[0%] sm:pr-[4%] sm:pb-[4%] sm:col-start-4 sm:col-span-4 sm:text-[1.2rem] z-50">
<br><br><br>Hi,

<br><br>My name is Helena (she/her) and I am a visual creator, illustrator, explorer, coder and artist.
<br><br>I am currently inspired by Copenhagen Spring weather, the new season of Doctor Who and all things 'Lady Gaga'.
<br><br>I am studying for my BA in Visual Communication, <a href="https://www.dmjx.dk/uddannelser/coded-design?gad_source=1&gad_campaignid=20043341036&gbraid=0AAAAADxHh-ZCEC5g26xEdAEwGFimKA-sz&gclid=Cj0KCQjwoNzABhDbARIsALfY8VMP2Xuw_5K57dSe5ljVfbU7KUR1N1aR6a_VDHxhy3Ol_GW8XhKcrn4aAuucEALw_wcB" target="_blank" class="underline hover:text-lightContrast">CODED DESIGN at DMJX,</a> Copenhagen. <br>I am looking for an internship from 20th of October ‘25 to 6th of March ‘26. 

<br><br>I specialize in interactive design and stage design through creative coding, 3D and motion. Anything within the realm of theatre, museum installations, websites, dancefloors, graphic novels and game design. 

<br><br>My process starts on paper, always. Drawing is like thinking, and the best way for me to map out ideas with friends and colleagues. 

<br><br>I dream about designing worlds.

<br><br>In the future I will create spaces where people meet. Themselves and each other. I want to design a feeling of being connected and present despite our differences. Dare people to dance, whatever that may look like. 

<br><br>I am a queer woman and I practice design from a feministic point of view. I believe the best businesses and projects are driven by true diversity and transparency. 

<br><br>Thank you for stopping by my little corner of the internet. Let’s <RouterLink to="/contact" class="text-darkest underline hover:text-strongContrast">connect.</RouterLink>




 </p>
    </div>
    <AboutDrawingCom class="z-30 top-0 w-full fixed sm:fixed"></AboutDrawingCom> 
    <!-- Vil jeg style denne, se selve com -->
 </div>
</template>

<style scoped>
.aboutView{
  cursor: url('/images/cursor_blue.png'), auto;
}
/* Default cursor for the entire page */
/* Pointer cursor for clickable elements */
.aboutView a, /* Links */
.aboutView button, /* Buttons */
.aboutView .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer;
}

/* Custom text cursor for text elements */
/* .aboutView p, 
.aboutView span, 
.aboutView .textCursor { 
  cursor: url('/images/cursor_text.png'), 16 16, text;
}  */
</style>