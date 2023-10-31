import { computed, ref, watch } from "vue";
import type { Client } from "@/clients/interfaces/client-interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import clientsApi from "@/api/clients-api";

const useClient = (id: number) => {
  const queryClient = useQueryClient();

  const getClient = async (id: number): Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
  };

  const updateClient = async (client: Client): Promise<Client> => {
    const { data } = await clientsApi.patch<Client>(
      `/clients/${client.id}`,
      client
    );
    const queries = queryClient
      .getQueryCache()
      .findAll(["clients?_page="], { exact: false });
    queries.forEach((query) => query.reset());

    return data;
  };

  const clientMutation = useMutation(updateClient);

  const client = ref<Client>();
  const { isLoading, data, isError, error } = useQuery(
    ["client", id],
    () => getClient(id),
    {
      retry: false,
    }
  );

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  return {
    client,
    isLoading,
    isError,
    error,
    clientMutation,
    isUpdating: computed(() => clientMutation.isLoading.value),
    isErrorUpdating: computed(() => clientMutation.isError.value),
  };
};

export default useClient;
