<script setup>
import { ref } from 'vue'
import DrawerPersonalLists from './containers/DrawerPersonalLists.vue'
import DrawerDefaultLists from './containers/DrawerDefaultLists.vue'
import DrawerHeader from './ui/DrawerHeader.vue'
import DrawerTagsList from './containers/DrawerTagsList.vue'

const emit = defineEmits(['selectNoteList'])

defineProps({
  noteLists: {
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

const isOpened = ref(false)

const selectedTags = ref([])

const handleDrawer = (value) => {
  isOpened.value = value
}

const handleOnSelectList = (list) => {
  emit('selectNoteList', list)
}
</script>

<template>
  <v-navigation-drawer rail expand-on-hover @mouseenter="handleDrawer(true)" @mouseleave="handleDrawer(false)">
    <v-list>
      <v-list nav>
        <DrawerHeader :isOpened="isOpened" title="Menu" />
        <DrawerDefaultLists :is-opened="isOpened" />
        <v-divider />
        <DrawerPersonalLists @handleOnSelectList="handleOnSelectList" :is-opened="isOpened" :noteLists="noteLists" />
        <v-list-item density="compact" prepend-icon="mdi-plus" title="Add new list" value="new-list" rounded="sm" />
        <DrawerTagsList :isOpened="isOpened" :tags="tags" :selectedTags="selectedTags" />
        <v-divider />
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>
