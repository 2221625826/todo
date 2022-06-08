<template>
  <div>
    <el-dialog v-model="dialogFormVisible" title="新建任务">
      <el-form :model="form">
        <el-form-item label="priority">
          <el-select v-model="form.priority" placeholder="选择任务的优先级">
            <el-option label="A" value="0" />
            <el-option label="B" value="1" />
            <el-option label="C" value="2" />
            <el-option label="D" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="tags">
          <el-select v-model="form.tags" multiple>
            <el-option
              v-for="tag in tags"
              :key="tag"
              :label="tag"
              :value="tag"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="this.$parent.showSwitch">取消</el-button>
          <el-button @click="submit">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import qs from 'qs';
export default {
  name: "AddTable",
  props: {
    msg: String,
    dialogFormVisible: ref(true),
  },
  data() {
    return {
      form: reactive({
        priority: 3,
        title: "",
        desc: "",
        tags: [],
        topic: "",
        status: 0,
        completeTime: -1,
      }),
      tags: ["tag1", "tag2"],
    };
  },
  methods: {
    submit: function () {
      console.log(this.form)
      this.$axios.post("/addTask", qs.stringify(this.form)).then((res) => {
        if (res.code != 200 || res.result == false) {
          alert("添加失败")
        }
      });
      this.$parent.showSwitch();
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
