<template>
  <div class="todo">
    <el-container>
      <el-header class="header"></el-header>
      <el-container>
        <el-aside class="menu"><Menu></Menu></el-aside>
        <el-main class="main"><component :is="listName" ref="list"></component></el-main>
      </el-container>
    </el-container>
    <TaskTable ref="taskTable"></TaskTable>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import Done from "@/components/Done.vue";
import Menu from "@/components/Menu.vue";
import TaskTable from "@/components/TaskTable.vue";
export default {
  name: "HomeView",
  components: {
    Todo,
    Done,
    Menu,
    TaskTable,
  },
  data() {
    return {
      listName: "Todo",
    };
  },
  methods: {
    addTask() {
      this.$.refs.taskTable.showTable("/addTask", null);
    },
    editTask(task) {
      this.$.refs.taskTable.showTable("/editTask", task);
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
  width: 70px;
}
Mytodo {
  float: left;
}
.main {
  padding: 20px;
}

.header {
  background-color: aquamarine;
  height: 60px;
}
</style>
