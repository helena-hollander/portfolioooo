<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
import ProjectLiveCodeCom from '@/components/projects/projectCards/ProjectLiveCodeCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';

</script>

<template>
<div class="lolaView grid">
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
                textContent="// p5.js mapper(); // projector // data input from Macbook.  "
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
  
    <ProjectScribbleCom scribbleUrl="/images/lola/70s_scribble.png" title="70's babes" class="mt-[-54%] w-[44%] sm:w-[34%] sm:mt-[-38%] sm:justify-self-end sm:mr-[6%]"/>
 <div class="pointerCursor grid grid-cols-1 mt-[24%] w-[50%] aspect-[16/9] justify-self-center sm:w-[78%] sm:mt-[12%] relative">
  <ProjectLiveCodeCom class=" w-full h-full z-10" />
</div>
    <div>
    <ProjectScribbleCom scribbleUrl="/images/lola/makesomenoise_scribble.png" title="Make Some Noise" class="justify-self-end w-[48%] mt-[-36%] z-20 relative sm:-rotate-90 sm:w-[30%] sm:mt-[-38%] sm:justify-self-start sm:translate-x-[-14%]"/>
    </div>
<ProjectTextCom
    textType="description"
    textContent="//p5.js sketch, using the audio input from you computer, to animate the circles. (Inspired by Vira Patt)"
    class="sm:mb-[10%]"
/>
<div class="grid grid-cols-1 items-end gap-[6%]  mt-[14%] sm:mt-0 sm:grid-cols-3 overflow-hidden">
        <ProjectVideoCom videoUrl="/videos/lola/lola_elevator2.mp4" type="video/mp4" title="Lola model shot" class="w-[76%] justify-self-center self-start sm:col-start-2 sm:justify-self-end"/>
        <ProjectVideoCom videoUrl="/videos/lola/lola_interface.mp4" type="video/mp4" title="Interface video" class="justify-self-center sm:col-start-3"/>
</div>
<ProjectScribbleCom
    scribbleUrl="/images/lola/lola_scribble.png" 
    title="Lola<3"   
    class="w-[46%] mt-[-148%] mx-[1%] pr-[0%] sm:w-[28%] sm:mt-[-16%] sm:justify-self-center sm:pr-[4%]"
/>
<div class="grid grid-cols-1 sm:grid-cols-2">
    <ProjectTextCom
        textType="description"
        class="sm:text-right col-start-1 sm:col-start-2"
        textContent="//Demo videos by Freja Marott. (Tak!)"
    />
    <ProjectImageCom imageUrl="/images/lola/lola_p5.jpg" title="lola_p5" class="w-[68%] justify-self-start mt-[8%] sm:mt-0 sm:w-[48%] row-start-2 sm:col-start-1 sm:row-start-1"/>
</div>
<ProjectTextCom
    textType="body"
    textContent="After much tweaking of the projection, Lola got dressed in three different colour combinations, a variation of stripes and a wavy knit-like pattern. The animation expanded depending on the vomlume of the audio input. Each seperate clothing item has it’s own mapped sketch in p5 mapper(); and renders live."
    class=" mt-[8%] mx-[6%] sm:mt-[4%] col-start-1 sm:w-[76%]"
/>
<ProjectTextCom
    textType="body"
    textContent="I can’t wait to see a future world rocking LED outfits (solar charged, of course) with music-driven patterns."
    class="mx-[6%] mb-[2%] col-start-1 sm:w-[76%]"
/>
<p class="text-bodySizeMobile mx-[6%] sm:text-bodySize">For more projection mapping fun, check out <RouterLink to="/generationhope"class="text-strongContrast hover:text-lightContrast hover:underline" >'Generation Hope x Thoravej 29'.</RouterLink></p>
<ProjectTextCom
    textType="description"
    textContent="// April 2025 // 'Projection Mapping' course by Stig Møller, DMJX, Copenhagen. // Parts of the interactive code has been edited with the help of AI."
    class=" sm:mb-[10%] col-start-1 my-[12%]"
/>
</div>
</template>
<style>
.lolaView{
  cursor: url('/images/cursor_blue.png'), auto;
}
/* Default cursor for the entire page */
/* Pointer cursor for clickable elements */
.lolaView a, /* Links */
.lolaView button, /* Buttons */
.lolaView .pointerCursor { /* Any custom class for clickable elements */
  cursor: url('/images/cursor_pink.png'), pointer !important;
}
/* Target all interactive elements within pointerCursor */
.lolaView .pointerCursor *,
.lolaView .pointerCursor canvas,
.lolaView .pointerCursor iframe,
.lolaView .pointerCursor video,
.lolaView .pointerCursor input,
.lolaView .pointerCursor select,
.lolaView .pointerCursor textarea {
  cursor: var(--cursor-pointer) !important;
}
</style>