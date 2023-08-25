<template>
  <v-card class="pa-5 ma-5 " >
    <v-row>
      <v-col v-for="n in 50" :key="n" cols="12" sm="6" md="4" lg="2">
        <v-card>
          <v-img
            aspect-ratio="16/9"
            :src="`https://picsum.photos/300?image=${n * 2 * 1}`"
            :lazy-src="`https://picsum.photos/20?image=${n * 2 * 1}`"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
