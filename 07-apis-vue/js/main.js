const app = Vue.createApp({
    data: () => ({
        title: "Peticiones Fetch"
    }),
    created() {
        this.getPost();
    },
    methods: {
        async getPost() {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos");
            const data = await res.json();
            console.log(data);
        }
    },
})