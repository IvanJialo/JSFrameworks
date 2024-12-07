<script>
export default {
    data() {
        return {
            settings: "⋮",
        };
    }
};
</script>

<template>
    <button class="settings">
        {{ settings }}
    </button>
</template>

<style>
.settings {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.settings:hover {
    color: #007bff;
}
</style>