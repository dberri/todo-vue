<template>
  <div class="ToDo">
    <header class="ToDo-header"></header>
    <main class="ToDo-main">
      <ul class="ToDo-list"></ul>
    </main>
    <footer class="ToDo-footer">
      <a href="#" class="ToDo-link is-active">All</a>
      <a href="#" class="ToDo-link">Completed</a>
      <a href="#" class="ToDo-link">Not completed</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ToDo",

  data() {
    return {};
  }
};
</script>

<style>
.ToDo {
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #364d5e;
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
  margin-top: 75px;
  min-width: 400px;
  width: 40%;
}

.ToDo-header {
  padding: 0.5rem;
}

.ToDo-main {
  padding: 0.5rem;
  flex-grow: 1;
}

.ToDo-main .ToDo-list {
  margin: 0;
  padding: 0.25rem;
}

.ToDo-footer {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
}

.ToDo-footer .ToDo-link {
  border-radius: 5px;
  border: 1px solid transparent;
  color: #2c3e50;
  padding: 5px;
  text-decoration: none;
  width: 30%;
}

.ToDo-footer .ToDo-link:hover,
.ToDo-footer .ToDo-link.is-active {
  border-color: #2f4e60;
}
</style>
