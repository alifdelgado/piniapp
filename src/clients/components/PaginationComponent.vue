<script setup lang="ts">
import { ref, toRef, watch } from "vue";

interface Props {
  currentPage: number;
  totalPages: number;
}

interface Emits {
  (e: "pageChanged", page: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const currentPage = toRef(props, "currentPage");
const totalPages = toRef(props, "totalPages");

const totalPageNumber = ref<number[]>([]);
watch(
  totalPages,
  () => {
    totalPageNumber.value = [...new Array(totalPages.value)].map(
      (_, i) => i + 1
    );
  },
  { immediate: true }
);
</script>
<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center h-8 -space-x-px text-sm">
      <li>
        <button
          :disabled="currentPage === 1"
          @click="emits('pageChanged', currentPage - 1)"
          class="flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
      </li>
      <li v-for="number in totalPageNumber" :key="number">
        <button
          @click="emits('pageChanged', number)"
          :class="
            currentPage === number
              ? 'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          "
        >
          {{ number }}
        </button>
      </li>
      <li>
        <button
          :disabled="currentPage === totalPages"
          @click="emits('pageChanged', currentPage + 1)"
          class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>
