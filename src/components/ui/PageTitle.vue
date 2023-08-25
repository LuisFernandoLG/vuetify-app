<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Title',
  },
})
</script>

<template>
  <h1 class="text-h4 font-weight-black">{{ title }}</h1>
</template>
