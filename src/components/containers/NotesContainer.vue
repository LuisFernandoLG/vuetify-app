<script setup>
import { timestampToDateDDMMYYYY } from '@/helpers/dateUtils'
import { computed } from 'vue'

const props = defineProps({
  noteLists: {
    type: Array,
    required: true,
    default: () => [],
  },
  selectedList: {
    type: Object,
    required: false,
    default: null,
  },
})

const notes = computed(() => {
  if (props.selectedList) return props.selectedList.notes
  return props.noteLists.flatMap((list) => list.notes)
})
</script>

<template>
  <v-col v-for="note in notes" :key="note.id" cols="12" sm="6" md="4" xl="2" d-flex color="red">
    <v-badge
      :icon="`${note.attached ? 'mdi-pin' : ''}`"
      :color="`${note.attached ? '' : 'transparent'}`"
      style="width: 100%"
    >
      <v-responsive aspect-ratio="16 / 9">
        <v-card :color="note.color" style="height: 15rem">
          <v-card-title>{{ note.title }}</v-card-title>
          <v-card-text>{{ note.content }}</v-card-text>
          <v-card-text>Due to: {{ timestampToDateDDMMYYYY(note.date) }}</v-card-text>
          <v-card-actions>
            <v-chip v-for="tag in note.tags" :key="tag" class="me-1">{{ tag }}</v-chip>
          </v-card-actions>
        </v-card>
      </v-responsive>
    </v-badge>
  </v-col>
</template>
