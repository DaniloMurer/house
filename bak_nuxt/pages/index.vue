<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})
const route = useRoute()
function fetchData() : any {
  console.log($fetch('/api/test').then(data => {console.log(data)}))
}
</script>

<template>
  <div class="flex-container-center max-h-screen">
    <UButton @click="fetchData()" style="">Button</UButton>
    <p>This is some very cool text I wrote for you</p>
    <UTextarea></UTextarea>
  </div>
</template>
