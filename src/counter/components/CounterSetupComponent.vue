<script setup lang="ts">
import { useCounterSetupStore } from "@/store/counter-setup";

const counterStore = useCounterSetupStore();
</script>

<template>
  <div>
    <span>Counter: {{ counterStore.count }}</span>
    <span>Counter square: {{ counterStore.squareCount }}</span>
  </div>
</template>
