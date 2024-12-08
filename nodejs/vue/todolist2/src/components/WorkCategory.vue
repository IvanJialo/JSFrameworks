<template>
    <div class="category-box work">
        <div class="category-content">
            <h3>{{ title }}</h3>
            <p>{{ notes }}</p>
        </div>
        <div class="category-stats">
            <span class="completed">{{ completed }}</span>
            <button class="details-button">{{ button }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkCategory',
    data() {
        return {
            title: 'Work',
            notes: '14 notes',
            completed: '12 Completed',
            button: '↗',
        };
    }
};
</script>

<style scoped>
.category-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-radius: 8px;
    background-color: #c7f8c8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
}

.category-box:hover {
    transform: translateY(-2px);
}

.category-content h3 {
    margin: 0;
    font-size: 18px;
}

.category-content p {
    margin: 0;
    color: #555;
    font-size: 14px;
}

.category-stats {
    display: flex;
    align-items: center;
    gap: 10px;
}

.completed {
    font-size: 14px;
    color: #555;
}

.details-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #333;
}
</style>
