<script>
export default {
    props: ["text", "clase"],
    methods: {
        eventoClick() {
            this.$emit("click1", "boton pulsado"); 
        },
    },
};
</script>

<template>
    <button :class="clase" @click="eventoClick">{{ text }}</button>
</template>

<style>
button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin: 20px 20px;
}

.red {
    color: red;
    background-color: black;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px red;
}

.blue {
    color: blue;
    background-color: black;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px blue;
}

.green {
    color: green;
    background-color: black;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px green;
}
</style>