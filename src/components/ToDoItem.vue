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
    }
  }
};
</script>

<style>
.ToDoItem {
  list-style: none;
  text-align: left;
  padding: 10px 0;
}

.ToDoItem:not(:last-child) {
  border-bottom: 1px solid #b6dddd;
}

.ToDoItem-title {
  margin-left: 1rem;
}
</style>
