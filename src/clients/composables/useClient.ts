import { ref, watch } from "vue";
import { Client } from "@/clients/interfaces/client-interface";
import { useQuery } from "@tanstack/vue-query";
import clientsApi from "@/api/clients-api";

const useClient = (id: number) => {
  const getClient = async (id: number): Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
  };

  const client = ref<Client>();
  const { isLoading, data } = useQuery(["client", id], () => getClient(id));

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
  };
};

export default useClient;
