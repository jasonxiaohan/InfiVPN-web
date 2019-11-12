<template>
  <div class="page-login">
    <h2>{{this.$i18n.t("changepassword.title")}}</h2>
    <div class="dec">{{this.$i18n.t("changepassword.text")}}</div>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="loginForm">
      <el-form-item v-bind:label="$t('changepassword.oldpassword')">
        <el-input type="password" v-model="loginForm.oldPassword" show-password></el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('changepassword.newpassword')">
        <el-input type="password" :placeholder="$t('changepassword.message-password-length')" v-model="loginForm.newPassword" show-password></el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('changepassword.confirmpassword')">
        <el-input type="password" :placeholder="$t('changepassword.confirmpassword')" v-model="loginForm.confirmPassword" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doSubmit">{{this.$i18n.t("changepassword.button")}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      loginForm: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  mounted() {},
  methods: {
    getUserName() {
      if( this.$store.state.username!= "")
        return this.$store.state.username;
      return sessionStorage.username;      
    },
    doSubmit() {
        if(this.$store.state.token === false) {
           this.$message.warning({
            message: i18n.t("changepassword.login"),
            showClose: true
          });
           this.$router.push({path: '/login'});
           return;
        }
      
        // 验证旧密码
        if(this.loginForm.oldPassword.trim() === "") {
            this.$message.warning({
            message: i18n.t("changepassword.message-old-password"),
            showClose: true
          });
          return;
        }
        
        // 验证新密码
        if(this.loginForm.newPassword.trim().length <= 6) {
            this.$message.warning({
            message: i18n.t("changepassword.message-password-length"), 
            showClose: true
          });
          return;
        }

        // 验证确认密码
        if(this.loginForm.confirmPassword.trim() === "") {
            this.$message.warning({
            message: i18n.t("changepassword.message-confirm-password"),
            showClose: true
          });
          return;
        }

        // 确认两次密码是否一致
        if(this.loginForm.newPassword.trim() != this.loginForm.confirmPassword.trim()) {
            this.$message.warning({
            message: i18n.t("changepassword.messgae-confirm-password-equal"),
            showClose: true
          });
          return;
        }      

        const that = this
        this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "restful/vpn/changePasswd/"+that.$store.state.token,
          params: {
            account: that.getUserName(),
            oldPwd: that.loginForm.oldPassword.trim(),
            newPwd: that.loginForm.newPassword.trim(),
          }
        }).then(response => {
          if (response.data.code === 0) {           
            that.$store.commit('setToken', response.data.data.token)            
            that.$router.push("/myPlan");
          } else {
            if(response.data.msg == 'invalid token') {
              this.$store.commit('setToken','');
              sessionStorage.removeItem("username");
                
              this.$router.push({
                path: '/login'
              })
              return
            } 
            this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        });

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
