<template>
  <div class="page-bottom">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="6" :md="5" :lg="5" :xl="5">
        <ul>
          <li>
            <img class="logo" src="../assets/bottom/logo_bottom.png" alt="">
          </li>
        </ul>
      </el-col>
      <el-col :sm="4" :md="4" :lg="4" :xl="4">
        <ul>
          <language/>
        </ul>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
        <ul>
          <li class="title">{{this.$i18n.t("bottom.bottom-1")}}</li>
          <li>
            <router-link to="/">{{this.$i18n.t("bottom.bottom-2")}}</router-link>
          </li>
          <li>
            <router-link to="/">{{this.$i18n.t("bottom.bottom-3")}}</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
        <ul>
          <li class="title">{{this.$i18n.t("bottom.bottom-4")}}</li>
          <li>
            <router-link to="/">{{this.$i18n.t("bottom.bottom-5")}}</router-link>
          </li>
          <li>
            <router-link to="/">{{this.$i18n.t("bottom.bottom-6")}}</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
        <ul>
          <li class="title">{{this.$i18n.t("bottom.bottom-7")}}</li>
          <li>
            <router-link to="/">{{this.$i18n.t("bottom.bottom-8")}}</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <ul class="center">
          <li class="title">{{this.$i18n.t("bottom.bottom-9")}}</li>
          <li>
            <a href="https://facebook.com/" target="_blank"><img src="../assets/bottom/facebook.png" alt=""></a>
            <a href="www.twitter.de/" target="_blank"><img src="../assets/bottom/twitter.png" alt=""></a>
            <a href="https://www.linkedin.com/" target="_blank"><img src="../assets/bottom/linkedin.png" alt=""></a>
            <a href="https://www.pinterest.com/" target="_blank"><img src="../assets/bottom/pinterest.png" alt=""></a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import language from '../components/Language';
export default {
  name: 'Home',
  components: {
    language
  },
  data() {
    return {
      collapsed:false
    }
  },
  mounted() {
    // this.setLocal(this.$i18n.locale)
  },
  methods: {
    local(){

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header-con{
    // background: #fff;
    // padding: 0 20px;
    // width: 100%;
  }
</style>
