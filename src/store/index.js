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
    syncLocalStorage({ state }) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    loadFromLocalStorage({ commit }) {
      commit("STORE", JSON.parse(localStorage.getItem("todos")));
    }
  },
  modules: {}
});
