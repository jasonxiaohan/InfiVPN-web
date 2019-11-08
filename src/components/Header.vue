<template>
  <div>
    <div class="page-header">
      <a @click="goPage('/')" class="logo"><img src="../assets/logo.png" alt="EasyVPN"></a>
      <el-menu class="el-menu" mode="horizontal">
        <el-menu-item index="1" @click="goPage('/pricing')">{{this.$i18n.t("header.pricing")}}</el-menu-item>
        <el-menu-item index="2" @click="goPage('/apps')">{{this.$i18n.t("header.apps")}}<img src="../assets/home/download.png"></el-menu-item>
        <el-menu-item v-if="isShow() === false" index="3" @click="goPage('/login')">{{this.$i18n.t("header.account")}}</el-menu-item>
        <el-menu-item v-if="isShow() === true" index="3" @click="goPage('/myPlan')">{{this.$i18n.t("header.account")}}</el-menu-item>
      </el-menu>
    </div>
    <div class="user-menu" v-if="isShow()" v-show="isShow() === true">
      <el-menu :default-active="activeIndex" class="el-menu user" mode="horizontal">
        <el-menu-item index="1" @click="goPage('/myPlan')"><img src="../assets/account/document_item.png">{{this.$i18n.t('header.myplan')}}
        </el-menu-item>
        <el-menu-item index="2" @click="goPage('/referral')"><img src="../assets/account/user.png">{{this.$i18n.t('header.referral')}}
        </el-menu-item>
        <el-menu-item index="3" @click="goPage('/changePassword')"><img src="../assets/account/key.png">{{this.$i18n.t('header.changepassword')}}
        </el-menu-item>
      </el-menu>
      <div class="right">
        {{this.$i18n.t('header.welcome')}},
        <div>{{getUserInfo()}}</div>
        <span>|</span>
        <a @click="logOut">{{this.$i18n.t('header.logout')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      activeIndex: '1',
      isLogin: this.$store.state.token
    }
  },
  created() {},
  methods: {
    goPage(router) {
      // if (router === '/' || router === '/apps' || router === '/pricing') {
      //   this.$store.state.isShow = false
      // } else {
      //   this.$store.state.isShow = true
      // }
      this.$router.push({
        path: router
      })
    },
    isShow() {
      if (this.$store.state.token) {
        return true
      }
      return false
    },
    getUserInfo() {
      if( this.$store.state.username!= "")
        return this.$store.state.username;
      return sessionStorage.username;      
    },
    logOut() {
      this.$store.state.username= "";
      this.$store.commit('setToken','');
      sessionStorage.removeItem("username");
      
      this.$router.push({
        path: '/login'
      })
    }
  },
  computed: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
