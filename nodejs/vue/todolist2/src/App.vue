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
import Header from './components/Header.vue';
import Stats from './components/Stats.vue';
import TaskList from './components/TaskList.vue';

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
