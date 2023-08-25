<script setup>
defineProps({
  isOpened: {
    type: Boolean,
    required: true,
    default: false,
  },
  title: {
    type: String,
    default: 'Tags',
  },
  selectedTags: {
    type: Array,
    required: true,
    default: () => [],
  },
  tags: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <v-list-item v-show="isOpened">
    <v-list-subheader :class="{ visivility: !isOpened }">{{ title }}</v-list-subheader>
    <v-chip-group gap="1" column multiple>
      <v-chip v-for="tag in tags" :key="`${tag}-`" filter variant="outlined">
        {{ tag }}
      </v-chip>
    </v-chip-group>
  </v-list-item>
</template>
