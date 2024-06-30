<script setup lang="ts">
import {getCurrentInstance, onMounted, ref} from 'vue';
import NavBar from './components/NavBar.vue'
import {useVisibleStore} from "./store/visible.ts";

const visibleStore = useVisibleStore();
const cards = ref();
const apiBasePath = getCurrentInstance()?.appContext.config.globalProperties.apiBasePath;
const successVisible = ref(false);
const errorVisible = ref(false);
const card = {
  title: '',
  content: ''
}

onMounted( async () => {
  const response = await fetch(`${apiBasePath}/cards`);
  cards.value = await response.json();
})

const saveCard = async () => {
  console.log(card);
  const response = await fetch(`${apiBasePath}/cards/`, {
    method: 'POST',
    body: JSON.stringify(card)
  });
  visibleStore.visible = false;
  if (response.ok) {
    successVisible.value = true;
  } else {
    errorVisible.value = true
  }
}
const clearCard = () => {
  card.title = '';
  card.content = '';
}
</script>

<template>
  <NavBar style="height: 10%;"></NavBar>
  <div class="message-container">
    <Message icon="pi pi-check-circle" style="width: 20rem" v-if="successVisible" severity="success" :closable="true" v-on:close="successVisible = false">Card created successfully</Message>
    <Message icon="pi pi-times-circle" style="width: 20rem" v-if="errorVisible" severity="error" :closable="true" v-on:close="errorVisible = false">Error while creating card</Message>
  </div>
  <Dialog v-model:visible="visibleStore.visible" modal header="New Card" :style="{width: '20rem', height: '20rem'}" v-on:afterHide="clearCard">
    <div class="input-with-label">
      <label for="title">Title</label>
      <InputText id="title" placeholder="title away" v-model="card.title"/>
    </div>
    <div class="input-with-label">
      <label for="content">Content</label>
      <InputText id="content" placeholder="content away" v-model="card.content"/>
    </div>
    <Button label="Save" severity="info" @click="saveCard()"/>
  </Dialog>

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
.input-with-label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.message-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: end;
  padding-top: 1rem
}
</style>
