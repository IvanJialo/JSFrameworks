<script>
export default {
    data() {
        return {
            stats: [
                { title: "Today ", count: 6 },
                { title: "Scheduled ", count: 5 },
                { title: "All ", count: 14 },
                { title: "Overdue ", count: 3 },
            ],
        };
    },
};
</script>

<template>
    <div class="stats">
        <div v-for="stat in stats" :key="stat.title" class="stat-card">
            <span class="stat-title">{{ stat.title }}</span>
            <span class="stat-count">{{ stat.count }}</span>
        </div>
    </div>
</template>

<style>
.stats {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    color: black;
}

.stat-card {
    flex: 1;
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.stat-title {
    font-size: 1rem;
    color: black;
}

.stat-count {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>