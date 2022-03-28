<template>
  <div>
    <h1>{{title}}</h1><hr>
    <h2 :style="{color:color}">Contador: {{contador}}</h2>
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <Btn btnText="Aumentar" @accion="aumentar"/>
    <Btn btnText="Disminuir" @accion="disminuir"/>
    <hr>
  </div>
</template>

<script>
import Btn from "./Btn.vue"
import {useContador} from '../hooks/useContador.js'

export default {
  name:"HelloWorld",
  components:{Btn},
  props:{
    msg:String
  },
  setup({msg}) {
    const title = msg;

    return{
      title,
      ...useContador()
    }
  }
}
</script>

<style>

</style>