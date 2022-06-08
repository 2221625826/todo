<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">
        <strong :style="{ color: priorityColor(item.priority) }">
          {{ priority(item.priority) }}
        </strong>
        {{ item.title }}
        <el-tag v-for="tag in item.tags" :key="tag" class="tag">{{
          tag
        }}</el-tag>
      </li>
    </ul>
    <footer>
      <el-button class="button" @click="listAllItem">footer</el-button>
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
      list: [{ priority: 0, title: "this is a title", tags: ["tag1", "tag2"] }],
    };
  },
  methods: {
    listAllItem: function () {
      this.$axios.get("/getAll").then((res) => {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding-left: 100px;
}
.button {
  margin-left: 80px;
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
