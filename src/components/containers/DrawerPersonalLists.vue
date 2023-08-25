<script setup>
import DrawerListItem from '../DrawerListItem.vue'
defineEmits(['handleOnSelectList'])

defineProps({
  isOpened: {
    type: Boolean,
    default: false,
  },
  noteLists: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <v-list-subheader :class="{ visivility: !isOpened }">Lists</v-list-subheader>

  <DrawerListItem
    v-for="list in noteLists"
    :key="list.id"
    :title="list.title"
    :color="list.color"
    :total-notes="list.totalNotes"
    @click="() => $emit('handleOnSelectList', list)"
  />
</template>
