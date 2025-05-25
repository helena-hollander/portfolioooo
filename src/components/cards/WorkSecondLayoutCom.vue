<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<div class="cardContainer grid grid-cols-10 grid-rows-[repeat(38,minmax(10vw,auto))]">
    <div class="col-span-2 col-start-2 h-[20vw] bg-white row-span-2">
        <RouterLink to="/toys" class="h-full w-full">           
        <video autoplay muted loop playsinline  class="w-full h-full object-cover" alt="Lola">
            <source src="/videos/toys/toys01.mp4" type="video/mp4">
        </video> </RouterLink>
    </div>
    <div class="col-span-3 col-start-5 row-start-2 row-span-5 h-[50vw] bg-white">
        <RouterLink to="/projectionmapping" class="h-full w-full"> 
        <video autoplay muted loop playsinline  class="w-full h-full object-cover" alt="Lola">
            <source src="/videos/lola/lolaHero.mp4" type="video/mp4">
        </video></RouterLink>
    </div>
    <div class="col-span-2 col-start-9 row-start-6 row-span-2 h-[20vw] content-center">
        <div class="w-[60%] h-[60%]">
            <RouterLink to="/kingscode"> 
            <img src="/images/kingscode/konge.png" class="h-full w-full object-cover" />
            </RouterLink>
        </div>

    </div>
    <div class="col-span-6 col-start-2 row-start-8 row-span-3 h-[30vw] justify-items-center">
        <RouterLink to="/tunniit" class="h-[90%] w-[80%]"> 
        <img src="/images/tunniit/tunniit.png" class="h-full w-full  object-cover" />
        </RouterLink>
    </div>
    <div class="col-span-5 col-start-5 row-start-12 row-span-5 h-[50vw]">
        <RouterLink to="/generationhope" class="h-full w-[95%]"> 
        <video autoplay muted loop playsinline  class="h-full w-full object-cover"  alt="Lola">
            <source src="/videos/genhope/genhopeCard.mp4" type="video/webm">
        </video>
        </RouterLink>

    </div>
    <div class="col-span-2 col-start-2 row-start-[16] row-span-2 h-[20vw] content-center">
        <div class="h-[80%] w-[80%] ">
            <RouterLink to="/studentcard" > 
                <img src="/images/studiekort/studiekortID.jpeg" class="w-full h-full object-cover" />
            </RouterLink>
        </div>
    </div>
    <div class="col-span-4 col-start-7 row-start-[18] row-span-2 h-[20vw] justify-items-end content-end">
        <div class="h-[90%] w-[62.5%]">
            <RouterLink to="/threejs">
            <img src="/images/threejs/threejsCard.jpeg" class="h-full w-full object-cover" />
            </RouterLink>
        </div>
    </div>
    <div class="col-span-3 col-start-3 row-start-[19] row-span-3 h-[30vw] content-end">
        <div class=" h-[96%] w-[96%]">
            <RouterLink to="/dsr">
            <img src="/images/dsr/dsrCard.png" class="h-full w-full object-cover" />
            </RouterLink>
        </div>
        
    </div>
    <div class="col-span-5 col-start-4 row-start-[23] row-span-3 h-[30vw] justify-items-center">
       <div class="h-[96%] w-[82%]">
            <RouterLink to="/dancedesign">
            <img src="/images/inbattle/inBattleCard.png" class="h-full w-full object-cover" />
            </RouterLink>
        </div>
    </div>
    <div class="col-span-3 col-start-7 row-start-[26] row-span-4 h-[40vw] justify-items-center content-end ml-[2%]">
        <div class="h-[88%] w-[76%]">
            <RouterLink to="/stones">
            <video autoplay muted loop playsinline  class="h-full w-full object-cover"  alt="Lola">
            <source src="/videos/interactiveStone/threejsPrototypeStones.mp4" type="video/mp4">
             </video>
            </RouterLink>
        </div>
        
    </div>
    <div class="col-span-3 col-start-3 row-start-[29] row-span-2 h-[20vw] justify-items-center content-end mr-[2%]">
       <div class="h-full w-full">
            <RouterLink to="/rundetaarn">
            <img src="/images/rundetaarn/rundetaarnCard.jpg" class=" h-full w-full object-cover" />
            </RouterLink>
        </div>
    </div>
    <div class="col-span-6 col-start-3 row-start-[32] row-span-6 h-[60vw] justify-items-center content-end mr-[2%]">
        <div class="h-full w-[80%]">
            <RouterLink to="/portraits">
            <img src="/images/portraits/ladybugCard.jpeg" class=" h-full w-full object-cover" />
            </RouterLink>
        </div>
    </div>
   

</div>

</template>

<style scoped>

</style>