import { reactive } from "vue";

export const counterStore = reactive({
  count: 0,
  handleAdd: () => {
    counterStore.count++;
  },
  handleDis: () => {
    counterStore.count--;
  },
  handleReset: () => {
    counterStore.count = 0;
  },
});
