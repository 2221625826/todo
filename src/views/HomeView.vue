<template>
  <div class="todo">
    <Menu class="menu"></Menu>
    <component :is="listName" ref="list"></component>
    <TaskTable :dialogFormVisible="isShow" :url="url" :form="task"></TaskTable>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive,ref } from "vue";
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
      isShow: ref(false),
      listName: "Todo",
      url: "",
      task: reactive({
        priority: "",
        title: "",
        desc: "",
        tags: [],
        topic: "",
        status: 0,
        completeTime: "",
      }),
    };
  },
  methods: {
    showTable() {
      this.isShow = !this.isShow;
    },
    addTask() {
      this.url = "/addTask";
      this.task = {
        priority: "",
        title: "",
        desc: "",
        tags: [],
        topic: "",
        status: 0,
        completeTime: "",
      };
      this.showTable();
    },
    editTask(task) {
      this.url = "/editTask";
      this.task = task;
      this.showTable();
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
