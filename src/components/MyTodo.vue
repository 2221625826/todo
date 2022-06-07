<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item.title }} 是 {{ item.desc }}</li>
    </ul>
    <el-button class="but" @click="listAllItem">Default</el-button>
  </div>
</template>

<script>
export default {
  name: "MyTodo",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [],
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-left: 50px;
}
.but{
  margin-left:80px;
}
</style>
