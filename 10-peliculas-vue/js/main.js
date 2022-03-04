const app = Vue.createApp({
    data: () => ({
        title: "Movies Vue",
        movieData: {},
        movieTitle: "Spider Man",

    }),
    mounted() {
        this.getMovie();
    },
    methods: {
        async getMovie() {
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");
            const data = await fetch(`https://www.omdbapi.com/?apikey=95b15cb4&t=${search}`);
            const jsonData = await data.json();
            this.movieData = jsonData;
        }
    },
})