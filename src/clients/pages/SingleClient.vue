<script setup lang="ts">
import useClient from "@/clients/composables/useClient";
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";

const route = useRoute();
const router = useRouter();

const { client, isError, clientMutation, isUpdating, isErrorUpdating } =
  useClient(+route.params.id);

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000);
});

watch(isError, () => {
  if (isError.value) {
    router.replace({ name: "clients" });
  }
});
</script>
<template>
  <h3 class="py-2 text-center text-white bg-blue-300 rounded" v-if="isUpdating">
    Saving...
  </h3>
  <h3
    class="py-2 text-center text-white bg-blue-300 rounded"
    v-if="isErrorUpdating"
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
