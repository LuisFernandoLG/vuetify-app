<script setup>
defineProps({
  isOpened: {
    type: Boolean,
    required: true,
    default: false,
  },
  title: {
    type: String,
    default: 'Menu',
  },
})
</script>

<template>
  <v-list-item :class="{ visivility: !isOpened }" density="compact">
    <v-container class="d-flex pa-0 justify-space-between align-center">
      <span class="text-h5">{{ title }}</span>
    </v-container>
  </v-list-item>
</template>
