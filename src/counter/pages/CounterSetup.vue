<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterSetupStore } from "@/store/counter-setup";
import CounterSetupComponent from "@/counter/components/CounterSetupComponent.vue";

const counterStore = useCounterSetupStore();
const { count, squareCount } = storeToRefs(counterStore);
const { increment, incrementBy } = counterStore;
</script>

<template>
  <div>
    <h1>Counter Setup</h1>
    <div>
      <span>Counter: {{ count }}</span>
      <span>Counter square: {{ squareCount }}</span>
      <button @click="increment()">+1</button>
      <button @click="incrementBy(2)">+2</button>
      <button @click="incrementBy(5)">+5</button>
      <button @click="counterStore.$reset()">Reset</button>
    </div>
    <CounterSetupComponent />
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
