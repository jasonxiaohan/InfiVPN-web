<template>
  <div class="page-myPlan">
    <section class="block-content">
      <h2>{{ this.$i18n.t("myplan.h2") }}</h2>
      <div class="gray-box plan">
        <div class="plan-head">
          <b v-if="!isFree">3 Months VPN</b>
          <b v-if="isFree">Free Experiences</b>
          <div>{{ this.$i18n.t("myplan.head-div") }}</div>
          <span class="status">Active</span>
          <el-button @click="goPage">{{ this.$i18n.t("myplan.button") }}</el-button>
        </div>
        <el-row :gutter="20" class="planState myplan">
          <el-col :span="12" class="left">
            <el-form class="myPlanForm" label-position="left" label-width="140px">
              <el-form-item v-bind:label="$t('myplan.validity')">
                2019.8.20 10:00:00-2019.12.20 10:00:00
              </el-form-item>
              <el-form-item v-bind:label="$t('myplan.totalamount')">
                <div v-if="!isFree">$ 199.50</div>
                <div v-if="isFree">$ 0</div>
              </el-form-item>
              <el-form-item v-bind:label="$t('myplan.traffic')">
                2.38 GB
              </el-form-item>
              <el-form-item v-bind:label="$t('myplan.paymentmethod')">
                Apple pay
              </el-form-item>
              <el-form-item v-bind:label="$t('myplan.device')">
                <div v-if="!isFree">3</div>
                <div v-if="isFree">1</div>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12" class="right">
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
        </el-row>
        <div v-if="!isFree" class="notify">{{this.$i18n.t("myplan.notfree")}}
        </div>
        <div v-if="isFree" class="notify">{{this.$i18n.t("myplan.free")}}
        </div>
      </div>
      <h2>{{this.$i18n.t("myplan.service-h2")}}</h2>
      <div class="service">
        <ul>
          <li>
            <div>
              <img src="../../assets/home/icon5.png" alt="">
            </div>
            {{this.$i18n.t("myplan.ul-li-1")}}
          </li>
          <li>
            <div>
              <img src="../../assets/home/icon2.png" alt="">
            </div>
            {{this.$i18n.t("myplan.ul-li-1")}}
          </li>
          <li>
            <div>
              <img src="../../assets/home/icon3.png" alt="">
            </div>
            {{this.$i18n.t("myplan.ul-li-2")}}
          </li>
          <li>
            <div>
              <img src="../../assets/home/icon4.png" alt="">
            </div>
            {{this.$i18n.t("myplan.ul-li-3")}}
          </li>
        </ul>
      </div>
      <div class="gray-box plan-detail">
        <div class="tit">
         {{this.$i18n.t("myplan.ul-li-4")}}
        </div>
        <ul class="four">
          <li>
            <img src="../../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-1")}}
          </li>
          <li>
            <img src="../../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-2")}}
          </li>
          <li>
            <img src="../../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-3")}}
          </li>
          <li>
            <img src="../../assets/account/ok.png" alt="">{{this.$i18n.t("myplan.plan-detail-ul-li-4")}}
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
