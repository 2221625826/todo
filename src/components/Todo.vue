<template>
  <div>
    <header class="header"></header>
    <el-collapse accordion class="list">
      <el-collapse-item class="item" v-for="item in list" :key="item">
        <template #title class="title">
          <strong :style="{ color: priorityColor(item.priority) }">
            {{ priority(item.priority) }}
          </strong>
          &nbsp; {{ item.title }}
          <el-tag v-for="tag in item.tags" :key="tag" class="tag">{{
            tag
          }}</el-tag>
          <el-button
            class="doTask"
            :type="doOrFinishTaskType(item.status)"
            circle
            @click="doOrFinishTask(item.id, item.status)"
          >
            <el-icon>
              <Select v-if="item.status == 1"></Select>
              <Tickets v-else />
            </el-icon>
          </el-button>
          <div class="completeTime" v-if="item.completeTime == ''">
            截止到 {{ item.completeTime }}
          </div>
        </template>
        <div class="desc">
          详细内容：{{ item.desc }}
          <el-button class="editTask" type="warning" @click="this.$parent.editTask(item)">
            编辑
          </el-button>
          <el-button class="deprecatedTask" type="danger" @click="this.deprecatedTask(item.id)">
            删除
          </el-button>
        </div>
        
      </el-collapse-item>
    </el-collapse>
    <footer>
      <el-button class="button" @click="listTodo">获取Todo</el-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [],
      isShow: Boolean,
    };
  },
  methods: {
    listTodo: function () {
      this.$axios.get("/getTodo").then((res) => {
        if (res.code == 200) {
          this.list = res.result;
        }
      });
    },
    doOrFinishTask: function (id, status) {
      if (status == 0) {
        this.$axios.get("/doTask", {"id":id}).then((res) => {
          if (res.code != 200) {
            alert("请重试！");
          } else {
            this.listTodo();
          }
        });
      } else if (status == 1) {
        this.$axios.get("/finishTask", {"id":id}).then((res) => {
          if (res.code != 200) {
            alert("请重试！");
          } else {
            this.listTodo();
          }
        });
      }
    },
    deprecatedTask: function (id) {
      this.$axios.get("/deprecatedTask", {"id":id}).then((res) => {
          if (res.code != 200) {
            alert("请重试！");
          } else {
            this.listTodo();
          }
        });
    }
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
    doOrFinishTaskType() {
      return (i) => {
        switch (i) {
          case 1:
            return "success";
          default:
            return "primary";
        }
      };
    },
  },
  mounted() {
    this.listTodo();
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
.doTask {
  position: absolute;
  right: 40px;
}
.item {
  padding-left: 20px;
}

.list {
  padding-left: 70px;
}
footer .button {
  margin-left: 80px;
}
.tag {
  margin: 5px;
}

.header {
  background-color: aquamarine;
  height: 60px;
}

footer {
  bottom: 0px;
  position: absolute;
  padding-bottom: 30px;
  padding-left: 50px;
}
</style>
