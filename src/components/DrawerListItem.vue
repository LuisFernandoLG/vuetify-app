<script setup>
defineProps({
  color: {
    type: String,
    default: 'gray',
  },
  title: {
    type: String,
    default: 'preview',
  },
  totalNotes: {
    type: Number,
    default: 0,
  },
  value: {
    type: String,
    default: 'preview',
  },
})
</script>

<template>
  <v-list-item :title="title" :value="`${value}-${title}`">
    <template v-slot:prepend>
      <v-icon :color="color">mdi-circle</v-icon>
    </template>
  </v-list-item>
</template>
