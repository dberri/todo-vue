import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function generateId() {
  return Math.floor(Math.random() * 100000);
}

export default new Vuex.Store({
  state: {
    todos: []
  },

  mutations: {
    STORE(state, payload) {
      state.todos = payload || [];
    },

    ADD(state, payload) {
      state.todos.push(payload);
    },

    TOGGLE(state, id) {
      const todo = state.todos.find(item => item.id === id);
      todo.done = !todo.done;
    },

    REMOVE(state, id) {
      state.todos = state.todos.filter(item => item.id !== id);
    }
  },

  actions: {
    add({ commit, dispatch }, todo) {
      commit("ADD", {
        id: generateId(),
        todo,
        done: false
      });
      dispatch("syncLocalStorage");
    },

    toggleTodo({ commit, dispatch }, id) {
      commit("TOGGLE", id);
      dispatch("syncLocalStorage");
    },

    removeTodo({ commit, dispatch }, id) {
      commit("REMOVE", id);
      dispatch("syncLocalStorage");
    },

    syncLocalStorage({ state }) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    loadFromLocalStorage({ commit }) {
      commit("STORE", JSON.parse(localStorage.getItem("todos")));
    }
  },

  modules: {}
});
