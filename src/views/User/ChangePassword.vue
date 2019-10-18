<template>
  <div class="page-login">
    <h2>{{this.$i18n.t("changepassword.title")}}</h2>
    <div class="dec">{{this.$i18n.t("changepassword.text")}}</div>
    <el-form class="loginForm" label-position="top" label-width="80px" :model="loginForm">
      <el-form-item v-bind:label="oldPassword">
        <el-input type="password" v-model="loginForm.oldPassword" show-password></el-input>
      </el-form-item>
      <el-form-item v-bind:label="newPassword">
        <el-input type="password" v-model="loginForm.newPassword" show-password></el-input>
      </el-form-item>
      <el-form-item v-bind:label="confirmpassword">
        <el-input type="password" v-model="loginForm.confirmPassword" show-password></el-input>
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
      },
      oldPassword: i18n.t("changepassword.oldpassword"),
      newPassword: i18n.t("changepassword.newpassword"),
      confirmpassword: i18n.t("changepassword.confirmpassword")
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
