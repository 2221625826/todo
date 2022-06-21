<template>
  <div>
    <el-collapse accordion class="list">
      <el-collapse-item class="item" v-for="item in list" :key="item">
        <template #title class="title">
          <strong :style="{ color: priorityColor(item.priority) }">
            {{ priority(item.priority) }}
          </strong>
          &nbsp; {{ item.title }}
          <el-tag v-for="tag in item.tags" :key="tag.id" class="tag">
            {{ tag.name }}
          </el-tag>
          <div v-if="item.completeTime != null" class="completeTime">
            完成于 {{ item.completeTime }}
          </div>
        </template>
        <div class="desc">
          详细内容：{{ item.desc }}
          <el-button
            class="editTask"
            type="warning"
            @click="this.$parent.editTask(item)"
          >
            编辑
          </el-button>
          <el-button
            class="deprecatedTask"
            type="danger"
            @click="this.deprecatedTask(item.id)"
          >
            删除
          </el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
    <footer>
      <el-button @click="listDone">获取Done</el-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Done",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    listDone: function () {
      this.$axios.get("/getDone").then((res) => {
        if (res.code == 200) {
          this.list = res.result;
        }
      });
    },
    deprecatedTask: function (id) {
      this.$axios.get("/deprecatedTask", { id: id }).then((res) => {
        if (res.code != 200) {
          alert("请重试！");
        } else {
          this.listTodo();
        }
      });
    },
  },
  computed: {
    priority() {
      return (i) => {
        switch (i) {
          case 0:
            return "(A)";
          case 1:
            return "(B)";
          case 2:
            return "(C)";
          case 3:
            return "(D)";
          default:
            return "";
        }
      };
    },
    priorityColor() {
      return (i) => {
        switch (i) {
          case 0:
            return "red";
          case 1:
            return "orange";
          case 2:
            return "yellow";
          case 3:
            return "green";
          default:
            return "";
        }
      };
    },
  },
  mounted() {
    this.listDone();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.desc {
  min-height: 100px;
  position: relative;
}
.deprecatedTask {
  position: absolute;
  right: 30px;
  bottom: -10px;
}
.editTask {
  position: absolute;
  right: 100px;
  bottom: -10px;
}
.completeTime {
  position: absolute;
  right: 90px;
}
.tag {
  margin: 5px;
}

footer {
  bottom: 0px;
  position: absolute;
  padding-bottom: 30px;
  padding-left: 50px;
}
</style>
