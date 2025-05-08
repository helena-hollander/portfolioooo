<script setup>
import { ref } from 'vue';
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
</script>


<template>
 <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.5%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
   <!--Images and videos-->
    <div class="col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-4 sm:col-start-1 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/tunniit/tunniitSketch1.png" class="w-[60%] mt-[4%] sm:w-full object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-4 sm:justify-items-center">
            <img src="/images/tunniit/moodboard.jpg" class="sm:w-[76%] object-cover"/>
        </div>
        <div class="sm:col-span-5 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-4 sm:justify-items-end">
            <img src="/images/tunniit/tunniitSketch3.png" class="sm:w-[100%] object-cover"/>
        </div>
        <div class="sm:col-span-5 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-9 sm:justify-items-end">
            <img src="/images/tunniit/tunniitSketch2.png" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-7 sm:justify-items-center">
            <img src="/images/tunniit/theBoat.png" class="sm:w-[86%] object-cover"/>
        </div>

        <!--TEXT-->
        <div class=" sm:col-span-5 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
           
            <ProjectTextCom
                title="Inuusuttunik Noorliit"
                textType="display"
                textContent="EXPERIENCE SITE: 'Inuusuttunik Noorliit'"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="description"
                textContent="// A scroll based graphic novel about young people in Greenland"
                 />
        </div>   
        <div class=" sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-6 ">
            <ProjectTextCom
                title="graphic novel"
                textType="description"
                textContent="// Moodboard"
                class="sm:ml-[16%] sm:mt-[12%]"
                 />
        </div>   
        <div class=" sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-8 ">
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="The project pitch asked us to 'communicate a piece of the ongoing debate around Greenland, Denmark and USA's current government's interest i Greenland's unique location and political situation'. We got to choose the direction, political perspective and focus. And let's face it, as a native Dane, with very little knowledge about Greenland, I am part of the systemic problem. Much of my research was spent, trying to understand the wishes and needs of the Greenlandic youth. I soon discovered how much media-noise is surrounding this topic, and how little of it, came from Greenland."
                class="sm:mx-[4%] sm:mt-[10%]"
                 />
        </div>   
        <div class=" sm:col-span-6 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[12] ">
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="I wanted, first of all, to create something, that could help inspire or comfort young people. This little story is my attempt to build a bridge between young people growing up on Greenland and Denmark, to increase the sympathy and nuances in this debate."
                class="sm:mx-[4%] sm:mt-[10%]"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="I chose this platform, to make it educational and accesable. In my visual research on 'Experience Sites', I was recommended 'The Boat' - a graphic novel, in a website format. I really wanted to tryout this format."
                class="sm:mx-[4%]"
                 />
        </div>   
    <!-- <ProjectVideoCom
            videoUrl="/videos/tunniit/tunniit_scroll_through (1).mp4"
            type="video/mp4"
            title="Site_scroll_through"
        /> -->
    </div>

</template>