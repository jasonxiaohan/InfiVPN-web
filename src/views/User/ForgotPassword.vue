<template>
  <div class="page-login">
    <h2>{{loginLabel.title}}</h2>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="loginForm">
      <el-form-item v-bind:label="loginLabel.account">
        <el-input v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item v-bind:label="loginLabel.verifiaccount">
        <el-input v-model="loginForm.code" class="code">
          <el-button slot="append">{{loginLabel.send}}</el-button>
        </el-input>
      </el-form-item>
      <el-form-item v-bind:label="loginLabel.password">
        <el-input type="password" v-model="loginForm.newPassword" show-password></el-input>
      </el-form-item>
      <el-form-item v-bind:label="loginLabel.confirmpassword">
        <el-input type="password" v-model="loginForm.confirmPassword" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doSubmit">{{loginLabel.button}}</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/login">{{loginLabel.login}}</router-link>
  </div>
</template>

<script>
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
      },
      loginLabel : {
        "title": i18n.t("forgotpassword.title"),
        "account": i18n.t("forgotpassword.account"),
        "verifiaccount": i18n.t("forgotpassword.verifiaccount"),
        "send": i18n.t("forgotpassword.send"),
        "password": i18n.t("forgotpassword.password"),
        "confirmpassword": i18n.t("forgotpassword.confirmpassword"),
        "button": i18n.t("forgotpassword.button"),
        "login": i18n.t("forgotpassword.login"),
      }
    }
  },
  mounted() {},
  methods: {
    doSubmit() {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
