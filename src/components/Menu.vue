<template>
  <div>
    <el-menu class="menu">
      <el-menu-item index="1" @click="this.$parent.$parent.$parent.$parent.changePage('Todo')">
        <el-icon><List /></el-icon>
      </el-menu-item>
      <el-menu-item index="2" @click="this.$parent.$parent.$parent.$parent.changePage('Done')">
        <el-icon><Finished /></el-icon>
      </el-menu-item>
      <el-menu-item index="3" @click="this.$parent.$parent.$parent.$parent.addTask()">
        <el-icon><Plus /></el-icon>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><CollectionTag /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
