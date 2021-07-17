<template>
  <transition-group
    tag="ul"
    name="list"
    class="mt-4 mx-auto max-w-sm grid gap-y-4 relative"
    appear
  >
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @remove-todo="$emit('remove-todo', todo.id)"
    />
  </transition-group>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  components: {
    Todo,
  },
  props: {
    todos: Array,
  },
  emits: ["remove-todo"],
};
</script>

<style lang="postcss" scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-active {
  transition: all 0.3s ease-out;
}
.list-leave-active {
  position: absolute;
  transition: all 0.3s ease-in;
}
.list-move {
  transition: all 0.3s ease;
}
</style>
