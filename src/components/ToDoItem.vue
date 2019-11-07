<template>
  <li class="ToDoItem">
    <label :for="`todo_${id}`">
      <input
        type="checkbox"
        :id="`todo_${id}`"
        :checked="done"
        @change="toggleTodo"
      />
      <span class="ToDoItem-title">{{ todo }}</span>
      <button type="button" class="ToDoItem-removeButton" @click="removeTodo">
        x
      </button>
    </label>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",

  props: {
    id: {
      type: Number,
      required: true
    },
    todo: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    toggleTodo() {
      this.$store.dispatch("toggleTodo", this.id);
    },

    removeTodo() {
      this.$store.dispatch("removeTodo", this.id);
    }
  }
};
</script>

<style>
.ToDoItem {
  list-style: none;
  padding: 10px 0;
  text-align: left;
}

.ToDoItem:not(:last-child) {
  border-bottom: 1px solid #b6dddd;
}

.ToDoItem-title {
  margin-left: 1rem;
}

.ToDoItem-removeButton {
  background: none;
  border-radius: 5px;
  border: 1px solid #47b784;
  color: #47b784;
  cursor: pointer;
  float: right;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
}

.ToDoItem-removeButton:active {
  background: #b6dddd;
}
</style>
