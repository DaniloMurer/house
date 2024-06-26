<script setup lang="ts">
const route = useRoute()
function fetchData() : any {
  console.log($fetch('/api/test').then(data => {console.log(data)}))
}
</script>

<template>
  <div class="flex-container-center max-h-screen">
    <UButton @click="fetchData()" style="">Button</UButton>
  </div>
</template>
