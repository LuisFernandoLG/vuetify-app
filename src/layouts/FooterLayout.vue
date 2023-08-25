<template>
  <v-footer border>
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ getCurrentYear() }} — <strong>Luis López</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { getCurrentYear } from '@/helpers/dateUtils.js'
</script>
