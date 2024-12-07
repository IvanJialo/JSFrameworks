<script>
    import Titulo from './components/Titulo.vue';
    export default {
        data() {
            return {
                botonTexto: "click aquí",
                
            }
        },
        components: {
            Titulo
        }
    }
</script>

<template>
    <Titulo></Titulo>
    <button>{{ botonTexto }}</button>
</template>

<style>

    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

</style>