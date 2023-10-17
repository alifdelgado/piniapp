<script setup lang="ts">
import { Client } from "../interfaces/client-interface";

interface Props {
  clients: Client[];
}

const { clients } = defineProps<Props>();
</script>

<template>
  <div>
    <div v-for="client in clients" :key="client.id">
      <RouterLink :to="{ name: 'single-client', params: { id: client.id } }">
        {{ client.name }}
      </RouterLink>
    </div>
  </div>
</template>
