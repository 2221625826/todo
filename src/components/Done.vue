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
          <div class="completeTime">完成于 {{ item.completeTime }}</div>
        </template>
        <div>详细内容：{{ item.desc }}</div>
      </el-collapse-item>
    </el-collapse>
    <footer>
      <el-button class="button" @click="listDone">获取Done</el-button>
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
      list: [
      ],
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
.completeTime {
  position: absolute;
  right: 90px;
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
