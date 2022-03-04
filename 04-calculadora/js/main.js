const app = Vue.createApp({
    data: () => ({
        title: "Calculadora Vue",
        n1: 0,
        n2: 0,
    }),
    computed: {
        suma() {
            return this.n1 + this.n2;
        },
        resta() {
            return this.n1 - this.n2;
        },
        division() {
            let res = this.n1 / this.n2;
            return res === Infinity || res === -Infinity || Number.isNaN(res) ? "Error: No se puede dividir entre 0" : res;
        },
        multiplicacion() {
            return this.n1 * this.n2;
        }
    }
});