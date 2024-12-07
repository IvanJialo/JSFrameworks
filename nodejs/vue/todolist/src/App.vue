<script>
import Headerino from "./components/Headerino.vue";
import TaskListContainer from "./components/TaskListContainer.vue";
import FooterButton from "./components/FooterButton.vue";

export default {
  components: {
    Headerino,
    TaskListContainer,
    FooterButton,
  },
};
</script>

<template>
  <div id="app">
    <Headerino />

    <div class="main-content">
      <TaskListContainer />
    </div>

    <FooterButton />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Arial, sans-serif;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100vw;
}

</style>
