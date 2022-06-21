<template>
  <div>
    <el-dialog v-model="isShow" title="新建任务">
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
          <el-select
            v-model="form.tags"
            value-key="id"
            multiple
            placeholder="选择任务的标签"
          >
            <el-option
              v-for="tag in tags"
              :key="tag.id"
              :label="tag.name"
              :value="tag"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="desc">
          <el-input
            v-model="form.desc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
          />
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
      tags: Array,
      isShow: ref(false),
      url: String,
      form: reactive({
        priority: "",
        title: "",
        desc: "",
        tags: [],
        topic: "",
        status: 0,
        completeTime: "",
      }),
    };
  },
  methods: {
    showTable(url, task) {
      if (url != null) {
        this.url = url;
      }
      if (task != null) {
        this.from = task;
      } else {
        this.from = {
          priority: "",
          title: "",
          desc: "",
          tags: [],
          topic: "",
          status: 0,
          completeTime: "",
        };
      }
      if (this.isShow == false) {
        this.getTags();
      }
      this.isShow = !this.isShow;
    },
    submit: function () {
      this.$axios.post(this.url, this.form).then((res) => {
        if (res.code != 200 || res.result == false) {
          alert("操作失败");
        } else {
          location.reload();
        }
      });
      this.showTable();
    },
    cencel: function () {
      this.showTable();
      this.form = {
        priority: "",
        title: "",
        desc: "",
        tags: [],
        topic: "",
        status: 0,
        completeTime: "",
      };
    },
    getTags: function () {
      this.$axios.get("/getTags").then((res) => {
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
