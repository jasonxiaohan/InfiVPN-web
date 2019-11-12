<template>
  <div class="page-login">
    <h2>{{this.$i18n.t("login.title")}}</h2>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="loginForm">
      <el-form-item v-bind:label="$t('login.account')">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('login.password')">
        <el-input type="admin" v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doLogin">{{this.$i18n.t("login.button")}}</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/forgotPassword">{{this.$i18n.t("login.forgotLabel")}}</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
    <router-link to="/register">{{this.$i18n.t("login.createLabel")}}</router-link>
  </div>
</template>

<script>
import axios from '@/libs/api.request'
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    doLogin() {
      if (this.loginForm.account === "" || this.loginForm.password === "") {
        this.$message.warning({
          message: i18n.t("login.message"),
          showClose: true
        });
      } else {
        const that = this
        axios.request({
          url: 'restful/vpn/login',
          data:{
            Account: that.loginForm.account,
            Password: that.loginForm.password
          },
          method: 'post'
        }).then(response => {
          if (response.data.code === 0) {
            const v = {
              "username": that.loginForm.account,
              "isShow": true,
              "isLogin": true
            }
            that.$store.commit('setToken', response.data.data[0].token)
            that.$store.commit('setUserInfo', v)
            that.$router.push("/myPlan");
          } else {
            this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        })
      
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
