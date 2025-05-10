<script setup>
import { ref } from 'vue'
import FooterCom from '@/components/universal/FooterCom.vue';
</script>
<template>
   <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.4%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
   <!--Images and videos-->
    <div class="col-start-1 col-span-1 justify-items-center sm:justify-items-start sm:row-start-1 sm:col-span-3 sm:col-start-1 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/genhope/brev1.jpeg" class="w-[80%] sm:w-full object-cover"/>
        </div>
       
 <!--Text and links-->
        <div>
            <a href="https://generationhope.dk/kaerlighedsbreve-til-fremtiden/" alt="Generation Hope - Kærlighedsbreve til Fremtiden"></a>
        </div>
    </div>




</template>