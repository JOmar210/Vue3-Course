import { ref } from 'vue'
import { computed } from '@vue/reactivity';

export function useContador() {
    const contador = ref(0);


    const color = computed(() => (contador.value < 0 ? "red" : "green"));

    const aumentar = () => contador.value++;
    const disminuir = () => contador.value--;
    return {
        contador,
        aumentar,
        disminuir,
        color
    }
}