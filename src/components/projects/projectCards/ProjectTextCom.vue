<script setup>
defineProps({
  textType: {
    type: String,
    required: true, // 'display' or 'body'
    validator: (value) => ['display', 'body'].includes(value),
  },
  textContent: {
    type: String,
    required: true,
  },
  textSize: {
    type: String,
    default: '', // Optional: Allows overriding the default size
  },
  textColor: {
    type: String,
    default: 'text-darkest', // Default Tailwind class for text color
  },
});
</script>

<template>
<div class="grid">
  <p
    :class="[
      textType === 'display' ? 'font-bold font-vazirmatn text-displaySizeMobile m-[2%] sm:text-displaySize sm:m-[4%]' : 'text-bodySizeMobile mt-[2%] sm:text-bodySize',
      textColor,
      textSize
    ]"
  >
    {{ textContent }}
  </p>
</div>
</template>