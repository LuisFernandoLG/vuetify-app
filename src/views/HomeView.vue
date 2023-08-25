<script setup>
import { ref } from 'vue'
import { initialNoteLists } from '@/mockups/notes'
import { computed } from 'vue'
import AddNoteBtn from '@/components/ui/AddNoteBtn.vue'
import DrawerApp from '@/components/DrawerApp.vue'
import PageTitle from '../components/ui/PageTitle.vue'
import NotesContainer from '@/components/containers/NotesContainer.vue'

const extractTagsFromList = (list) => {
  let tags = []
  list.notes.forEach((notes) => {
    notes.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })

  return tags
}

const noteLists = ref(initialNoteLists)
const selectedList = ref(initialNoteLists[0])

const tags = computed(() => {
  return extractTagsFromList(selectedList.value)
})

const selectNoteList = (list) => {
  selectedList.value = list
}

const addNote = (note) => {
  // console.log({ note })
  selectedList.value.notes.push(note)

  // // insert note in noteLists
  // noteLists.value.forEach((list) => {
  //   if (list.id === selectedList.value.id) {
  //     list.notes.push(note)
  //   }
  // })
}
</script>

<template>
  <DrawerApp :noteLists="noteLists" :tags="tags" @selectNoteList="selectNoteList" />
  <v-container class="mt-2">
    <v-row class="d-flex justify-space-between alignt-center my-2">
      <PageTitle :title="selectedList.title" />
      <AddNoteBtn @addNote="addNote" />
    </v-row>
    <v-row>
      <NotesContainer :noteLists="noteLists" :selectedList="selectedList" />
    </v-row>
  </v-container>
</template>
