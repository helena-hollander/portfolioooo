<script setup>
import { ref } from 'vue'
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
import ProjectLiveCodeCom from '@/components/projects/projectCards/ProjectLiveCodeCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';

</script>

<template>
<div class="grid">
    <ProjectScribbleCom
        scribbleUrl="/images/lola/projectionMapping_scribble.png"
        title="Projection Mapping"
        class="absolute rotate-90 self-start translate-x-[28%] translate-y-[124%] sm:rotate-0 sm:w-[80%] sm:translate-x-[24%] sm:top-[-20%]"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:w-[90%]">
        <ProjectImageCom imageUrl="/images/lola/lola_1.jpg" title="Lola" class="w-[70%] sm:w-[100%]"/>
        <div class="grid grid-rows-2 w-[70%] sm:w-[100%]">
            <ProjectTextCom
                textType="display"
                textContent="SOUNDRESPONSIVE FASHION"
                class="self-end"
             />
             <ProjectTextCom
                textType="description"
                textContent="Using p5.js mapper(); // projector // data input from Macbook.  "
                class="self-end sm:m-[4%]"
             />
        </div>
    </div>
    <div class="grid grid-cols-2 items-end gap-[6%] mt-[14%] sm:mt-0 sm:grid-cols-3">
        <ProjectImageCom imageUrl="/images/lola/lola_2.jpg" title="me_and_lola" class="w-[80%] justify-self-end sm:col-start-2"/>
        <ProjectImageCom imageUrl="/images/lola/lola_sketch.jpg" title="lola_sketch" class="col-start-2 sm:col-start-3"/>
    </div>
    <div class="w-[100%] px-[4%] sm:w-[76%] sm:mx-[6%] sm:px-0">
    <ProjectTextCom
        textType="body"
        textContent="Playing with projection mapping, we were asked to create a pattern for our beloved model ‘Lola’. The theme was ‘camouflage’, which we could interperate however we wanted. The design needed to use data input to evolve."
        class="mt-[8%] sm:mt-[4%]"
        />
    <ProjectTextCom
        textType="body"
        textContent="I wanted to create an animated piece of clothing, which reacted to sound and music. (Providing my classmates with free entertainment all week, as I had to test the code with live audio input.) And being the daughter of a hopeless romantic dad, who used to DJ when you had to turn physical records (!!), I chose the fashion era of the 70’s disco scene:"
        class="sm:mt-0"
        />
        <ProjectTextCom
        textType="body"
        textContent="Imagine a light up disco floor in the basement of some sticky disco bar. When it lights up it translates onto your clothing. And as is does, the pattern moves along with the beat, making you one with the music. Not a camouflage meant to hide you, but rather transform you into the Dancing Queen you were meant to be! "
        class="sm:mt-0"
        />
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-8 gap-[6%] mt-[14%] sm:mt-[6%] sm:ml-[6%] ">
        <ProjectImageCom imageUrl="/images/lola/lola_moodboard1.jpg" title="moodboard" class="w-0 h-0 sm:w-full sm:h-[100%] self-end sm:col-start-1 sm:col-span-3"/>
        <ProjectImageCom imageUrl="/images/lola/lola_moodboard2.jpg" title="moodboard" class="col-start-1 self-end sm:col-start-4 sm:col-span-3"/>
        <ProjectImageCom imageUrl="/images/lola/lola_moodboard3.jpg" title="moodboard" class="self-end sm:col-span-2"/>
    </div>
  
    <ProjectScribbleCom scribbleUrl="/images/lola/70s_scribble.png" title="70's babes" class="mt-[-66%] w-[24%] sm:w-[34%] sm:mt-[-38%] sm:justify-self-end sm:mr-[6%]"/>
 <div class="grid grid-cols-1 mt-[24%] w-[50%] aspect-[16/9] justify-self-center sm:w-[78%] sm:mt-[12%] relative">
  <ProjectLiveCodeCom class="w-full h-full z-10" />
</div>
    <div>
    <ProjectScribbleCom scribbleUrl="/images/lola/makesomenoise_scribble.png" title="Make Some Noise" class="justify-self-end w-[60%] mt-[-100%] z-20 relative sm:-rotate-90 sm:w-[30%] sm:mt-[-38%] sm:justify-self-start sm:translate-x-[-14%]"/>
    </div>
<ProjectTextCom
    textType="description"
    textContent="//p5.js sketch, using the audio input from you computer, to animate the circles. (Inspired by Vira Patt)"
/>
<div class="grid grid-cols-1 items-end gap-[6%] mt-[14%] sm:mt-0 sm:grid-cols-3">
        <ProjectVideoCom videoUrl="/videos/lola/lola_elevator.webm" type="video/webm" title="Lola model shot" class="w-[80%] h-[50vh] justify-self-center self-start sm:col-start-2"/>
        <ProjectVideoCom videoUrl="/videos/lola.webm" type="video/webm" title="Interface video" class="self-center h-[60%] sm:col-start-3"/>
    </div>
</div>
</template>