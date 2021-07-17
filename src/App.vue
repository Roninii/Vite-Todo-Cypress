<template>
  <div id="app" class="mt-12">
    <transition name="fade" appear>
      <div>
        <h1 class="text-center text-2xl font-bold uppercase tracking-wide">
          {{ message }}
        </h1>

        <input
          type="text"
          v-model.trim="todo"
          @keyup.enter="addTodo"
          placeholder="Enter a todo..."
          class="
            block
            mt-4
            mx-auto
            p-2
            shadow-inner
            border border-purple-200
            rounded
            focus:outline-none focus:border-purple-400
          "
        />
      </div>
    </transition>

    <transition name="switch" mode="out-in">
      <Todos v-if="todos.length" :todos="todos" @remove-todo="removeTodo" />
      <p v-else class="text-center mt-4">That's all for today!</p>
    </transition>
  </div>
</template>

<script setup>
import Todos from "./components/Todos.vue";
import { onMounted, ref } from "vue";

const message = ref("Todo");
const todo = ref("");
const todos = ref([
  {
    id: 0,
    text: "Practice Vue Transitions",
  },
  {
    id: 1,
    text: "Build something",
  },
]);
const id = ref(1);

onMounted(() => {
  id.value = todos.value.length;
});

const addTodo = () => {
  if (!todo.value) return;

  todos.value = [
    {
      id: id.value,
      text: todo.value,
    },
    ...todos.value,
  ];
  todo.value = "";
  id.value++;
};

const removeTodo = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s ease-out;
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.switch-enter-active {
  transition: all 0.3s ease-out;
}
.switch-leave-active {
  transition: all 0.3s ease-in;
}
</style>
