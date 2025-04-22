<script setup>
defineProps ({
    scribbleUrl:{
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    }

});
</script>
<template>
<img :src="scribbleUrl" :alt="text" class="">
</template>