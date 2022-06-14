<template>
  <div>
    <header>登录页面</header>
    <Login class="login"></Login>
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
header {
    font-size: 50px;
    text-align:center;
    color: gray;
}
</style>