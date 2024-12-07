<script>
export default {
  data() {
    return {
      name: "Hello, little boy",
      subtitle: "You have some shit to do, little boy."
    };
  }
};
</script>

<template>
  <div class="greeting">
    <h1>{{ name }}</h1>
    <span class="subtitle">{{ subtitle }}</span>
  </div>
</template>

<style>
.greeting h1 {
  font-size: 1.5rem;
  margin: 0;
  color: black
}

.subtitle {
  color: black;
  font-size: 0.9rem;
}
</style>