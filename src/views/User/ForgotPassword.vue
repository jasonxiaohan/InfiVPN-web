<template>
  <div class="page-login">
    <h2>{{this.$i18n.t("forgotpassword.title")}}</h2>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="loginForm">
      <el-form-item v-bind:label="$t('forgotpassword.account')">
        <el-input v-model="loginForm.email">
          <el-button @click="sendCode" slot="append">{{this.$i18n.t("forgotpassword.send")}}</el-button>
        </el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('forgotpassword.verifiaccount')">
        <el-input v-model="loginForm.code" class="code">
          <!-- <el-button slot="append">{{this.$i18n.t("forgotpassword.send")}}</el-button> -->
        </el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('forgotpassword.password')">
        <el-input type="password" v-model="loginForm.newPassword" show-password></el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('forgotpassword.confirmpassword')">
        <el-input type="password" v-model="loginForm.confirmPassword" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doSubmit">{{this.$i18n.t("forgotpassword.button")}}</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/login">{{this.$i18n.t("forgotpassword.login")}}</router-link>
  </div>
</template>

<script>
import axios from '@/libs/api.request'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      loginForm: {
        email: '',
        code: '',
        newPassword: '',
        confirmPassword: ''
      }      
    }
  },
  mounted() {},
  methods: {
    // step 1，验证帐号
    // step 2,验证验证码、新密码、确认密码
    checkInput(step) {
      // 检查发送邮箱
      if(step === 1) {
        if(this.loginForm.email.trim() == "") {
          this.$message.warning({
            message: i18n.t("forgotpassword.email-message"),
            showClose: true
          })
          return false
        }
      }
      
      if(step === 2) {
        // 检查验证码 
        if(this.loginForm.code.trim() == "") {
          this.$message.warning({
            message: i18n.t("forgotpassword.code-message"),
            showClose: true
          })
          return false
        }
        
        // 验证新密码
        if(this.loginForm.newPassword.trim().length <= 6) {
            this.$message.warning({
            message: i18n.t("changepassword.message-password-length"), 
            showClose: true
          });
          return false
        }
        
        // 确认两次密码是否一致
        if(this.loginForm.newPassword.trim() != this.loginForm.confirmPassword.trim()) {
            this.$message.warning({
            message: i18n.t("changepassword.messgae-confirm-password-equal"),
            showClose: true
          });
          return false
        }
      }            
      return true
    },
    // 发送邮箱验证码
    sendCode() {
      if(this.checkInput(1)) {
        const that = this
        axios.request({
          url: 'restful/vpn/resetPasswd',
          data:{
            mail: that.loginForm.email,
          },
          method: 'post'
        }).then(response => {
          if (response.data.code === 0) {
            this.$message.success({
              message: i18n.t("forgotpassword.code-send-message"),
              showClose: true
            }); 
          } else {
            this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        })
      }      
    },
    doSubmit(){
      if(this.checkInput(2)) {
        const that = this
        axios.request({
          url: 'restful/vpn/resetPasswdWithCode',
          data:{
            mail: that.loginForm.email,
            code: that.loginForm.code,
            password: that.loginForm.newPassword          
          },
          method: 'post'
        }).then(response => {
          if (response.data.code === 0) {
            this.$message.success({
              message: i18n.t("forgotpassword.success"),
              showClose: true
            }); 
            this.$router.push("/login");
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
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
