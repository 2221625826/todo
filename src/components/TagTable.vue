<template>
  <div>
    <el-dialog v-model="isShow" title="Tags">
      <el-form :model="form">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cencel">取消</el-button>
          <el-button @click="submit">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "TaskTable",
  props: {
    msg: String,
  },
  data() {
    return {
      isShow: ref(false),
      form: reactive({
        name: ""
      }),
      tags: Array
    };
  },
  methods: {
    showTable() {
      this.isShow = !this.isShow;
    },
    submit: function () {
      this.$axios.get("/todo/addTag", this.form).then((res) => {
        if (res.code != 200 || res.result == false) {
          alert("操作失败");
        }
        this.form.name = '';
      });
    },
    cencel: function () {
      this.showTable();
      this.form.name = '';
    },
    getTags: function () {
      this.$axios.get("/todo/getTags").then((res) => {
        if (res.code != 200 || res.result == false) {
          alert("操作失败");
        } else {
          this.tags = res.result;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
