<template>
  <h1>Counter: {{ counterStore.count }}</h1>
  <button id="add-compo" @click="counterStore.handleAdd">+1</button>
  <button id="dis-compo" @click="counterStore.handleDis">-1</button>
</template>

<script>
import { counterStore } from "../store/counterStore";

export default {
  setup() {
    return { counterStore };
  },
};
</script>
