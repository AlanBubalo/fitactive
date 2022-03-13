<template>
  <div class="todo-list">
    <h6 class="text-start text-truncate">{{ title }}:</h6>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
