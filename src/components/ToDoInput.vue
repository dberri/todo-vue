<template>
  <form @submit.prevent="createTodo" class="ToDoInput-container">
    <input v-model="todo" class="ToDoInput" />
    <button class="ToDoInput-button">
      add
    </button>
  </form>
</template>

<script>
export default {
  name: "ToDoInput",

  data() {
    return {
      todo: ""
    };
  },

  methods: {
    createTodo() {
      this.$store.dispatch("add", this.todo);
      this.todo = "";
    }
  }
};
</script>

<style>
.ToDoInput-container {
  display: flex;
}

.ToDoInput {
  background-color: #fafafa;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border: 1px solid #47b784;
  flex-grow: 1;
  outline: none;
  padding: 8px 12px;
}

.ToDoInput:focus {
  border-color: #408974;
}

.ToDoInput-button {
  background:#47b784;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  box-shadow: none;
  color: #fafafa;
  cursor: pointer;
  outline: none;
  width: 50px;
}
</style>
