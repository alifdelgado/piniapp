import { useQuery } from "@tanstack/vue-query";
import clientsApi from "@/api/clients-api";
import { Client } from "@/clients/interfaces/client-interface";
import { useClientsStore } from "@/store/clients-store";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";

export const useClients = () => {
  const getClients = async (page: number): Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
    return data;
  };

  const store = useClientsStore();
  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(["clients?_page=", currentPage], () =>
    getClients(currentPage.value)
  );

  watch(data, (clients) => {
    if (clients) {
      store.setClients(clients);
    }
  });

  return {
    clients,
    currentPage,
    isLoading,
    totalPages,

    getPage(page: number) {
      store.setPage(page);
    },

    // totalPageNumbers: computed(() =>
    //   [...new Array(totalPages.value)].map((_, i) => i + 1)
    // ),
  };
};
