<script setup lang="ts">
import Button from 'primevue/button';
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Button>bztto</Button>
  <Accordion>acc</Accordion>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
