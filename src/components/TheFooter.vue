<template>
  <q-footer class="flex items-center justify-center q-pa-sm">
    Copyleft © {{ actualYear }} Martin Romero
    <q-tooltip> Yes, I do live in the future 🚀</q-tooltip>
  </q-footer>
</template>

<script setup lang="ts">
const actualDate = new Date()
const actualYear = actualDate.getFullYear() + 1
</script>
<style lang="scss" scoped>
* {
  color: $primary-mid;
}
</style>
