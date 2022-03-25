<template>
    <div>
         <nav>
    <div class="nav-wrapper">
      <router-link class="brand-logo" to="/">Proyectos</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link v-if="!sesion" to="/">Register</router-link></li>
        <li><router-link v-if="!sesion" to="/login">Login</router-link></li>
    <li><router-link v-if="sesion" to="/proyectos" class="waves-effect waves-light">Proyectos</router-link></li>
    <li><router-link v-if="sesion" @click="cerrarSesion" to="/" class="waves-effect waves-light btn red">Cerrar Sesion</router-link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><router-link v-if="!sesion" to="/">Register</router-link></li>
    <li><router-link v-if="!sesion" to="/login">Login</router-link></li>
    <li><router-link v-if="sesion" to="/proyectos" class="waves-effect waves-light">Proyectos</router-link></li>
    <li><router-link v-if="sesion" @click="cerrarSesion" to="/" class="waves-effect waves-light btn red">Cerrar Sesion</router-link></li>
  </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user:false,
    }
  },
  mounted(){
    M.AutoInit();
  },
  computed:{
    sesion(){
      const user = localStorage.getItem("user");
      if(user){
        return true;
      }
      return false;
    }
  },
  methods:{
    cerrarSesion(){
      localStorage.removeItem("user"); 
    }
  }
}
</script>