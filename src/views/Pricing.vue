<template>
  <div class="page-pricing">
    <h2>{{this.$i18n.t("pricing.h2")}}</h2>
    <ul class="four">
      <li>
        <img src="../assets/account/ok.png" alt="">{{ this.$i18n.t("pricing.ul-li1") }}
      </li>
      <li>
        <img src="../assets/account/ok.png" alt="">{{ this.$i18n.t("pricing.ul-li2") }}
      </li>
      <li>
        <img src="../assets/account/ok.png" alt="">{{ this.$i18n.t("pricing.ul-li3") }}
      </li>
      <li>
        <img src="../assets/account/ok.png" alt="">{{ this.$i18n.t("pricing.ul-li4") }}
        <ul class="surport">
          <li><img src="../assets/home/android.png" alt=""></li>
          <li><img src="../assets/home/win.png" alt=""></li>
          <li><img src="../assets/home/ios.png" alt=""></li>
          <li><img src="../assets/home/macOS.png" alt=""></li>
          <li><img src="../assets/home/firfox.png" alt=""></li>
          <li><img src="../assets/home/chrome.png" alt=""></li>
          <li><img src="../assets/home/androidtv.png" alt=""></li>
          <li><img src="../assets/home/linux.png" alt=""></li>
        </ul>
      </li>
    </ul>
    <section>
      <div class="tit">
        <span>1</span>{{this.$i18n.t("pricing.section1")}}
      </div>
      <el-row type="flex" class="block-price">
        <!-- <el-col :span="8">
          <div class="price-box" @click="checkedPlan(0)" :class="{green:choicePlan==0}">
            <div class="head">Free Experiences</div>
            <div class="body">
              <div class="price-old">$ 5.87/mon</div>
              <div class="price-now">
                <b>Free</b> /week
              </div>
              <div class="time">For a week</div>
              <div class="dec">$ 0.00 for a week</div>
            </div>
          </div>
          <div class="my-plan">
            <div v-if="myPlan===0"><img src="../assets/pricing/star.png" alt="">Your plan</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="price-box" @click="checkedPlan(1)" :class="{green:choicePlan==1}">
            <div class="head">3 Months Plan
              <div class="zhekou">
                <img src="../assets/pricing/zhe.png" alt="">
                <span>Save <br> 46%</span>
              </div>
            </div>
            <div class="subTit">Most Popular</div>
            <div class="body">
              <div class="price-old">$ 5.87/mon</div>
              <div class="price-now">
                $ <b>2.75</b> /mon
              </div>
              <div class="time">Save $ 192.90</div>
              <div class="dec"><span>$ 492.00</span> $ 194.25 for 3 months</div>
            </div>
          </div>
          <div class="my-plan">
            <div v-if="myPlan===1"><img src="../assets/pricing/star.png" alt="">Your plan</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="price-box" @click="checkedPlan(2)" :class="{green:choicePlan==2}">
            <div class="head">1 Year Plan</div>
            <div class="body">
              <div class="price-old">$ 5.87/mon</div>
              <div class="price-now">
                $ <b>3.54</b> /year
              </div>
              <div class="time">Save $ 192.90</div>
              <div class="dec"><span>$ 492.00</span> $ 194.25 for 1 year</div>
            </div>
          </div>
          <div class="my-plan">
            <div v-if="myPlan===2"><img src="../assets/pricing/star.png" alt="">Your plan</div>
          </div>
        </el-col> -->


        <el-col :span="8" v-for="(plan,index) in listPlans" :key="plan.id">                                            
            <template v-if="plan.id==1">
                <div class="price-box" @click="checkedPlan(index,plan.id)" :class="{green:choicePlan==plan.id}">
                <div class="head">{{ plan.name }}
                  <div class="zhekou">
                    <!-- <img src="../assets/pricing/zhe.png" alt="">
                    <span>Save <br> 46%</span> -->
                  </div>
                </div>
                <div class="subTit">Most Popular</div>
                <div class="body">
                  <div class="price-old">${{ (plan.totalFee).toFixed(2) }}/{{ plan.span }}</div>
                  <div class="price-now">
                    $ <b>{{ (plan.actualFee).toFixed(2) }}</b> /{{plan.span}}
                  </div>
                  <div class="time">Save ${{(plan.totalFee-plan.actualFee).toFixed(2)}}</div>
                  <div class="dec"><span>${{plan.totalFee}}</span> ${{ (plan.actualFee).toFixed(2) }} for {{plan.name}}</div>
                </div>
              </div>
              <div class="my-plan">
                <div v-if="myPlan===plan.id"><img src="../assets/pricing/star.png" alt="">Your plan</div>
              </div>
            </template>
            <template v-else>
              <div class="price-box" @click="checkedPlan(index, plan.id)" :class="{green:choicePlan==plan.id}">
                <div class="head">{{ plan.name }}</div>
                <div class="body">
                  <div class="price-old">${{(plan.totalFee).toFixed(2)}}/{{ plan.span }}</div>
                  <div class="price-now">
                    $ <b>{{ (plan.actualFee).toFixed(2) }}</b> /{{plan.span}}
                  </div>
                  <div class="time">Save ${{(plan.totalFee-plan.actualFee).toFixed(2)}}</div>
                  <div class="dec"><span>${{plan.totalFee}}</span> ${{ (plan.actualFee).toFixed(2) }} for {{plan.name}}</div>
                </div>
              </div>
              <div class="my-plan">
                <div v-if="myPlan===plan.id"><img src="../assets/pricing/star.png" alt="">Your plan</div>
              </div> 
            </template>                      
        </el-col>

      </el-row>
    </section>
    <section v-if="this.$store.state.token == ''">
      <div class="tit">
        <span>2</span>{{this.$i18n.t("pricing.section2")}}
      </div>
      <div class="block-reg">
        <div class="login">
          {{this.$i18n.t("pricing.login-label")}}
          <router-link to="/login">{{this.$i18n.t("pricing.login")}}</router-link>
        </div>
        <el-form class="regForm" :model="regForm" ref="regForm" label-position="top" :inline="true">
          <el-form-item v-bind:label="$t('pricing.email')">
            <el-input :placeholder="$t('register.email-msg2')" v-model="regForm.email"></el-input>
          </el-form-item>
          <el-form-item v-bind:label="$t('pricing.password')">
            <el-input type="password" :placeholder="$t('pricing.password-label')" v-model="regForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item v-bind:label="$t('pricing.confirmPassword')">
            <el-input type="password" :placeholder="$t('pricing.confirmpassword-label')" v-model="regForm.confirmPassword" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>
    </section>
    <section>
      <div class="tit" v-if="this.$store.state.token === false">
        <span>3</span>{{this.$i18n.t("pricing.section3")}}
      </div>
      <div class="tit" v-if="this.$store.state.token === true">
        <span>2</span>{{this.$i18n.t("pricing.section3")}}
      </div>
      <div class="block-payment" v-if="!ifFree">
        <div class="pay-type">
          <el-radio-group v-model="payType" @change="changePayment">
          <!-- <el-radio v-model="payType" label="1" border>
            {{this.$i18n.t("pricing.credit-card")}}
            <div class="imgs">
              <img src="../assets/pricing/pay1.png" alt="">
              <img src="../assets/pricing/pay2.png" alt="">
              <img src="../assets/pricing/pay3.png" alt="">
            </div>
          </el-radio> -->
          <el-radio v-model="payType" label="2" border>Paypal
            <div class="imgs">
              <img src="../assets/pricing/pay4.png" alt="">
            </div>
          </el-radio>
          <el-radio v-model="payType" label="3" border>
            {{this.$i18n.t("pricing.omipay")}}
            <div class="imgs">
              <img src="../assets/pricing/pay5.png" alt="">
            </div>
          </el-radio>
          </el-radio-group>
        </div>
        <div class="pay-info">
          <el-row :gutter="20">
            <el-col :span="18" class="card-info">
              <div class="head">                
                <!-- <template v-if="payType == 1">
                  {{this.$i18n.t("pricing.credit-card")}}
                  <div class="imgs">
                    <img src="../assets/pricing/pay1.png" alt="">
                    <img src="../assets/pricing/pay2.png" alt="">
                    <img src="../assets/pricing/pay3.png" alt="">
                  </div>
                </template> -->
                <template v-if="payType == 2">
                  Paypal
                  <div class="imgs">
                    <img src="../assets/pricing/pay4.png" alt="">
                  </div>
                </template>
                <template v-if="payType == 3">
                  {{this.$i18n.t("pricing.omipay")}}
                  <div class="imgs">
                    <img src="../assets/pricing/pay5.png" alt="">
                  </div>
                </template>
              </div>
              <ul class="order-detail">
                <li>
                  <div>{{currentPlan.name}}</div>
                  <div>${{(currentPlan.actualFee).toFixed(2)}}</div>
                </li>
                <li>
                  <div>{{this.$i18n.t("pricing.discount")}}</div>
                  <div>${{currentPlan.discount}}</div>
                </li>
                <li>
                  <div>{{this.$i18n.t("pricing.vat")}}</div>
                  <div>$0.0</div>
                </li>
                <li>
                  <div>{{this.$i18n.t("pricing.total")}}</div>
                  <div>${{(currentPlan.actualFee).toFixed(2)}}</div>
                </li>
              </ul>
              <el-form class="cardForm" label-position="top" :inline="true" v-if="ezidebit === false">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item v-bind:label="$t('pricing.first-name')">
                      <el-input placeholder="" v-model="paymentForm.firstName"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item v-bind:label="$t('pricing.last-name')">
                      <el-input placeholder="" v-model="paymentForm.lastName"></el-input>
                    </el-form-item>
                  </el-col>
                  
                  <el-col :span="24">
                    <el-form-item v-bind:label="$t('pricing.card-number')">
                      <el-input placeholder="" v-model="paymentForm.cardNumber"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item v-bind:label="$t('pricing.expiry-date')">
                      <div class="block">
                          <el-date-picker
                            v-model="paymentForm.expiryDate"
                            type="date"
                            :placeholder="$t('pricing.select-date')">
                          </el-date-picker>
                        </div>                   
                    </el-form-item>
                  </el-col>                  
                  <el-col :span="12">
                    <el-form-item>
                      <label class="cw">CVV<img src="../assets/pricing/help.png" alt=""></label>
                      <el-input placeholder="" v-model="paymentForm.cvv"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="" class="rem">
                      <el-checkbox v-model="remember">{{this.$i18n.t("pricing.remember")}}</el-checkbox>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <div class="autoPay" v-if="ezidebit === false">
                <el-radio v-model="autopay" label="1">{{this.$i18n.t("pricing.automatic")}}</el-radio>
                <div class="content">
                  <!-- Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment info Automatic
                  Payment info Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment
                  info Automatic Payment info Automatic Payment info Automatic Payment info...  -->
                  <a @click="openDialog(1)">{{this.$i18n.t("pricing.details")}}
                  ></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <ul class="pay-tips">
                <li class="head">{{this.$i18n.t("pricing.ul-li-head")}}</li>
                <li>
                  <img src="../assets/account/ok.png" alt="">{{this.$i18n.t('myplan.plan-detail-ul-li-1')}}
                </li>
                <li>
                  <img src="../assets/account/ok.png" alt="">{{this.$i18n.t('myplan.plan-detail-ul-li-2')}}
                </li>
                <li>
                  <img src="../assets/account/ok.png" alt="">{{this.$i18n.t('myplan.plan-detail-ul-li-3')}}
                </li>
                <li>
                  <img src="../assets/account/ok.png" alt="">{{this.$i18n.t('myplan.plan-detail-ul-li-4')}}
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
        <el-button class="black join" v-if="this.$store.state.token == ''" @click="join">{{this.$i18n.t("pricing.button")}}</el-button>
        <el-button class="black join" v-else @click="renew">{{this.$i18n.t("pricing.button-renew")}}</el-button>
        <div class="rules">{{this.$i18n.t("pricing.form-label")}}
          <!-- <a @click="openDialog(2)">{{this.$i18n.t("pricing.service")}}</a> -->
          <router-link to="/agreement">{{this.$i18n.t("pricing.service")}}</router-link>
        </div>
      </div>
      <div class="block-payment" v-if="ifFree">
        <div class="price-free">
          $ <span>0.0</span>
        </div>        
        <div class="dec">
          <span>{{this.$i18n.t("pricing.deduction-1")}}{{this.getNowDate(0, 7)}}{{this.$i18n.t("pricing.deduction-2")}}</span>
        </div>        
        <el-button class="black join" @click="join">{{this.$i18n.t("pricing.button")}}</el-button>
      </div>
    </section>

    <el-dialog class="extendDialog" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <div class="header">
        <div class="title">
          <img class="" src="../assets/dialog/info.png" alt="">
          <diiv v-if="dialogs === 1">Automatic Payment Info</diiv>
          <diiv v-if="dialogs === 2">Terms of Service</diiv>
        </div>
        <img class="close" @click="close" src="../assets/dialog/close.png" alt="">
      </div>
      <div class="dialog-content">
        <div class="details" v-if="dialogs === 1">
          <p>Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic
            Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info
            Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info Automatic
            Payment
            info Automatic Payment info Automatic Payment info. </p>
          <p>Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic
            Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info
            Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info Automatic
            Payment
            info Automatic Payment info Automatic Payment info. </p>
          <p>Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic
            Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info
            Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info Automatic
            Payment
            info Automatic Payment info Automatic Payment info. </p>
          <p>Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic
            Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info
            Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info Automatic
            Payment
            info Automatic Payment info Automatic Payment info. </p>
          <p>Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic
            Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info
            Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info Automatic
            Payment
            info Automatic Payment info Automatic Payment info. </p>
          <p>Automatic Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic
            Payment info Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info
            Automatic Payment info Automatic Payment info Automatic Payment info. Automatic Payment info Automatic
            Payment
            info Automatic Payment info Automatic Payment info. </p>
        </div>
        <div class="terms" v-if="dialogs === 2">
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
          <p>Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms
            of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.Terms of
            Service.Terms of Service.Terms of Service.Terms of Service.Terms of Service.</p>
        </div>
        <el-button class="black close" @click="close">OK</el-button>
      </div>
    </el-dialog>

    <!--付款提示框 start-->
    <el-dialog class="extendDialog" :visible.sync="paydialogVisible" :close-on-click-modal="false" width="400px">
      <div class="header">
        <div class="title">
          <diiv v-if="paydialogs === 1">{{this.$i18n.t("pricing.pay-success")}}</diiv>
          <diiv v-if="paydialogs === 2">{{this.$i18n.t("pricing.pay-fail")}}</diiv>
        </div>
        <img class="close" @click="payclose" src="../assets/dialog/close.png" alt="">
      </div>
      <div class="dialog-content">
        <div class="tips" v-if="paydialogs === 1">
          <img src="../assets/dialog/success.png" alt="">
          <div>{{ payShowName }}</div>
          <b>$ {{ payShowAmount }}</b>
        </div>
        <div class="tips" v-if="paydialogs === 2">
          <img src="../assets/dialog/fail.png" alt="">
          <div>1 Year Plan</div>
          <b>$ 103.50</b>
        </div>
        <el-button v-if="paydialogs === 1" class="black close" @click="payclose">{{this.$i18n.t("pricing.pay-completed")}}</el-button>
        <el-button v-if="paydialogs === 2" class="black close" @click="payclose">{{this.$i18n.t("pricing.pay-again")}}</el-button>
      </div>
    </el-dialog>
    <!--付款提示框 end-->
  </div>
