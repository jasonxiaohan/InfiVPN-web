<template>
  <div class="page-login">
    <h2>{{this.$i18n.t("login.title")}}</h2>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="loginForm">
      <el-form-item v-bind:label="Account">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item v-bind:label="Password">
        <el-input type="admin" v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doLogin">{{this.$i18n.t("login.button")}}</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/forgotPassword">{{this.$i18n.t("login.forgotLabel")}}</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      },
      Account: i18n.t("login.account"),
      Password: i18n.t("login.password")
    };
  },
  mounted() {},
  methods: {
    doLogin() {
      if (this.loginForm.account === "" || this.loginForm.password === "") {
        this.$message.warning({
          message: i18n.t("login.message"),
          showClose: true
        });
      } else {
        // this.$store.state.login = 1
        // this.$store.state.isShow = true
        // this.$router.push({
        //   path: '/myPlan'
        // })

        const that = this
        this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "/vpn/user/login",
          params: {
            username: that.loginForm.account,
            password: that.loginForm.password
          }
        }).then(response => {
          if (response.data.code === 0) {
            const v = {
              "username": that.loginForm.account,
              "isShow": true,
              "isLogin": true
            }
            that.$store.commit('setToken', response.data.data.token)
            that.$store.commit('setUserInfo', v)
            that.$router.push("/myPlan");
          } else {
            alert(response.data.msg);
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
