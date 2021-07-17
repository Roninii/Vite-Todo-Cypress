<template>
  <li
    class="
      rounded
      shadow
      px-4
      py-2
      border border-purple-200
      hover:border-purple-400
      cursor-pointer
      text-center
      w-full
      tranisition-all
      duration-200
      ease-in-out
    "
    @click="$emit('remove-todo')"
  >
    {{ todo.text }}
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  emits: ["remove-todo"],
};
</script>
