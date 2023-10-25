<script setup lang="ts">
import useClient from "@/clients/composables/useClient";
import { useMutation } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import type { Client } from "@/clients/interfaces/client-interface";
import clientsApi from "@/api/clients-api";
import { watch } from "vue";

const route = useRoute();
const { client, isLoading } = useClient(+route.params.id);

const updateClient = async (client: Client): Promise<Client> => {
  const { data } = await clientsApi.patch<Client>(
    `/clients/${client.id}`,
    client
  );
  return data;
};

const clientMutation = useMutation(updateClient);

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000);
});
</script>
<template>
  <h3
    class="py-2 text-center text-white bg-blue-300 rounded"
    v-if="clientMutation.isLoading.value"
  >
    Saving...
  </h3>
  <h3
    class="py-2 text-center text-white bg-blue-300 rounded"
    v-if="clientMutation.isSuccess.value"
  >
    Saved
  </h3>
  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form
      action=""
      class="flex flex-col w-full space-y-2"
      @submit.prevent="clientMutation.mutate(client)"
    >
      <div>
        <input
          type="text"
          name="name"
          class="w-full p-2 border rounded focus:outline-none"
          id="name"
          placeholder="Name"
          v-model="client.name"
        />
      </div>
      <div>
        <input
          type="text"
          name="address"
          class="w-full p-2 border rounded focus:outline-none"
          id="address"
          placeholder="Address"
          v-model="client.address"
        />
      </div>
      <div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-800"
          :disabled="clientMutation.isLoading.value"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
