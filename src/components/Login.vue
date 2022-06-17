<template>
  <div>
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-button class="loginBtn" type="primary" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      form: reactive({
          username: "",
          password: ""
      }),
    };
  },
  methods: {
      login: function() {
        let token =  "22222";
        localStorage.setItem('token', token);
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginBtn {
    display: block;
    margin: auto;
}
</style>
