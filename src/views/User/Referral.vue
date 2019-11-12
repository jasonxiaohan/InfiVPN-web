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
              <el-button slot="append"><img src="../../assets/referral/copy.png" alt="" @click="copy(linkForm.code)"></el-button>
            </el-input>
          </el-form-item>
        </el-form>
        <ul class="share">
          <!-- <li>
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
          </li> -->
          <share :config="config"></share>
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
      <h3>{{invitationTotal}} {{this.$i18n.t("referral.invited")}}</h3>
      <el-table :data="invitTableData" stripe style="width: 100%">
        <el-table-column prop="email" v-bind:label="$t('referral.invitation-account')">
        </el-table-column>
        <!-- <el-table-column prop="plan" v-bind:label="$t('referral.invitation-plan')">
        </el-table-column> -->
        <el-table-column prop="register" v-bind:label="$t('referral.invitation-time')">
        </el-table-column>
      </el-table>
      <!-- <el-pagination background layout="prev, pager, next" :total="invitationTotal" :current-page="currentPage" :page-size="pageSize" @current-change="handleCurrentChange"
                @size-change="handleSizeChange">
      </el-pagination> -->
    </div>

    <h2>{{this.$i18n.t("referral.rewards")}}</h2>
    <div class="gray-box">
      <h3>12 {{this.$i18n.t("referral.rewards-h3")}}</h3>
      <el-table :data="rewardsTableData" stripe style="width: 100%">
        <el-table-column prop="extends" v-bind:label="$t('referral.rewards-extends')">
        </el-table-column>
        <el-table-column prop="time" v-bind:label="$t('referral.rewards-time')">
        </el-table-column>
      </el-table>
      <!-- <el-pagination background layout="prev, pager, next" :total="10">
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
// import share from 'vue-social-share'
// import GitHubBadge from 'vue-github-badge'
import axios from '@/libs/api.request'
export default {
  name: 'Home',
  components: {
    // 'github-badge': GitHubBadge
  },
  data() {
    return {
      linkForm: {
        code: ''
      },
      invitTableData: [],
      rewardsTableData: [],
      currentPage: 1,
      pageSize: 10,
      invitationTotal: 0,
      config:{
        image:'https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=1422779112,1187154664&fm=74&app=80&f=JPG&size=f121,121?sec=1880279984&t=ce25cbed295f905e692bb09b0e0dd08d',
        sites:['google','facebook','twitter']
      }
    }
  },
  mounted() {
    this.getInvitation()
    this.myRewards()
    this.invitationLink()

    // window._bd_share_config = this.defaultConfig
    // document.getElementsByTagName('body')[0].appendChild(document.createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)
  },
  methods: {
    // 我的邀请
    getInvitation() {
      const that = this
        this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "restful/vpn/myInvitaions/"+that.$store.state.token,        
        }).then(response => {
          if (response.data.code === 0) {
              that.invitTableData = response.data.data
              that.invitTableData.forEach((item,index) =>{
                that.invitTableData[index].register = item.invitationTime[0]+"-"+item.invitationTime[1]+"-"+item.invitationTime[2]
              }) 
              that.invitationTotal = response.data.total
          } else {
            if(response.data.msg == 'invalid token') {
              this.$store.commit('setToken','');
              sessionStorage.removeItem("username");
                
              this.$router.push({
                path: '/login'
              })
              return
            }
            this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        });
    },
    // 我的奖赏
    myRewards() {
        const that = this
        this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "restful/vpn/myRewards/"+that.$store.state.token,        
        }).then(response => {
          if (response.data.code === 0) {
              that.rewardsTableData = response.data.data
              that.rewardsTableData.forEach((item,index) =>{
                that.rewardsTableData[index].extends = item.quantity+" "+item.unit
                that.rewardsTableData[index].time = item.rewardTime[0]+"-"+item.rewardTime[1]+"-"+item.rewardTime[2]
              }) 
          } else {
            if(response.data.msg == 'invalid token') {
              this.$store.commit('setToken','');
              sessionStorage.removeItem("username");
                
              this.$router.push({
                path: '/login'
              })
              return
            }
            this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        });
    },
     handleCurrentChange(val){
          this.currentPage = val;

          this.getInvitation();
      },
      handleSizeChange(val){
          this.pageSize = val;
      },
      copy(text) {
        let copyInput = document.createElement('INPUT')
        copyInput.type = 'text'
        copyInput.style.width = '1px'
        copyInput.style.height = '1px'
        copyInput.style.border = 0
        copyInput.style.outline = 0
        document.body.appendChild(copyInput)
        copyInput.value = text
        copyInput.select()
        if(document.execCommand('copy')) {
          document.execCommand('Copy')
          this.copyTip()
        }
        document.body.removeChild(copyInput)
      },
      copyTip() {
        this.$message.success({
          message: "复制成功",
          showClose: true
        })
      },
      shareConfig()  {
        this.vshareConfig = {        
        }
      },
      getUserName() {
        if( this.$store.state.username!= "")
          return this.$store.state.username;
        return sessionStorage.username;      
      },
      // 生成邀请好友的链接
      invitationLink() {
        const that = this
        axios.request({
          url: 'restful/vpn/invitationLink/'+that.$store.state.token,
          data:{
            account: that.getUserName(),
          },
          method: 'post'
        }).then(response => {
          if (response.data.code === 0) {
            this.linkForm.code = response.data.data[0];  
          } else {
            if(response.data.msg == 'invalid token') {
              this.$store.commit('setToken','');
              sessionStorage.removeItem("username");
                
              this.$router.push({
                path: '/login'
              })
              return
            }
            this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        })
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
