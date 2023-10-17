<script setup lang="ts">
import ClientsListComponent from "@/clients/components/ClientsListComponent.vue";
import { useClients } from "@/clients/composables/useClients";
import PaginationComponent from "@/clients/components/PaginationComponent.vue";

const { isLoading, clients, currentPage, totalPages, getPage } = useClients();
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <ClientsListComponent :clients="clients" />
    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      @pageChanged="getPage"
    />
  </div>
</template>
