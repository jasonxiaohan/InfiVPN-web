<template>
  <div class="page-home">
    <div class="block-top">
      <div class="left">
        <h2>Unrestricted Internet</h2>
        <ul>
          <li><img src="../assets/home/top_icon1.png" alt="">Security</li>
          <li><img src="../assets/home/top_icon2.png" alt="">Freedom</li>
          <li><img src="../assets/home/top_icon3.png" alt="">Private</li>
        </ul>
        <el-button class="getnow" @click="open">Get InfiVPN now</el-button>
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
          <h3>Enjoy unrestricted access worldwide</h3>
          <div class="content">ExpressVPN defeats content restrictions and censorship to deliver unlimited access to
            video, music, social media, and more, from anywhere in the world.
          </div>
          <el-button @click="open">Get InfiVPN now</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="pr-50">
          <h3>Protect all your devices</h3>
          <div class="content">Do you use Windows at work, macOS at home, and Linux
            for your special projects? No problem. There’s a NordVPN application for each of these, plus apps for iOS,
            Android, and Android TV. Oh, and also encrypted proxy extensions for Chrome and Firefox. Best of all, with
            one NordVPN account, you can secure up to 6 devices at the same time.
          </div>
          <div class="surrport">
            Available on:
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
          <el-button>Check all the devices</el-button>
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
          <h3>Anytime, anywhere, enjoy fast and stable connection</h3>
          <div class="content">Does Internet buffering affect our mood? Is it unacceptable to have to wait while
            watching video or downloading files? Don’t worry, with the 5700 RocketVPN services in 60 Countris or
            regions. The more servers, the lower the load, and the more widely distributed the servers, the more
            opportunities users have to find servers closer together.
          </div>
          <el-button @click="open">Get InfiVPN now</el-button>
        </el-col>
      </el-row>
      <div class="service">
        <h3>Service Assurance</h3>
        <ul>
          <li>
            <div>
              <img src="../assets/home/icon1.png" alt="">
            </div>
            Refund In 30 Days
          </li>
          <li>
            <div>
              <img src="../assets/home/icon2.png" alt="">
            </div>
            Reliable Connection
          </li>
          <li>
            <div>
              <img src="../assets/home/icon3.png" alt="">
            </div>
            Privacy Security
          </li>
          <li>
            <div>
              <img src="../assets/home/icon4.png" alt="">
            </div>
            Reliable
          </li>
        </ul>
      </div>
    </section>
    <el-dialog class="extendDialog" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <div class="header">
        <div class="title">
          <img class="" src="../assets/dialog/clock.png" alt="">
          Be hurry to Extend your plan
        </div>
        <img class="close" @click="close" src="../assets/dialog/close.png" alt="">
      </div>
      <div class="dialog-content">
        <img class="ad" src="../assets/dialog/ad.png" alt="">
        <el-row :gutter="20" class="planState">
          <el-col :span="16" class="left">
            <img src="../assets/dialog/logo_black.png" alt="" class="logo">
            <div class="text">Your private and secure internet is losing, go extend now</div>
            <ul class="leftTime">
              <li>
                <div>6</div>
                Months
              </li>
              <li>
                <div>6</div>
                Days
              </li>
              <li>
                <div>23</div>
                Hours
              </li>
              <li>
                <div>59</div>
                Minutes
              </li>
              <li>
                <div>59</div>
                Seconds
              </li>
            </ul>
          </el-col>
          <el-col :span="8" class="right">
            <ul>
              <li>
                <img src="../assets/account/ok.png" alt="">24/7 customer support by live chat
              </li>
              <li>
                <img src="../assets/account/ok.png" alt="">Ultra-fast servers in 23 countries
              </li>
              <li>
                <img src="../assets/account/ok.png" alt="">Best-in-class security & encryption
              </li>
              <li>
                <img src="../assets/account/ok.png" alt="">No activity logs & no connection logs
              </li>
            </ul>
              <el-button @click="extend">Get Extend</el-button>
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
      if(this.$store.state.token === false) {
        this.$router.push({path:'/login'});
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
