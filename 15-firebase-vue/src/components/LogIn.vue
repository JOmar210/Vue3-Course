<template>
<div class="home">
        <div class="row">
            <div class="container">
        <h1>Log-in</h1>
        <hr>
        </div>
            <div v-if="error" class="col s12 m7">
                <div class="card horizontal">
                <div class="card-stacked">
                <div class="card-content">
                    <h5>Email / Password Invalidos</h5>
                </div>
                </div>
            </div>
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
            <input v-model.trim="pass" id="password" type="password" class="validate">
            <label for="password">Password</label>
            </div>
        </div> 
        <button type="submit" class="waves-effect waves-light btn">Login</button>
        </form>
    </div>
        
</div>
</template>

<script>
import router from "../router/index"
export default {
    data() {
        return {
            email:"",
            pass:"",
            error:false,
        }
    },
    methods:{
        async validarUsuario(){
            if(this.pass.length>=6 && this.email!=""){
                const API_KEY= "AIzaSyC5ic4i64nosMFDOLC4InMikLyUfAwedVs";
                try{
                const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,{
                    method:"POST",
                    body:JSON.stringify({
                        email: this.email,
                        password:this.pass,
                        returnSecureToken:true
                    })
                })
                const data = await res.json();
                console.log(data);
                if(data.error){
                    this.error=true;
                }else{
                    this.error=false;
                    console.log(data);
                    localStorage.setItem('user',JSON.stringify(data));
                    router.push("/proyectos");
                }
                }catch(err){
                    console.log(err);
                }
            }else{
                return "";
            }
        }
    }
}
</script>