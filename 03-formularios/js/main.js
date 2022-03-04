const app = Vue.createApp({
    data: () => ({
        title: "Formularios",
        datos: {
            name: "",
            age: 15,
            langs: [],
            gender: "m"
        }
    }),
    methods: {
        handleSubmit() {
            console.log(this.datos);
        }
    },
});