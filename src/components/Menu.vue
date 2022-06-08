<template>
  <div>
    <el-menu class="menu">
      <el-menu-item index="1">
        <el-icon><Flag /></el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Finished /></el-icon>
      </el-menu-item>
      <el-menu-item @click="this.$parent.showSwitch" index="3">
        <el-icon><Plus /></el-icon>
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
