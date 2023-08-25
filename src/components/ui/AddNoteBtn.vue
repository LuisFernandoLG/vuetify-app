<script setup>
import NewNoteFormDialog from '../forms/NewNoteFormDialog.vue'
const emit = defineEmits(['addNote'])

const handelSubmit = (note) => {
  emit('addNote', note)
}
</script>

<template>
  <NewNoteFormDialog @addNote="handelSubmit" />
</template>
