<template>
  <div>
    <el-container>
      <el-header class="header">
        <h3>登录页面</h3>
      </el-header>
      <el-main>
        <Login class="login" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
export default {
  name: "LoginView",
  components: {
    Login,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.login {
  margin: auto;
  padding: 200px;
  width: 300px;
}
.header {
  font-size: 50px;
  text-align: center;
  color: gray;
}
</style>