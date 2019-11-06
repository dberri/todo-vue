<template>
  <div id="app">
    <ToDo />
  </div>
</template>

<script>
import ToDo from "./components/ToDo.vue";

export default {
  name: "app",
  components: {
    ToDo
  },
  mounted() {
    this.$store.dispatch("loadFromLocalStorage");
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(145deg, rgba(65,184,131,1) 0%, rgba(53,73,94,1) 100%);
  color: #2c3e50;
  display: flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  text-align: center;
}
</style>
