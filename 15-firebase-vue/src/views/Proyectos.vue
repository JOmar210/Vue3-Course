<template>
    <div class="container">
        <h1>Vista proyectos</h1>
        <div class="row">
            <router-link  to="/reg-projects" class="col s12 waves-effect waves-light btn purple darken-1">
            Crear Proyecto
            <i class="material-icons">
            add
            </i>
        </router-link>
        </div>
        <Contenedor/>
    </div>
</template>
<script>
import Contenedor from "../components/Contenedor.vue"
export default {
    components:{
        Contenedor
    }
}
</script>