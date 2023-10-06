<script setup lang="ts">
import PiniaIcon from "./shared/components/icons/PiniaIcon.vue";
</script>

<template>
  <PiniaIcon />
  <nav>
    <RouterLink to="/">Counter Store</RouterLink>
    <RouterLink :to="{ name: 'counter-setup' }">Counter Setup</RouterLink>
  </nav>
  <RouterView />
</template>

<style setup>
nav {
  display: flex;
  justify-content: space-evenly;
}

nav a:hover {
  text-decoration: underline;
}
</style>
