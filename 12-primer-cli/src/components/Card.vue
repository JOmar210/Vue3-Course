<template>
      <div class="card">
        <h4>{{name}}</h4>
        <p>{{description?description:"No Description"}}</p>
        <p>Author: <strong>{{author}}</strong></p>
        <buttonUrl :url="url"/>
        <buttonUrl :url="homepage" v-if="homepage!= null" 
        color="red"
        title="Deploy"/>
      </div>
</template>

<script>
import buttonUrl from "./ButtonUrl.vue";
export default {
    components:{
        buttonUrl
    },
    props:{
        name:String,
        description:String,
        author:String,
        url: String,
        homepage:String,
        }
}
</script>

<style scoped>
    .card{
        width: 250px;
        margin: 7px;
        border: solid 1px #eee;
        box-shadow: 1px 1px  4px #333;
        text-align: center;

    }
</style>