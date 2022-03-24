<template>
    <div class="container">
        <div class="row">
            <router-link  to="/proyectos" class="col s12 waves-effect waves-light btn amber darken-3">
            <i class="material-icons">
            arrow_back
            </i>
            Proyectos
        </router-link>
        </div>
        <div class="row">
            <form @submit.prevent="updateProject" class="col s12">
            <div class="row">
                <div class="input-field col s12">
                <input id="first_name" type="text" class="validate" v-model="project.title"
                placeholder="Nombre del proyecto">
                <label for="first_name"></label>
                </div>
                <div class="input-field col s12">
                <input id="last_name" type="text" class="validate" v-model="project.description"
                placeholder="Descripcion del proyecto">
                <label for="last_name"></label>
                </div>
                <p> 
                    <label>
                        <input 
                        v-model="project.langs"
                        value="html" 
                        type="checkbox" 
                        checked="checked" />
                        <span>HTML</span>
                    </label>
                </p>
                <p> 
                    <label>
                        <input 
                        v-model="project.langs"
                        value="css" 
                        type="checkbox" 
                        checked="checked" />
                        <span>CSS</span>
                    </label>
                </p>
                <p> 
                    <label>
                        <input 
                        v-model="project.langs"
                        value="js" 
                        type="checkbox" 
                        checked="checked" />
                        <span>JAVASCRIPT</span>
                    </label>
                </p>
                <p> 
                    <label>
                        <input 
                        v-model="project.langs"
                        value="vue" 
                        type="checkbox" 
                        checked="checked" />
                        <span>VUE</span>
                    </label>
                </p>
                <button class="btn waves-effect waves-light col s12" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            project:{
                title:"",
                description:"",
                langs:[],
                status:true,
            },
            id: this.$route.params.id,
        }
    },
    mounted(){
        this.getProject();
    },
    methods:{
        async getProject(){
            
            const res = await fetch(`https://crud-vue-251d3-default-rtdb.firebaseio.com/projects/${this.id}.json`);
            const data = await res.json();
            console.log(data);
            this.project=data;
        },
        async updateProject(){
            const res = await fetch(`https://crud-vue-251d3-default-rtdb.firebaseio.com/projects/${this.id}.json`,{
                method:"PATCH",
                body:JSON.stringify(this.project),
            });
            // const data = await res.json();
             console.log(res);
            // this.projects=data;
        }
    }
}
</script>