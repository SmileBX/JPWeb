<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="1" route="/books/book">书籍</el-menu-item>
      <el-menu-item index="2" route="/videos/video">视频</el-menu-item>
      <el-menu-item index="3" route="/cartoons/cartoon">漫画</el-menu-item>
    </el-menu>

    <div style="margin-left:30%;margin-top:10px">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="userInfo"
        ref="userInfo"
      >
        <el-form-item label="账号" style="width:50%">
          <el-input v-model="userInfo.accountNumber"></el-input>
        </el-form-item>

        <el-form-item label="密码" style="width:50%">
          <el-input v-model="userInfo.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('userInfo')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../../api/user/user";

export default {
  data() {
    return {
      labelPosition: "right",
      userInfo: {
        accountNumber: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login(this.userInfo)
            .then(response => {
              console.log(response);
            })
            .catch(() => {});
        }
      });
    }
  }
};
</script>