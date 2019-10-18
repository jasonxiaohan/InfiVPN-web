<template>
  <div class="page-myPlan">
    <section class="block-content">
      <h2>My Services</h2>
      <div class="gray-box plan">
        <div class="plan-head">
          <b v-if="!isFree">3 Months VPN</b>
          <b v-if="isFree">Free Experiences</b>
          <div>-Private and secure internet access</div>
          <span class="status">Active</span>
          <el-button @click="goPage">Extend</el-button>
        </div>
        <el-row :gutter="20" class="planState myplan">
          <el-col :span="12" class="left">
            <el-form class="myPlanForm" label-position="left" label-width="140px">
              <el-form-item label="Validity">
                2019.8.20 10:00:00-2019.12.20 10:00:00
              </el-form-item>
              <el-form-item label="Total Amount">
                <div v-if="!isFree">$ 199.50</div>
                <div v-if="isFree">$ 0</div>
              </el-form-item>
              <el-form-item label="Traffic">
                2.38 GB
              </el-form-item>
              <el-form-item label="Payment method">
                Apple pay
              </el-form-item>
              <el-form-item label="Device">
                <div v-if="!isFree">3</div>
                <div v-if="isFree">1</div>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12" class="right">
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
        </el-row>
        <div v-if="!isFree" class="notify">You can use our services in 3 devices, and only 1 device online at the same
          time
        </div>
        <div v-if="isFree" class="notify">You can use our services in 1 devices, upgrade to our pricing plan, you can
          use in 3 devices
        </div>
      </div>
      <h2>Service Assurance</h2>
      <div class="service">
        <ul>
          <li>
            <div>
              <img src="../../assets/home/icon5.png" alt="">
            </div>
            Servers in 182 countryies
          </li>
          <li>
            <div>
              <img src="../../assets/home/icon2.png" alt="">
            </div>
            Reliable Connection
          </li>
          <li>
            <div>
              <img src="../../assets/home/icon3.png" alt="">
            </div>
            Privacy Security
          </li>
          <li>
            <div>
              <img src="../../assets/home/icon4.png" alt="">
            </div>
            Reliable
          </li>
        </ul>
      </div>
      <div class="gray-box plan-detail">
        <div class="tit">
          Plan Details
        </div>
        <ul class="four">
          <li>
            <img src="../../assets/account/ok.png" alt="">24/7 customer support by live chat
          </li>
          <li>
            <img src="../../assets/account/ok.png" alt="">Ultra-fast servers in 23 countries
          </li>
          <li>
            <img src="../../assets/account/ok.png" alt="">Best-in-class security & encryption
          </li>
          <li>
            <img src="../../assets/account/ok.png" alt="">No activity logs & no connection logs
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      isFree: true
    }
  },
  mounted() {},
  methods: {
    goPage() {
      this.$router.push({
        path: '/pricing'
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
