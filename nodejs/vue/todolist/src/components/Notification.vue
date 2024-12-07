<script>
export default {
    data() {
        return {
            notification: "🔔",
        };
    }
};
</script>

<template>
    <button class="notification">
        {{ notification }}
    </button>
</template>

<style>
.notification {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}

.notification:hover {
    color: #007bff;
}
</style>