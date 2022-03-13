<template>
  <div class="todo-item list-group-item">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["item"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.todo-item {
  &:hover {
    cursor: move;
  }
}
</style>
