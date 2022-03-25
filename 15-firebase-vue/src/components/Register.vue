<template>
<div class="home">
    <div class="row">
        <div class="container">
        <h1>Registrar</h1>
        <hr>
        </div>
        <form class="col s12" @submit.prevent="validarUsuario">
        <div class="row">
            <div class="input-field col s12">
            <input v-model.trim="email" id="email" type="email" class="validate">
            <label for="email">Email</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
            <input v-model.trim="pass1" id="password" type="password" class="validate">
            <label for="password">Password</label>
            </div>
        </div> 
        <div class="row">
            <div class="input-field col s12">
            <input v-model.trim="pass2" id="password" type="password" class="validate">
            <label for="password">Confirm Password</label>
            </div>
        </div>
        <button type="submit" class="waves-effect waves-light btn">Register</button>
        </form>
    </div>
        
</div>
</template>

<script>
import router from "../router/index";
export default {
    data() {
        return {
            email:"",
            pass1:"",
            pass2:""
        }
    },
    methods:{
        async validarUsuario(){
            if(this.pass1===this.pass2 && this.pass1.length>=6 && this.email!=""){
                const API_KEY= "AIzaSyC5ic4i64nosMFDOLC4InMikLyUfAwedVs";
                const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,{
                    method:"POST",
                    body:JSON.stringify({
                        email: this.email,
                        password:this.pass1,
                        returnSecureToken:true
                    })
                })
                const data = await res.json();
                console.log(data);
                localStorage.setItem('user',JSON.stringify(data));
                router.push("/proyectos");
            }else{
                return "";
            }
        }
    }
}
</script>