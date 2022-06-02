<template>
  <div>
    <ul>
      <li>{{ myMsg }}</li>
    </ul>
    <el-button @click="remote">Default</el-button>
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
      myMsg: "local",
    };
  },
  methods: {
    remote: function () {
      this.$axios
        .get("/remote")
        .then((res) => {
          if (res.code == 200) {
            this.myMsg = res.result;
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
