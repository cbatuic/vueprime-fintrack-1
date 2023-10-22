<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const categories = ref([
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
]);

const editingCategory = ref(null);

const editCategory = (category) => {
  editingCategory.value = { ...category.data }; // Set editingCategory to the selected category's data
};

const saveEditedCategory = () => {
  if (editingCategory.value) {
    // Update the category data with the edited values
    const index = categories.value.findIndex((c) => c.id === editingCategory.value.id);
    categories.value[index].name = editingCategory.value.name;
    categories.value[index].description = editingCategory.value.description;
    editingCategory.value = null;
  }
};

const cancelEdit = () => {
  editingCategory.value = null;
};

const deleteCategory = (category) => {
  // Find the index of the category
  const index = categories.value.findIndex((c) => c.id === category.id);
  // Remove the category from the categories array
  categories.value.splice(index, 1);
};
</script>

<template>
  <div>
    <h1>Categories</h1>
    <DataTable :value="categories" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column header="Actions">
        <template #body="rowData">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-info" @click="editCategory(rowData)" />
          <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="deleteCategory(rowData)" />
        </template>
      </Column>
    </DataTable>

    <div v-if="editingCategory">
      <h2>Edit Category</h2>
      <form @submit="saveEditedCategory">
        <div>
          <label for="editedName">Name:</label>
          <InputText id="editedName" v-model="editingCategory.name" />
        </div>
        <div>
          <label for="editedDescription">Description:</label>
          <InputText id="editedDescription" v-model="editingCategory.description" />
        </div>
        <div>
          <Button label="Save" icon="pi pi-check" class="p-button-success" type="submit" />
          <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="cancelEdit" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
