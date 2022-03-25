<template lang="pug">
div
  h1 {{title}}
  ul
    li
      a(href="#") Valor 1
    li
      a(href="#") Valor 2
    li
      a(href="#") Valor 3

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      title: "Mensaje desde Vue",
      personas:["Juan", "Raul", "Maria"]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary:#127979; 
h1{
  color: $primary;
}
ul{
  list-style: none;
  li{
    background-color: purple;
    margin: 5px 0;
    a{
      color: snow;
    }
    &:hover{
      background-color: blue;
    }
  }
}
</style>
