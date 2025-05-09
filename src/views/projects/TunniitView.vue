<script setup>
import { ref } from 'vue';
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
</script>


<template>
 <div class="absolute grid grid-cols-1 grid-rows-auto gap-[0.4%] sm:grid-cols-10 sm:grid-rows-[repeat(30,minmax(10vw,auto))] sm:gap-0">
   <!--Images and videos-->
    <div class="row-start-1 col-start-1 col-span-1 row-start-1 justify-items-center sm:justify-items-start  sm:row-start-1 sm:col-span-4 sm:col-start-1 sm:h-[20vw]  sm:row-span-2 sm:row-start-2">
            <img src="/images/tunniit/tunniitSketch1.png" class="w-[80%] mt-[4%] sm:w-full object-cover"/>
        </div>
        <div class="row-start-5 sm:col-span-4 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-4 sm:justify-items-center">
            <img src="/images/tunniit/moodboard.jpg" class="sm:w-[76%] object-cover"/>
        </div>
        <div class="row-start-3 sm:col-span-5 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-4 sm:justify-items-end">
            <img src="/images/tunniit/tunniitSketch3.png" class="sm:w-[100%] object-cover"/>
        </div>
        <div class="sm:col-span-5 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-9 sm:justify-items-end">
            <img src="/images/tunniit/tunniitSketch2.png" class="sm:w-[90%] object-cover"/>
        </div>
        <div class="row-start- sm:col-span-4 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-7 sm:justify-items-center">
            <img src="/images/tunniit/theBoat.png" class="sm:w-[86%] object-cover"/>
        </div>
        <div class="justify-items-center sm:col-span-4 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[12] sm:justify-items-end">
            <img src="/images/tunniit/zoomout2.png" class="w-[90%] sm:w-[86%] object-cover"/>
        </div>
        <div class="sm:col-span-4 sm:col-start-6 sm:h-[20vw] sm:row-span-2 sm:row-start-[15] sm:justify-items-center">
            <img src="/images/tunniit/screen11.png" class="w-0 sm:w-[86%] object-cover"/>
        </div>
        <div class="sm:col-span-8 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[19] sm:justify-items-center">
            <ProjectVideoCom
            videoUrl="/videos/tunniit/tunniit_scroll_through (1).mp4"
            type="video/mp4"
            controls="true"
            title="Site_scroll_through"/>
        </div>
        <div class="justify-items-end sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[28] sm:justify-items-center">
            <img src="/images/tunniit/screen1.png" class="w-[80%] sm:w-[98%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[28] sm:justify-items-center">
            <img src="/images/tunniit/screen3.png" class="w-[80%] sm:w-[98%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[28] sm:justify-items-center">
            <img src="/images/tunniit/screen4.png" class="sm:w-[98%] object-cover"/>
        </div>
        <div class="justify-items-end sm:col-span-3 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[30] sm:justify-items-center">
            <img src="/images/tunniit/screen5.png" class="w-[80%] sm:w-[98%] sm:mt-[-6%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[30] sm:justify-items-center">
            <img src="/images/tunniit/screen6.png" class="w-[80%] sm:w-[98%] sm:mt-[-6%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-8 sm:h-[20vw] sm:row-span-2 sm:row-start-[30] sm:justify-items-center">
            <img src="/images/tunniit/screen7.png" class="sm:w-[98%] sm:mt-[-6%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[32] sm:justify-items-center">
            <img src="/images/tunniit/screen8.png" class="sm:w-[98%] sm:mt-[-12%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[32] sm:justify-items-center">
            <img src="/images/tunniit/screen9.png" class="sm:w-[98%] sm:mt-[-12%] object-cover"/>
        </div>
        <div class="sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-[32] justify-items-center">
            <img src="/images/tunniit/screen13.png" class="w-[90%] sm:w-[98%] sm:mt-[-12%] object-cover"/>
        </div>

        <!--TEXT-->
        <div class="row-start-2 sm:col-span-5 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-2">
           
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
        <div class="row-start-6 sm:col-span-3 sm:col-start-7 sm:h-[20vw] sm:row-span-2 sm:row-start-6 ">
            <ProjectTextCom
                title="graphic novel"
                textType="description"
                textContent="// Moodboard"
                class="sm:ml-[16%] sm:mt-[12%]"
                 />
        </div>   
        <div class="row-start-4 sm:col-span-5 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-8 ">
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="The project pitch asked us to 'communicate a piece of the ongoing debate around Greenland, Denmark and USA's current government's interest i Greenland's unique location and political situation'. We got to choose the direction, political perspective and focus. And let's face it, as a native Dane, with very little knowledge about Greenland, I am part of the systemic problem. Much of my research was spent, trying to understand the wishes and needs of the Greenlandic youth. I soon discovered how much media-noise is surrounding this topic, and how little of it, came from Greenland."
                class="mx-[4%] sm:mt-[10%]"
                 />
        </div>   
        <div class="row-start-9 sm:col-span-6 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[12] ">
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="I wanted, first of all, to create something, that could help inspire or comfort young people. This little story is my attempt to build a bridge between young people growing up on Greenland and Denmark, to increase the sympathy and nuances in this debate."
                class="mx-[4%] sm:mt-[10%]"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="I chose this platform, to make it educational and accesable. In my visual research on 'Experience Sites', I was recommended 'The Boat' - a graphic novel, in a website format. I really wanted to tryout this format."
                class="mx-[4%]"
                 />
        </div>   
        <div class="row-start-[17] sm:col-span-6 sm:col-start-5 sm:h-[20vw] sm:row-span-2 sm:row-start-[16] ">
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="I chose to work with the parallax scroll effect to tell the story and let the reader control the speed and focus of every frame. The opening uses 'shards', instead of traditional comic squares, to create depth. The dream-scene under water, scrolls way slower, than the rest, to create the feeling of resistance and struggle. "
                class="mx-[4%] sm:mt-[10%]"
                 />
            
        </div>  
        <div class="row-start-[13] sm:col-span-7 sm:col-start-2 sm:h-[20vw] sm:row-span-2 sm:row-start-[23] ">
            <ProjectTextCom
                title="graphic novel"
                textType="description"
                textContent="// Scroll through the story"
                class="sm:mt-[6%]"
                 
                />
        </div> 
        <div class="row-start-[22] sm:col-span-7 sm:col-start-1 sm:h-[20vw] sm:row-span-2 sm:row-start-[23] ">
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="The story is about a young inuk woman, chosing to embrace her culture and identity, through the traditional art of 'Tunniit' - a tattoo style rooted in the inuit culture. Celebrating womanhood and a  symbol of the youth's fight for equality and decolonization from Denmark. "
                class="mx-[4%] sm:mt-[10%]"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="The dream scene under water, shows Qivi meeting the Mother of the Ocean, Sedna, who protects the ocean and it's animals. She has the temperament of the ocean and keeps people accountable, when they mistreat nature. She is a very strong female character in inuit mythology, wrapping her hair around travelers, as they try to make peace with her. She sets Qivi free when she stops fearing her history and culture. "
                class="mx-[4%]"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="She wakes up a new person, a woman, proud of her community and heritage. Ready for the future."
                class="mx-[4%]"
                 />
            
        </div>   
        <div class=" sm:col-span-7 sm:col-start-4 sm:h-[20vw] sm:row-span-2 sm:row-start-[34] ">
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="It was important to me, that inuit readers could relate to the main character, and that she was portrayed as strong and beautiful. Shaping her own identity and future. "
                class="mx-[4%]"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="body"
                textContent="I called her 'Qivi' - short for 'Qivittoq', meaning someone who wanders into the unknown, because they can't fit into the given standards, creating a new path. Qivi in this context means 'bravery'."
                class="mx-[4%]"
                 />
            <ProjectTextCom
                title="graphic novel"
                textType="description"
                textContent="//February 2025"
                class="sm:mx-[4%]"
                 />
            
        </div>   
        <div class="mx-[4%] sm:col-span-9 sm:col-start-1 sm:h-[10vw] sm:row-span-1 sm:row-start-[36] ">
           <p class="font-vazirmatn text-descriptionSizeMobile sm:text-descriptionSize sm:ml-[4%]">//References: <br> //The Boat: <a href="https://www.sbs.com.au/theboat/" target="_blank" class="hover:underline hover:text-lightContrast">https://www.sbs.com.au/theboat/</a>
             // Milik Publishing:<a href="https://milik.gl/" target="_blank" class="hover:underline hover:text-lightContrast"> https://milik.gl/</a> 
             // CBC on Inuit tattoos:  <a href="https://www.cbc.ca/player/play/video/1.6973774" target="_blank" class="hover:underline hover:text-lightContrast">https://www.cbc.ca/player/play/video/1.6973774</a> 
             // Aka Hansen: <a href="https://www.instagram.com/akahansen/?hl=da" target="_blank" class="hover:underline hover:text-lightContrast">https://www.instagram.com/akahansen/?hl=da </a>
             // Greenlandic Myths, Visit Greenland: <a href="https://visitgreenland.com/articles/greenlands-myths-legends/" target="_blank" class="hover:underline hover:text-lightContrast">https://visitgreenland.com/articles/greenlands-myths-legends/</a> </p>
            
        </div>   

    </div>

</template>