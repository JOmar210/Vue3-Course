const app = Vue.createApp({
    data: () => ({
        title: "Peticiones Fetch",
        datos: [],
    }),
    created() {
        this.getPost();
    },
    methods: {
        async getPost() {
            const { data } = await axios("https://jsonplaceholder.typicode.com/users");
            this.datos = data;
            console.log(data);
        }
    },
})