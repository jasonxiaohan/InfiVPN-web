<template>
  <div class="page-login">
    <h2>{{this.$i18n.t("register.title")}}</h2>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="registerForm">
      <el-form-item v-bind:label="$t('register.account')">
        <el-input v-model="registerForm.account"></el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('register.password')">
        <el-input type="admin" v-model="registerForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('register.confirmpassword')">
        <el-input type="admin" v-model="registerForm.confirmPassword" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doRegister">{{this.$i18n.t("register.button")}}</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/login">{{this.$i18n.t("login.button")}}</router-link>
  </div>
</template>

<script>
import axios from '@/libs/api.request'
export default {
  name: "Register",
  components: {},
  data() {
    return {
      registerForm: {
        account: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    doRegister() {
      if (this.registerForm.account === "" || this.registerForm.password.trim() === "") {
        this.$message.warning({
          message: i18n.t("login.message"),
          showClose: true
        });
        return
      }

      // 验证新密码
      if(this.registerForm.password.trim().length <= 6) {
          this.$message.warning({
          message: i18n.t("changepassword.message-password-length"), 
          showClose: true
        });
        return;
      }
      
      // 确认两次密码是否一致
      if(this.registerForm.password.trim() != this.registerForm.confirmPassword.trim()) {
          this.$message.warning({
          message: i18n.t("changepassword.messgae-confirm-password-equal"),
          showClose: true
        });
        return;
      }      

      const that = this
      axios.request({
        url: 'restful/vpn/addUser',
        data:{
          emailAddress : that.registerForm.account.trim(),
          password : that.registerForm.password.trim(),
          expireTime: '1w'
        },
        method: 'post'
      }).then(response => {
        if (response.data.code === 0) {
          // const v = {
          //   "username": that.registerForm.account,
          //   "isShow": true,
          //   "isLogin": true
          // }
          // that.$store.commit('setToken', response.data.data.token)
          // that.$store.commit('setUserInfo', v)
          this.$message.success({
            message: i18n.t("register.message"),
            showClose: true
          })
          that.$router.push("/login");
        } else {
          this.$message.warning({
            message: response.data.msg,
            showClose: true
          });
        }
      })
            
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
