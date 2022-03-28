import { reactive } from "vue"
import { Store } from '../interfaces/Store'

const store = reactive<Store>({
    nombre:"Omar",
    apellido:"Cervantes",
    edad:22,
    estudiante:false,
    crecer:()=>{
        store.edad++
    }
});

export default store;