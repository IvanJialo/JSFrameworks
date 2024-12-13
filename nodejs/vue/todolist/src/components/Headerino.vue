<script>
import Greeting from "./Greeting.vue";
import Stats from "./Stats.vue";
import Notification from "./Notification.vue";
import Settings from "./Settings.vue";
import MiBoton from "./MiBoton.vue";

export default {
    components: {
        Greeting,
        Stats,
        Notification,
        Settings,
        MiBoton,
    },
    methods: {
        evento1(mensaje) {
            alert(mensaje);
        },
        evento2(mensaje) {
            console.log(mensaje);
        },
        evento3(mensaje) {
            window.location.reload();
        },
    },
};
</script>

<template>
        <!-- <Greeting nombre="Hello, little boy" subtitle="What are you doing today?"/> -->
        <MiBoton text="1" clase="red" @click1="evento1"/>
        <MiBoton text="2" clase="blue" @click1="evento2"/>
        <MiBoton text="3" clase="green" @click1="evento3"/>
</template>

<style>
* {
    background-color: white;
}
</style>