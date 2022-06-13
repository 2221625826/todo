<template>
  <div class="todo">
    <Menu class="menu"></Menu>
    <component :is="listName" ref="list"></component>
    <AddTable :dialogFormVisible="isShow"></AddTable>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import Todo from "@/components/Todo.vue";
import Done from "@/components/Done.vue";
import Menu from "@/components/Menu.vue";
import AddTable from "@/components/AddTable.vue";
export default {
  name: "HomeView",
  components: {
    Todo,
    Done,
    Menu,
    AddTable,
  },
  data() {
    return {
      isShow: ref(false),
      listName: "Todo",
    };
  },
  methods: {
    showAddTable() {
      this.isShow = !this.isShow;
    },
    changePage(pageName) {
      this.listName = pageName;
    },
  },
};
</script>
<style scoped>
.todo {
  height: 100%;
  width: 100%;
}
.menu {
  display: table;
  width: 70px;
  height: 100%;
  float: left;
}
Mytodo {
  float: left;
}
</style>
