<template>
  <div id="app">
    <Header title="Portafolio GH"/>
    <Container/>
    <Footer/>
  </div>
</template>
<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Container from "./components/Container.vue"
export default {
  components:{
    Header,
    Footer,
    Container}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
</style>