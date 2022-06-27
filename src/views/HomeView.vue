<template>
  <div class="todo">
    <el-container>
      <el-header class="header"></el-header>
      <el-container>
        <el-aside class="menu"><Menu></Menu></el-aside>
        <el-main class="main"
          ><component :is="listName" ref="list"></component
        ></el-main>
      </el-container>
    </el-container>
    <TaskTable ref="taskTable"></TaskTable>
    <TagTable ref="tagTable"></TagTable>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import Done from "@/components/Done.vue";
import Menu from "@/components/Menu.vue";
import TaskTable from "@/components/TaskTable.vue";
import TagTable from "@/components/TagTable.vue";
export default {
  name: "HomeView",
  components: {
    Todo,
    Done,
    Menu,
    TaskTable,
    TagTable,
  },
  data() {
    return {
      listName: "Todo",
    };
  },
  methods: {
    addTask() {
      this.$.refs.taskTable.showTable("/todo/addTask", null);
    },
    editTask(task) {
      this.$.refs.taskTable.showTable("/todo/editTask", task);
    },
    changePage(pageName) {
      this.listName = pageName;
    },
    tags() {
      this.$.refs.tagTable.showTable();
    }
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
