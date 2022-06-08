<template>
  <div class="todo">
    <Menu class="menu"></Menu>
    <Todo></Todo>
    <AddTable :dialogFormVisible="isShow"></AddTable>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import Todo from "@/components/Todo.vue";
import Menu from "@/components/Menu.vue";
import AddTable from "@/components/AddTable.vue";
export default {
  name: "TodoView",
  components: {
    Todo,
    Menu,
    AddTable,
  },
  data() {
    return {
      isShow: ref(false),
    };
  },
  methods: {
    showSwitch() {
      this.isShow = !this.isShow;
    },
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
