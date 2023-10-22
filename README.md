# Vue 3 + Vite + PrimeVue

### Setup
```bash
$ npm init vite@latest vueprime-fintrack-1 -- --template vue
$ cd vueprime-fintrack-1
$ npm install
$ npm install primereact primeicons
$ npm run dev
```

### Display
./main.js
```js
import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App).mount('#app')
```

./App.vue
```html
<script setup>
import Categories from './components/Categories.vue'
</script>

<template>
  <Categories/>
</template>

<style scoped></style>
```

./components/Categories.vue
```html
<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const categories = [
  {
    id: 1,
    name: "Allowance",
    description: "From Parents",
  },
  {
    id: 2,
    name: "Donation",
    description: "From Friends",
  }
];
</script>

<template>
  <div>
    <h1>Categories (Display)</h1>
    <DataTable :value="categories" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
    </DataTable>
  </div>
</template>

<style scoped></style>
```

### Template

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
