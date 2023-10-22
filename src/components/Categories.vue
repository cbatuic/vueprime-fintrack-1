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
