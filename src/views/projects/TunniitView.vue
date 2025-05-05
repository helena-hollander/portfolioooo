<script setup>
import { ref } from 'vue';
import ProjectImageCom from '@/components/projects/projectCards/ProjectImageCom.vue';
import ProjectTextCom from '@/components/projects/projectCards/ProjectTextCom.vue';
import ProjectVideoCom from '@/components/projects/projectCards/ProjectVideoCom.vue';
import ProjectScribbleCom from '@/components/projects/projectCards/ProjectScribbleCom.vue';
</script>


<template>
    <div class="w-full">
        <ProjectVideoCom
            videoUrl="/videos/tunniit/tunniit_scroll_through (1).mp4"
            type="video/mp4"
            title="Site_scroll_through"
        />
    </div>

</template>