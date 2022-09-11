<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <TheMenu />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TheMenu from 'src/components/TheMenu.vue'
</script>
