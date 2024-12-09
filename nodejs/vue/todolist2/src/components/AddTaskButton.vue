<template>
  <p v-show="contador == 5">¡Estás a medio camino!</p>
  <p v-if="contador >= 10">Deja de darle al botón pesado</p>
  <p v-else-if="contador <= -5">Eres muy negativo, me minas la moral</p>

  <button @click="incrementarContador()" class="add-task-button">+</button>
  <p>Contador: {{ contador }}</p>
  <button @click="decrementarContador()" class="remove-task-button">-</button>
</template>

<script>
export default {
  methods: {
    incrementarContador() {
      this.contador++;
    },
    decrementarContador() {
      this.contador--;
    },
  },
  data() {
    return {
      contador: 0,
    };
  },
  name: 'AddTaskButton',
};
</script>

<style scoped>
.add-task-button {
  position: absolute;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  transition: transform 0.2s ease;
}

.add-task-button:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}

.add-task-button:active {
  transform: scale(1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.remove-task-button {
  position: static;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  transition: transform 0.2s ease;
}

.remove-task-button:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}

.remove-task-button:active {
  transform: scale(1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>