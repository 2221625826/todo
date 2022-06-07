<template>
  <div class="todo">
    <Menu class="menu"></Menu>
    <MyTodo></MyTodo>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTodo from "@/components/MyTodo.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "TodoView",
  components: {
    MyTodo,
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
