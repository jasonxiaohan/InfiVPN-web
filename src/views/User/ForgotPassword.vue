<template>
  <div class="page-login">
    <h2>{{this.$i18n.t("forgotpassword.title")}}</h2>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="loginForm">
      <el-form-item v-bind:label="$t('forgotpassword.account')">
        <el-input v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item v-bind:label="$t('forgotpassword.verifiaccount')">
        <el-input v-model="loginForm.code" class="code">
          <el-button slot="append">{{this.$i18n.t("forgotpassword.send")}}</el-button>
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
    doSubmit() {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
