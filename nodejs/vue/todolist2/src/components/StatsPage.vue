<template>
    <div>
        <Header />
        <main>
            <Stats />
            <TaskList />
        </main>
    </div>
</template>

<script>
import Header from './Header.vue';
import Stats from './Stats.vue';
import TaskList from './TaskList.vue';

export default {
    components: {
        Header,
        Stats,
        TaskList,
    },
};
</script>

<style scoped>
main {
    padding: 20px;
}
</style>