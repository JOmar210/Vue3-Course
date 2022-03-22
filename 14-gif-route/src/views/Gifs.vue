<template>
    <div class="container mt-3 border">
        <h1 class="text-center">Gifs</h1>
        <Search @accion="getGifs"/>
        <hr>
        <div class="row">
            <div class="col-12 col-lg-3" v-for="gif in gifs" :key="gif.id">
                <GifCard class="m-3 w-75" :data="gif"/>
            </div>
        </div>
    </div>
</template>
<script>
import GifCard from "../components/GifCard.vue"
import Search from '../components/Search.vue'
export default {
    components:{
        GifCard,
        Search
    },
    data() {
        return {
            gifs:{}
        }
    },
    created(){
        this.getGifs();
    },
    methods:{
        async getGifs(search){
            const key = "b3wWIkmRBDv7aYe5gV2ArEO4vnpEZFkX";
            const { data } = await this.axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`)
            this.gifs=data.data;
            // console.log(this.gifs);
            //console.log(data);
        }
    }
}
</script>
