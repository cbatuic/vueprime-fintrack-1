<script setup>
import Categories from './components/Categories.vue'

const items = [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Categories",
          icon: "pi pi-fw pi-list",
          to: "/categories",
        },
        {
          label: "Login",
          icon: "pi pi-fw pi-user",
          to: "/login",
        },
      ];

</script>

<template>
    <div>
    <Menubar :model="items" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
