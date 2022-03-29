<template>
  <div>
    <contador-composition />
  <hr />
  <contador-composition />
  </div>
</template>

<script>
import ContadorComposition from "./components/Contador-composition.vue";

export default {
  components: { ContadorComposition },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
