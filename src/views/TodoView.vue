<template>
  <div class="todo">
    <Menu class="menu"></Menu>
    <Todo></Todo>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "TodoView",
  components: {
    Todo,
    Menu,
  },
};
</script>
<style scoped>
.menu {
  width: 70px;
  min-height: 400px;
  float: left;
}
Mytodo {
  float: left;
}
</style>
