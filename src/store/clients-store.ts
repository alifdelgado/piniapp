import { defineStore } from "pinia";
import { ref } from "vue";
import { Client } from "../clients/interfaces/client-interface";

export const useClientsStore = defineStore("clientsStore", () => {
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);

  return {
    // State
    currentPage,
    totalPages,
    clients,

    // Getters
    setClients(newClients: Client[]) {
      clients.value = newClients;
    },

    setPage(newPage: number) {
      if (currentPage.value === newPage) return;
      if (newPage < 1) return;
      if (newPage > totalPages.value) return;

      currentPage.value = newPage;
    },

    // Actions
  };
});
