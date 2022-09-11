<template>
  <q-card class="bg-transparent">
    <q-card-section tag="h2"> My Tech Stack </q-card-section>

    <!-- <q-card-section class="flex"> -->
    <!-- Frontend -->
    <q-card-section class="flex q-pa-none">
      <!-- <q-item tag="h2"> Frontend </q-item> -->
      <q-item
        v-for="(logo, index) in frontend"
        :key="index"
      >
        <q-avatar square>
          <q-img
            :src="`../logos/${logo.src}`"
            no-native-menu
            :ratio="1"
            img-class="filter"
          />
        </q-avatar>
        <q-tooltip class="bg-transparent">
          <q-card>
            <q-item class="text-h2">
              {{ logo.name }}
            </q-item>
            <q-item class="text-body1">
              {{ logo.description }}
            </q-item>
          </q-card>
        </q-tooltip>
      </q-item>
      <!-- </q-card-section> -->

      <!-- Backend -->
      <!-- <q-card-section class="flex q-pa-none"> -->
      <!-- <q-item tag="h2"> Backend </q-item> -->
      <q-item
        v-for="(logo, index) in backend"
        :key="index"
      >
        <q-avatar square>
          <q-img
            :src="`../logos/${logo.src}`"
            no-native-menu
            :ratio="1"
            img-class="filter"
          />
        </q-avatar>
        <q-tooltip class="bg-transparent">
          <q-card>
            <q-item class="text-h2">
              {{ logo.name }}
            </q-item>
            <q-item class="text-body1">
              {{ logo.description }}
            </q-item>
          </q-card>
        </q-tooltip>
      </q-item>
      <!-- </q-card-section> -->

      <!-- Other -->
      <!-- <q-card-section class="flex q-pa-none"> -->
      <!-- <q-item tag="h2"> Other stuff </q-item> -->
      <q-item
        v-for="(logo, index) in other"
        :key="index"
      >
        <q-avatar square>
          <!-- :src="logo.src" -->
          <!-- <q-img
            :src="`../assets/${logo.name}.svg`"
            no-native-menu
            :ratio="1"
            img-class="filter"
          /> -->
          <q-img
            :src="`../logos/${logo.src}`"
            no-native-menu
            :ratio="1"
            img-class="filter"
          />
        </q-avatar>
        <q-tooltip class="bg-transparent">
          <q-card>
            <q-item class="text-h2">
              {{ logo.name }}
            </q-item>
            <q-item class="text-body1">
              {{ logo.description }}
            </q-item>
          </q-card>
        </q-tooltip>
      </q-item>
    </q-card-section>
    <!-- </q-card-section> -->
  </q-card>
</template>

<script setup lang="ts">
import { frontend, backend, other } from 'src/technologies'
</script>

<style lang="scss" scoped>
:deep(.filter) {
  filter: grayscale(90%);
}
.q-item {
  color: $grey-3;
}

.q-card {
  background-color: $primary-mid;
}
</style>
