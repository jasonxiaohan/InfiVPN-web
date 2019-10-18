<template>
  <div class="page-referral">
    <h2>{{this.$i18n.t("referral.title")}}</h2>
    <img src="../../assets/referral/top.jpg" alt="" class="top">
    <h2>{{this.$i18n.t("referral.h2")}}</h2>

    <div class="gray-box">
      <div class="block-link">
        {{this.$i18n.t("referral.url")}}
        <el-form class="linkForm" label-position="left" label-width="0px">
          <el-form-item label="">
            <el-input disabled v-model="linkForm.code" class="code">
              <el-button slot="append"><img src="../../assets/referral/copy.png" alt=""></el-button>
            </el-input>
          </el-form-item>
        </el-form>
        <ul class="share">
          <li>
            <img src="../../assets/referral/icon_1.png" alt="">
          </li>
          <li>
            <img src="../../assets/referral/icon_2.png" alt="">
          </li>
          <li>
            <img src="../../assets/referral/icon_3.png" alt="">
          </li>
          <li>
            <img src="../../assets/referral/icon_4.png" alt="">
          </li>
        </ul>
      </div>
      <div class="white-box">
        <ul class="rule">
          <li>
            <span>①</span>{{this.$i18n.t("referral.intro-1")}}
          </li>
          <li>
            <span>②</span>{{this.$i18n.t("referral.intro-2")}}
          </li>
          <li>
            <span>③</span>{{this.$i18n.t("referral.intro-3")}}
          </li>
        </ul>
      </div>
    </div>
    <h2>{{this.$i18n.t("referral.invitation")}}</h2>
    <div class="gray-box">
      <h3>24 {{this.$i18n.t("referral.invited")}}</h3>
      <el-table :data="invitTableData" stripe style="width: 100%">
        <el-table-column prop="account" label="Account">
        </el-table-column>
        <el-table-column prop="plan" label="Plan">
        </el-table-column>
        <el-table-column prop="registerTime" label="Regiter Time">
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="invitationTotal" :current-page="currentPage" :page-size="pageSize" @current-change="handleCurrentChange"
                @size-change="handleSizeChange">
      </el-pagination>
    </div>

    <h2>{{this.$i18n.t("referral.rewards")}}</h2>
    <div class="gray-box">
      <h3>12 months got</h3>
      <el-table :data="rewardsTableData" stripe style="width: 100%">
        <el-table-column prop="extends" label="Extends">
        </el-table-column>
        <el-table-column prop="time" label="Time">
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      linkForm: {
        code: 'http://www.infivpn,com/buyvpn232fsdiflidlmf'
      },
      invitTableData: [],
      rewardsTableData: [{
        extends: '1 Month',
        time: '2019.08.20 10:00:23'
      }, {
        extends: '1 Month',
        time: '2019.08.20 10:00:23'
      }, {
        extends: '1 Month',
        time: '2019.08.20 10:00:23'
      }, {
        extends: '1 Month',
        time: '2019.08.20 10:00:23'
      }, {
        extends: '1 Month',
        time: '2019.08.20 10:00:23'
      }],
      currentPage: 1,
      pageSize: 10,
      invitationTotal: 0
    }
  },
  mounted() {
    this.getInvitation()
  },
  methods: {
    getInvitation() {
      const that = this
        this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "/vpn/user/invites",
          params: {
            token: this.$store.state.token,
            email: "0130198718@qq.com",
            page:this.currentPage,
            size:this.pageSize
          }
        }).then(response => {
          if (response.data.code === 0) {
              that.invitTableData = response.data.data
              that.invitationTotal = response.data.total
          } else {
            alert(response.data.msg);
          }
        });
    },
     handleCurrentChange(val){
          this.currentPage = val;

          this.getInvitation();
      },

        handleSizeChange(val){
            this.pageSize = val;
        }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
