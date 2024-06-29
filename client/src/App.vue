<script setup lang="ts">
import {getCurrentInstance, onMounted, ref} from 'vue';
import NavBar from './components/NavBar.vue'
import Card from 'primevue/card';
const cards = ref();
const apiBasePath = getCurrentInstance()?.appContext.config.globalProperties.apiBasePath;
onMounted( async () => {
  const response = await fetch(`${apiBasePath}/cards`);
  cards.value = await response.json();
})

</script>

<template>
  <NavBar style="height: 10%;"></NavBar>
  <div class="card-container">
    <Card v-for="card in cards" style="width: 15rem; height: 20%;">
      <template #title>
        {{ card.title }}
      </template>
      <template #content>
        {{ card.content }}
      </template>
    </Card>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.card-container {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
