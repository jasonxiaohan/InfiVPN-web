<template>
  <div class="page-myPlan">
    <section class="block-content">
      <h2>{{ this.$i18n.t("myplan.h2") }}</h2>
      <div class="gray-box plan">
        <div class="plan-head">
          <b v-if="!isFree">{{accountInfo.name}}</b>
          <b v-if="isFree">{{accountInfo.name}}</b>
          <div>{{ this.$i18n.t("myplan.head-div") }}</div>
          <span class="status" v-if="status === 1">{{ this.$i18n.t("myplan.status-active") }}</span>
          <span class="status" v-else>{{ this.$i18n.t("myplan.status-fail") }}</span>
          <el-button @click="goPage">{{ this.$i18n.t("myplan.button") }}</el-button>
        </div>
        <el-row :gutter="20" class="planState myplan">
          <el-col :span="12" class="left">
            <el-form class="myPlanForm" label-position="left" label-width="140px">
              <el-form-item v-bind:label="$t('myplan.validity')">
                2019.8.20 10:00:00-2019.12.20 10:00:00
              </el-form-item>
              <el-form-item v-bind:label="$t('myplan.totalamount')">
                <div>${{accountInfo.totalFee}}</div>
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
import rapid from 'eway-rapid'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      isFree: true,
      accountInfo:[],
      status: 0
    }
  },
  mounted() {
    this.getAccountInfo();
  },
  methods: {
    goPage() {
      this.$router.push({
        path: '/pricing'
      })
    },
    getUserName() {
      if( this.$store.state.username!= "")
        return this.$store.state.username;
      return sessionStorage.username;      
    },
    // 获取用户信息
    getAccountInfo(){                 
       const that = this
        this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "restful/vpn/getAccountInfo/"+that.$store.state.token,
          params:{
            "account": that.getUserName()
          }
        }).then(response => {
          if (response.data.code === 0) {
            that.accountInfo = response.data.data[0]       
            that.status = response.data.data[0].status     
          } else {
             this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
