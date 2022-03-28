<template>
  <div>
      <h1>Nombre: {{store.nombre}}</h1>
      <h2>Edad: {{store.edad}}</h2>
      <button @click="store.crecer">Crecer</button>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import store from "../store/store";

const Practicando = defineComponent({
    setup() {
        return { store };
    },
})
export default Practicando;
</script>

