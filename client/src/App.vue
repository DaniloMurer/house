<script setup lang="ts">
import {getCurrentInstance, onMounted, ref} from 'vue';
import NavBar from './components/NavBar.vue'
import {useVisibleStore} from "./store/visible.ts";

const visibleStore = useVisibleStore();
const cards = ref();
const apiBasePath = getCurrentInstance()?.appContext.config.globalProperties.apiBasePath;

const card = {
  title: '',
  content: ''
}
let messages : any = ref([]);

onMounted( async () => {
  const response = await fetch(`${apiBasePath}/cards`);
  cards.value = await response.json();
})

const saveCard = async () => {
  const response = await fetch(`${apiBasePath}/cards/`, {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      "content-type": "application/json"
    }
  });
  visibleStore.visible = false;
  if (response.ok) {
    messages.value.push({index: messages.value.length, statusCode: response.status, content: "Card created successfully.", severity: 'success'});
  } else {
    const body = await response.json();
    messages.value.push({index: messages.value.length, statusCode: response.status, content: `${body.message.join(';')}`, severity: 'error'});
  }
}

const clearCard = () => {
  card.title = '';
  card.content = '';
}
</script>

<template>
  <div class="main-container">
    <NavBar style="height: inherit; grid-area: header" ></NavBar>
    <div class="message-container">
      <Message icon="pi pi-times-circle"  v-for="message in messages" :severity="message.severity" :closable="true">Message: {{message?.content}} Code: {{message?.statusCode}}</Message>
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
      <Card v-for="card in cards" style="width: 15rem; height: 10rem;">
        <template #title>
          {{ card.title }}
        </template>
        <template #content>
          {{ card.content }}
        </template>
      </Card>
    </div>
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
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  grid-area: main;
}
.input-with-label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.message-container {
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: end;
  grid-area: sidebar;
  padding: 1rem;
}

.main-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 10% 40%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
  padding: 0.25rem;
  position: relative;
}
.test-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  grid-area: footer;
}
</style>
