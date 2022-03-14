<template>
  <div id="header">
    <header>
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>
<script>
export default {
  props:{
    title:String,
  }
};
</script>
<style scoped>
h1 {
  background-color: #333;
    padding: 1rem;
    text-align: center;
    color: snow;
}
</style>
