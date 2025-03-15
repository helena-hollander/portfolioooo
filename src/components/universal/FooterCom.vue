<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<div class="grid grid-cols-2 text-darkest font-trispace text-2xl mb-[8%] mt-[-8%]">
    <RouterLink to="/" class="ml-[10%]">home</RouterLink>
    <RouterLink to="/" class="mr-[10%] justify-self-end">next</RouterLink>
</div>

</template>