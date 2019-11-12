<template>
  <div class="page-home">
    <div class="block-top">
      <div class="left">
        <h2>{{this.$i18n.t("home.h2")}}</h2>
        <ul>
          <li><img src="../assets/home/top_icon1.png" alt="">{{this.$i18n.t("home.ul-li-1")}}</li>
          <li><img src="../assets/home/top_icon2.png" alt="">{{this.$i18n.t("home.ul-li-2")}}</li>
          <li><img src="../assets/home/top_icon3.png" alt="">{{this.$i18n.t("home.ul-li-3")}}</li>
        </ul>
        <el-button class="getnow" @click="open">{{this.$i18n.t("home.button")}}</el-button>
      </div>
      <div class="right">
        <img src="../assets/home/bg_price.png" alt="">
        <span>$ 2.77/mon</span>
      </div>
      <img class="top-bg" src="../assets/home/bg_top.png" alt="">
    </div>
    <section class="block-content">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <img class="face" src="../assets/home/img_list_1.png" alt="">
        </el-col>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="pl-50">
          <h3>{{ this.$i18n.t("home.h3") }}</h3>
          <div class="content">{{ this.$i18n.t("home.div-content") }}
          </div>
          <el-button @click="open">{{this.$i18n.t("home.button")}}</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="pr-50">
          <h3>{{ this.$i18n.t("home.el-row2-h3") }}</h3>
          <div class="content">{{ this.$i18n.t("home.el-row2-content") }}
          </div>
          <div class="surrport">
            {{ this.$i18n.t("home.el-row2-support") }}
            <ul>
              <li><img src="../assets/home/android.png" alt=""></li>
              <li><img src="../assets/home/win.png" alt=""></li>
              <li><img src="../assets/home/ios.png" alt=""></li>
              <li><img src="../assets/home/macOS.png" alt=""></li>
              <li><img src="../assets/home/firfox.png" alt=""></li>
              <li><img src="../assets/home/chrome.png" alt=""></li>
              <li><img src="../assets/home/androidtv.png" alt=""></li>
              <li><img src="../assets/home/linux.png" alt=""></li>
            </ul>
          </div>
          <el-button>{{ this.$i18n.t("home.el-row2-button") }}</el-button>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <img class="face" src="../assets/home/img_list_2.png" alt="">
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <img class="face" src="../assets/home/img_list_3.png" alt="">
        </el-col>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="pl-50">
          <h3>{{ this.$i18n.t("home.el-row3-h3") }}</h3>
          <div class="content">{{ this.$i18n.t("home.el-row3-content") }}
          </div>
          <el-button @click="open">{{this.$i18n.t("home.button")}}</el-button>
        </el-col>
      </el-row>
      <div class="service">
        <h3>{{this.$i18n.t("home.service-h3")}}</h3>
        <ul>
          <li>
            <div>
              <img src="../assets/home/icon1.png" alt="">
            </div>
            {{this.$i18n.t("home.service-li1")}}
          </li>
          <li>
            <div>
              <img src="../assets/home/icon2.png" alt="">
            </div>
            {{this.$i18n.t("home.service-li2")}}
          </li>
          <li>
            <div>
              <img src="../assets/home/icon3.png" alt="">
            </div>
            {{this.$i18n.t("home.service-li3")}}
          </li>
          <li>
            <div>
              <img src="../assets/home/icon4.png" alt="">
            </div>
            {{this.$i18n.t("home.service-li4")}}
          </li>
        </ul>
      </div>
    </section>
    <el-dialog class="extendDialog" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <div class="header">
        <div class="title">
          <img class="" src="../assets/dialog/clock.png" alt="">
          {{this.$i18n.t("home.ad-title")}}
        </div>
        <img class="close" @click="close" src="../assets/dialog/close.png" alt="">
      </div>
      <div class="dialog-content">
        <img class="ad" src="../assets/dialog/ad.png" alt="">
        <el-row :gutter="20" class="planState">
          <el-col :span="16" class="left">
            <img src="../assets/dialog/logo_black.png" alt="" class="logo">
            <div class="text">{{this.$i18n.t("home.ad-text")}}</div>
            <ul class="leftTime">
              <li>
                <div>6</div>
                {{this.$i18n.t("myplan.planstate-ul-li-1")}}
              </li>
              <li>
                <div>6</div>
                {{this.$i18n.t("myplan.planstate-ul-li-2")}}
              </li>
              <li>
                <div>23</div>
                {{this.$i18n.t("myplan.planstate-ul-li-3")}}
              </li>
              <li>
                <div>59</div>
                {{this.$i18n.t("myplan.planstate-ul-li-4")}}
              </li>
              <li>
                <div>59</div>
                {{this.$i18n.t("myplan.planstate-ul-li-5")}}
              </li>
            </ul>
          </el-col>
          <el-col :span="8" class="right">
            <ul>
              <li>
                <img src="../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-1")}}
              </li>
              <li>
                <img src="../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-2")}}
              </li>
              <li>
                <img src="../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-3")}}
              </li>
              <li>
                <img src="../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-4")}}
              </li>
            </ul>
              <el-button @click="extend">{{this.$i18n.t("home.dialog-content-button")}}</el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
    <img class="comments" src="../assets/home/comments.png" alt="">
  </div>  
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  mounted() {
  },
  methods: {
    open() {
      if(this.$store.state.token =="") {
        this.$router.push({path:'/pricing'});
        return;
      }
      this.dialogVisible = true
    },
    close() {
      this.dialogVisible = false
    },
    extend() {
      this.$router.push({path: '/pricing'});
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
