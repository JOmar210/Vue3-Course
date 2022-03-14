<template>
    <div id="container" class="container">
        <img 
            src="https://avatars.githubusercontent.com/u/87669618?v=4" 
            alt="Avatar"
            width="100"
            loading="lazy"
            class="image"
        >
        <h2> Proyectos </h2>
        <hr>
        <loading v-show="load"/>
        <div class="cards" v-for="project in projects" :key="project.id">
            <Card 
            :name="project.name"
            :description="project.description"
            :author="project.owner.login"
            :url="project.html_url"
            :homepage="project.homepage"/>

        </div>
    </div>
</template>
<script>
import Card from "./Card.vue";
import loading from "./Loading.vue";
export default {
    components:{
        Card,
        loading,
    },
    data() {
        return {
            projects:null,
            load:true,
        }
    },
    mounted(){
        this.getProjects();
    },
    methods:{
        async getProjects(){
            this.load=true;
            const res = await fetch("https://api.github.com/users/JOmar210/repos");
            const data = await res.json();
            this.load=false;
            this.projects=data;
            console.log(this.projects);
        }
    }
}
</script>
<style scoped>
    .image{
        border-radius: 50%;
    }
    .cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .container{
        overflow: hidden;
        border: solid 1px #eee;
        box-shadow: 1px 1px 1px 4px #333;
        text-align: center;

    }
</style>