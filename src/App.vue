<script setup lang="ts">
import PiniaIcon from "./shared/components/icons/PiniaIcon.vue";
</script>

<template>
  <div class="w-1/3">
    <PiniaIcon />
    <nav id="navbar">
      <RouterLink to="/">Counter Store</RouterLink>
      <RouterLink :to="{ name: 'counter-setup' }">Counter Setup</RouterLink>
      <RouterLink :to="{ name: 'clients' }">Clients</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
