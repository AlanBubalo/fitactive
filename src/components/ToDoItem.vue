<template>
  <div class="todo-item">
    {{ item.todo }}
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
};
</script>

<style></style>
