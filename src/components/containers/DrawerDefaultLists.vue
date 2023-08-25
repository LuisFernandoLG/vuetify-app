<script setup>
import { ref } from 'vue'

defineProps({
  isOpened: {
    type: Boolean,
    default: false,
  },
})

const items = ref([
  {
    id: 1,
    density: 'compact',
    prependIcon: 'mdi-chevron-double-right',
    title: 'Upcoming',
    value: 'myFiles',
    rounded: 'sm',
  },

  {
    id: 2,
    density: 'compact',
    prependIcon: 'mdi-format-list-bulleted',
    title: 'Today',
    value: 'today',
    rounded: 'sm',
  },
  {
    id: 2,
    density: 'compact',
    prependIcon: 'mdi-calendar-month',
    title: 'Calendar',
    value: 'calendar',
    rounded: 'sm',
  },

  {
    id: 3,
    density: 'compact',
    prependIcon: 'mdi-note',
    title: 'Sticky Notes',
    value: 'sticky-notes',
    rounded: 'sm',
  },
])
</script>

<template>
  <v-list-subheader :class="{ visivility: !isOpened }">Tasks</v-list-subheader>
  <v-list-item
    v-for="item in items"
    :key="item.id"
    :title="item.title"
    :prepend-icon="item.prependIcon"
    :value="item.value"
    :rounded="item.rounded"
    :dense="item.density"
  />
</template>
