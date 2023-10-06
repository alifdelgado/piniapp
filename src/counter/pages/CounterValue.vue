<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterOptionsStore } from "@/store/counter-store";

const counterStore = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(counterStore);
const { increment, incrementBy } = counterStore;
</script>
<template>
  <h1>Pinia Options</h1>
  <div>
    <span>Counter: {{ count }}</span>
    <span>Counter square: {{ squareCount }}</span>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterStore.$reset()">Reset</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

span,
button {
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
}
</style>
