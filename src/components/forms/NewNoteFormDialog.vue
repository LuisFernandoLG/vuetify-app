<script setup>
import { initialTags } from '@/mockups/notes'
import { ref } from 'vue'
import { getCurrentYear } from '../../helpers/dateUtils'
const emit = defineEmits(['addNote'])

const getInitialFormState = () => {
  return {
    title: '',
    content: '',
    tags: [],
    color: '#ffffff',
  }
}

const tags = ref(initialTags)
const dialog = ref(false)
const form = ref(getInitialFormState())

const handelSubmit = () => {
  const data = {
    ...form.value,
    date: getCurrentYear(),
  }
  emit('addNote', data)
  dialog.value = false
  form.value = getInitialFormState()
}
</script>

<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn prepend-icon="mdi-plus" v-bind="props"> New note </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">New Note</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="form.title" label="Title*" required></v-text-field>
              <v-textarea v-model="form.content" label="Content" required></v-textarea>
              <v-chip-group gap="1" column multiple v-model="form.tags">
                <span class="text-h6">Tags</span>
                <v-divider class="my-2" />
                <v-chip
                  v-for="tag in tags"
                  :value="tag.name"
                  :key="tag.id"
                  filter
                  variant="outlined"
                >
                  {{ tag.name }}
                </v-chip>
              </v-chip-group>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-color-picker v-model="form.color" hide-inputs></v-color-picker>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="handelSubmit"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
