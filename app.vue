<script setup lang="ts">
function fetchData() : any {
  console.log($fetch('/api/test').then(data => {console.log(data)}))
}
</script>
<template>
  <div>
    <!--<NuxtRouteAnnouncer />-->
    <!--<NuxtWelcome />-->
    <UButton @click="fetchData()">Button</UButton>
  </div>
</template>
