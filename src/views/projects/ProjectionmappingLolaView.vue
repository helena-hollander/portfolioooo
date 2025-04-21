<script setup>
import { ref } from 'vue'
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';

</script>

<template>
<div class="grid">
    <ProjectScribbleCom
        scribbleUrl="/images/lola/projectionMapping_scribble.png"
        title="Projection Mapping"
        class="absolute rotate-90 self-start translate-x-[28%] translate-y-[124%] sm:rotate-0 sm:w-[80%] sm:justify-self-start sm:top-[-20%]"
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
</div>
</template>