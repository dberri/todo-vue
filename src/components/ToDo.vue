<template>
  <div class="ToDo">
    <header class="ToDo-header">
      <ToDoInput />
    </header>
    <main class="ToDo-main">
      <ul class="ToDo-list">
        <ToDoItem v-for="todo in todoList" :key="todo.id" v-bind="todo" />
      </ul>
    </main>
    <footer class="ToDo-footer">
      <a
        @click.prevent="isDone = null"
        href="#"
        :class="['ToDo-link', { 'is-active': isDone === null }]"
      >
        All
      </a>
      <a
        @click.prevent="isDone = true"
        href="#"
        :class="['ToDo-link', { 'is-active': isDone === true }]"
      >
        Completed
      </a>
      <a
        @click.prevent="isDone = false"
        href="#"
        :class="['ToDo-link', { 'is-active': isDone === false }]"
      >
        Not completed
      </a>
    </footer>
  </div>
</template>

<script>
import ToDoInput from "./ToDoInput";
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDo",

  components: {
    ToDoInput,
    ToDoItem
  },

  data() {
    return {
      isDone: null
    };
  },

  computed: {
    todoList() {
      return this.$store.state.todos.filter(todo => {
        if (this.isDone !== null) {
          return todo.done === this.isDone;
        }
        return true;
      });
    }
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