</template>

<script>
import config from '@/config'
import qs from 'qs'
import axios from 'axios'
import JSONP from 'vue-jsonp'
export default {
  name: 'Pricing',
  components: {},
  data() {    
    return {
      regForm: {
        email: "",
        password: "",
        confirmPassword: ""
      },      
      paymentForm: {
        "firstName": "",
        "lastName": "",
        "cardNumber": "",
        "expiryDate": "",
        "cvv": ""
      },
      dialogVisible: false,
      paydialogVisible: false,
      payType: '2',
      remember: true,
      autopay: '1',
      choicePlan: 1,
      ifFree: false,
      dialogs: 1,
      paydialogs: 1,
      myPlan: 0,
      value1: '',
      value2: '',
      options: [{
        value: '0',
        label: '1'
      }, {
        value: '1',
        label: '2'
      }],
      listPlans: [],
      currentPlan:{},
      // 表示ezidebit支付
      ezidebit: true,
      payShowName: "",
      payShowAmount: 0
    }
  },
  created() {},
  mounted() {
    // const s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://static.ezidebit.com.au/javascriptapi/js/ezidebit_2_0_0.min.js';
    // document.body.appendChild(s);
    this.listPlan();
    let tx = this.$route.query.orderId
    if(tx != undefined) {
        this.selectPaypalOrder(tx)
    }
  },
  methods: {
    openDialog(val) {
      this.dialogs = val
      this.dialogVisible = true
    },
    close() {
      this.dialogVisible = false
    },
    payclose() {
      this.paydialogVisible = false
    },
    checkedPlan(index,planid) {
      this.choicePlan = planid
      if (planid === 3) {
        this.ifFree = true
      } else {
        this.ifFree = false
      }      
      this.currentPlan = this.listPlans[index]
    },
    join(){
      if(!this.$store.state.token || sessionStorage.username == undefined) {
        if(this.regForm.email === "") {
          this.$message.warning({
            message: i18n.t("register.email-msg1"),
            showClose: true
          });
          return;
        }
        var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!reg.test(this.regForm.email)){
           this.$message.warning({
            message: i18n.t("register.email-msg1"),
            showClose: true
          });
          return;
        }
        if(this.regForm.password.trim() === "") {
            this.$message.warning({
            message: i18n.t("register.password-msg1"),
            showClose: true
          });
          return;
        }
        if(this.regForm.password.trim().length <= 6) {
            this.$message.warning({
            message: i18n.t("register.password-legth"),
            showClose: true
          });
          return;
        }
        if(this.regForm.confirmPassword.trim() === "") {
            this.$message.warning({
            message: i18n.t("register.confirm-password-msg1"),
            showClose: true
          });
          return;
        }
         if(this.regForm.confirmPassword.trim() != this.regForm.password.trim()) {
            this.$message.warning({
            message: i18n.t("changepassword.messgae-confirm-password-equal"),
            showClose: true
          });
          return;
        }

        const that = this
        this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "restful/vpn/addUser",
          params: {
            emailAddress: that.regForm.email.trim(),
            password: that.regForm.password.trim(),
            expireTime: '1w'
          }
        }).then(response => {
          if (response.data.code === 0) {
            const v = {
              "username": that.regForm.email,
              "isShow": true,
              "isLogin": true
            }
            that.$store.commit('setToken', response.data.data.token)
            that.$store.commit('setUserInfo', v)
            this.payment()
            that.$router.push("/myPlan");
          } else {
            this.$message.warning({
              message: response.data.msg,
              showClose: true
            });
          }
        });
      } else {
        this.payment();
      }
    },
    renew(){
        this.join();
    },    
    // 付费策略接口
    listPlan() {
      const that = this
      this.$ajax({
          method: "post",
          url: this.$store.state.siteroot + "restful/vpn/listPlans"
        }).then(response => {
          if (response.data.code === 0) {
            // response.data.data.forEach((item,index) =>{
            //   if(item.name !='bonus') {
            //     that.listPlans.push(item);
            //   }
            // }) 
            that.listPlans = response.data.data
            this.currentPlan = response.data.data[1]
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
    p(s) {
      return s < 10 ? '0' + s : s
    },
    getNowDate(months, days) {
      const nowDate = new Date();
      nowDate.setDate(nowDate.getDate() + days);
      nowDate.setMonth(nowDate.getMonth() + months)
      let date = {
          year: nowDate.getFullYear(),
          month: nowDate.getMonth() + 1,
          date: nowDate.getDate(),
      }
      return date.date+'/'+date.month+'/'+date.year
    },
    random_No(j) {
        var random_no = "";
        for (var i = 0; i < j; i++) //j位随机数，用以加在时间戳后面。
        {
            random_no += Math.floor(Math.random() * 10);
        }
        random_no = new Date().getTime() + random_no;
        return random_no;
    },
    payment() {      
      const that = this      
      // axios({
      //   method: "post",
      //   url: "https://www.paypal.com/cgi-bin/webscr",
      //   headers: {
      //     // "Content-Type": "multipart/form-data"
      //     "Access-Control-Allow-Origin":"*"
      //   },
      //   withCredentials:true,
      //   params: {
      //     "cmd": "_s-xclick",
      //     "hosted_button_id": "XGF5HZCCTQDGL",
      //     "os0": "One Month",
      //     "currency_code": "AUD"
      //   }
      // }).then(response => {
      //   console.log(response);
      // }).catch(error => {
      //   console.log(error);
      // });
      // return

      // if(this.payType == "1" || this.payType == "2") {     
      //   const oAmount = that.currentPlan.actualFee
      //   const oDate = ''
                   
      //   const callback = process.env.NODE_ENV === 'development' ? config.EzidebitCallback.dev : config.EzidebitCallback.pro
      //   const eddr =  process.env.NODE_ENV === 'development' ? config.EzidebitEddr.dev : config.EzidebitEddr.pro
      //   // 免费套餐
      //   if(that.currentPlan.actualFee == 0) {
      //     // window.location.href = eddr+'&rAmount='+this.listPlans[1].actualFee+'&rDate='+this.getNowDate(0, 7)+'&freq=1&dur=1&businessOrPerson=1&callback='+callback+'&cmethod=get'
          
      //   }else {
      //     let aFreq = 1
      //     let month = 0
      //     // 月
      //     if(that.currentPlan.id == 1) {
      //       aFreq = 4
      //       month = 1
      //     }
      //     // 季度
      //     else if(that.currentPlan.id == 2) {
      //       aFreq = 16
      //       month = 3
      //     }
      //     // window.location.href = eddr+'&oAmount='+that.currentPlan.actualFee+'&oDate=0&rAmount='+that.currentPlan.actualFee+'&rDate='+this.getNowDate(month, 0)+'&freq='+aFreq+'&dur=1&businessOrPerson=1&callback='+callback+'&cmethod=get'
      //     window.location.href = eddr+'&PaymentAmount='+that.currentPlan.actualFee+'&PaymentReference='+this.random_No(6)+'&RedirectURL='+callback+'&RedirectMethod=GET'
      //   }
      //   return
      // }

      // paypal支付
      if(this.payType == 2) {
        // 1month
        if(this.currentPlan.id == 1) {
          window.location.href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DPVCKNVX9FWPJ&os0=One+Month&currency_code=AUD&item_number=201912067655'
        }
        //3month
        else if(this.currentPlan.id == 2) {
          window.location.href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DPVCKNVX9FWPJ&os0=One+Quarter&currency_code=AUD&item_number=201912067655'
        }
        return
      } else if(this.payType == 3) {
        let callback = process.env.NODE_ENV === 'development' ? config.callback.dev : config.callback.pro
        this.$ajax({
            method: "post",
            url: this.$store.state.siteroot+"restful/vpn/omipay/"+that.$store.state.token,
            params: {
              "account": this.getUserInfo(),
              "amount": 0.01,
              "planId": that.currentPlan.id,
              "planName": that.currentPlan.name,
              "redirectUrl": callback
            }
        }).then(response => {
          if(response.data.code === 0) {
            window.location.href = response.data.data[0].url
            return
          }
        })
      }
      return

      const d = this.paymentForm.expiryDate      
      // const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
      const year = d.getFullYear()
      const month = this.p((d.getMonth() + 1))
      this.$ajax({
        method: "post",
        url: this.$store.state.siteroot + "restful/vpn/pay/"+that.$store.state.token,
        params: {
          "amount": that.currentPlan.actualFee,
          "cvn": that.paymentForm.cvv,
          "name": that.paymentForm.firstName+that.paymentForm.lastName,
          "number": that.paymentForm.cardNumber,          
          "expiryYear": year,
          "expiryMonth": month
        }
      }).then(response => {
        if (response.data.code === 0) {          
          // that.listPlans = response.data.data
          // this.currentPlan = response.data.data[1]
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
    changePayment(value) {      
      this.ezidebit = true
      return
      if(value == "3") {
        this.ezidebit = false
      } else {
        this.ezidebit = true
      }
    },
    getUserInfo() {
      if( this.$store.state.username!= "")
        return this.$store.state.username;
      return sessionStorage.username;      
    },

    // 查询paypal支付状态 
    selectPaypalOrder(tx) {
      let that = this
      if(this.$store.state.token || sessionStorage.username != undefined) {
        // 查询订单状态
        this.$ajax({
            method: "post",
            url: this.$store.state.siteroot+"restful/vpn/payStatus/"+that.$store.state.token,
            params: {
              "orderId": tx
            }
        }).then(response => {
          if(response.data.code === 0) {
            this.payShowName = response.data.data[0].planName
            this.payShowAmount = response.data.data[0].amount
            this.paydialogVisible = true
          }
        })
      }
      
    } 
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
