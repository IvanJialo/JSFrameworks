<script>
import Greeting from "./Greeting.vue";
import Stats from "./Stats.vue";
import Notification from "./Notification.vue";
import Settings from "./Settings.vue";

export default {
    components: {
        Greeting,
        Stats,
        Notification,
        Settings,
    },
};
</script>

<template>
    <header class="headerino">
        <Greeting />

        <div class="header-actions">
            <Notification />
            <Settings />
        </div>

        <div class="stats-wrapper">
            <Stats />
        </div>
    </header>
</template>

<style>
.headerino {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    background-color: #f8f9fa;
}

.stats-wrapper {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.header-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}
</style>