const app = Vue.createApp({
    data: () => ({
        title: "Gradient Gen",
        fcolor: "#4c42d1",
        scolor: "#05ffe2",
        orientation: "right",


    }),
    computed: {
        setColor() {
            return `background: linear-gradient(to ${this.orientation}, ${this.fcolor}, ${this.scolor});`;
        }
    }
});