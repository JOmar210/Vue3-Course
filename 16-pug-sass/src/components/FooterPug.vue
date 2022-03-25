<template lang="pug">
footer
    h3 &copy; Jesus Omar - {{getYear}}
</template>

<script>
export default {
    computed:{
        getYear(){
            return new Date().getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>
footer{
    background-color: #222;
    h3{
        color: snow;
    }
}
</style>