<template>
  <section id="tasks">
    <h2>Today's Task</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span class="time">{{ task.time }}</span>
        <p>{{ task.title }}</p>
        <input v-model="inputUser" type="text" name="user" id="user">
        <p>Has escrito: {{ inputUser }}</p>
        <ul v-if="task.subtasks">
          <li v-for="subtask in task.subtasks" :key="subtask">{{ subtask }}</li>
        </ul>
      </li>
    </ul>

    <AddTaskButton />
  </section>
</template>

<script>
import AddTaskButton from './AddTaskButton.vue';

export default {
  name: 'TaskList',
  components: {
    AddTaskButton,
  },
  data() {
    return {
      tasks: [
        { id: 1, time: '4:50 PM', title: 'Project retrospective' },
        { id: 2, time: '4:50 PM', title: 'Evening team meeting' },
        { id: 3, time: '5:00 PM', title: 'Create monthly deck' },
        {
          id: 4,
          time: '6:00 PM',
          title: 'Shop for groceries',
          subtasks: ['Rice', 'Meat'],
        },
        { id: 5, time: '10:30 PM', title: 'Read book' },
      ],
      inputUser: '',
    };
  },
};
</script>

<style scoped>
#tasks {
  position: relative;
  padding: 20px 0;
  background-color: #f8f9fa;
  border-radius: 8px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.time {
  font-weight: bold;
}
</style>