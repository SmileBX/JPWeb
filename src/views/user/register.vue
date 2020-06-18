<template>
  <div style="margin-left:30%;margin-top:10px">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="userInfo"
      :rules="rules"
      ref="userInfo"
    >
      <el-form-item label="账号" style="width:50%" prop="accountNumber">
        <el-input v-model="userInfo.accountNumber"></el-input>
      </el-form-item>

      <el-form-item label="密码" style="width:50%" prop="password">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>

      <el-form-item label="激活码" style="width:50%">
        <el-input v-model="userInfo.inviteCode"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfo')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { post } from "../../api/request/ajax";
export default {
  data() {
    return {
      labelPosition: "right",
      userInfo: {
        accountNumber: "",
        password: "",
        inviteCode: ""
      },
      rules: {
        accountNumber: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          post("/user/login",this.userInfo)
            .then(response => {
              console.log(response);
            })
            .catch(() => {
            });
        }
      });
    }
  }
};
</script>