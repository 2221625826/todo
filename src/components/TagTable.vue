<template>
  <div>
    <el-dialog v-model="isShow" title="Tags">
      <el-table :data="this.tags" height="250" style="width: 100%">
        <el-table-column label="标签名" prop="name">
          <template #default="scope">
            <el-input v-if="this.editForm.id == scope.row.id" v-model="this.editForm.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="edit(scope.row)">编辑</el-button>
            <el-button @click="submitEdit" v-if="this.editForm.id == scope.row.id">确认</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-form :model="addForm">
        <el-form-item label="名称">
          <el-input v-model="addForm.name" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cencel">取消</el-button>
          <el-button @click="submitAdd">确认</el-button>
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
      tags: [],
      addForm: reactive({
        name: "",
      }),
      editForm: reactive({
        id: 0,
        name: "",
      }),
    };
  },
  methods: {
    showTable() {
      this.isShow = !this.isShow;
    },
    submitAdd: function () {
      if(this.addForm.name == "") {
        return;
      }
      this.$axios.get("/todo/addTag", this.addForm).then((res) => {
        if (res.code != 200 || res.result == false) {
          alert("操作失败");
        }
        this.addForm.name = "";
      });
    },
    submitEdit: function () {
      this.$axios.post("/todo/editTag", this.editForm).then((res) => {
        if (res.code != 200 || res.result == false) {
          alert("操作失败");
        }
        this.editForm = {id: -1, name: ""};
        this.getTags();
      });
    },
    cencel: function () {
      this.showTable();
      this.addForm.name = "";
    },
    edit: function (tag) {
      this.editForm = tag;
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
  mounted() {
    this.getTags();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
