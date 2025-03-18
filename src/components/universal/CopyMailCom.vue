<script setup>
import { ref } from 'vue'

const copyToClipboard = () => {
  // Create a textarea element to hold the text
  const textarea = document.createElement('textarea');
  textarea.value = 'helena.hollaender@gmail.com'; // Replace with your text

  // Make the textarea hidden
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand('copy');

  // Clean up - remove the textarea
  document.body.removeChild(textarea);

  // Optionally, provide feedback to the user
  alert('E-mail copied to clipboard: ' + textarea.value);
}
</script>

<template>
  <button @click="copyToClipboard">
    <img src="/images/scribbles/contact/scribbleMail.png" alt="Copy Email">
  </button>
</template>