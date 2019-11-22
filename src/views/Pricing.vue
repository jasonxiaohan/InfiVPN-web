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
          <el-radio v-model="payType" label="1" border>
            {{this.$i18n.t("pricing.credit-card")}}
            <div class="imgs">
              <img src="../assets/pricing/pay1.png" alt="">
              <img src="../assets/pricing/pay2.png" alt="">
              <!-- <img src="../assets/pricing/pay3.png" alt=""> -->
            </div>
          </el-radio>
          <el-radio v-model="payType" label="2" border>Paypal
            <div class="imgs">
              <img src="../assets/pricing/pay4.png" alt="">
            </div>
          </el-radio>
          <el-radio v-model="payType" label="3" border>
            {{this.$i18n.t("pricing.omipay")}}
            <div class="imgs">
              <img src="../assets/pricing/pay4.png" alt="">
            </div>
          </el-radio>
          </el-radio-group>
        </div>
        <div class="pay-info">
          <el-row :gutter="20">
            <el-col :span="18" class="card-info">
              <div class="head">                
                <template v-if="payType == 1">
                  {{this.$i18n.t("pricing.credit-card")}}
                  <div class="imgs">
                    <img src="../assets/pricing/pay1.png" alt="">
                    <img src="../assets/pricing/pay2.png" alt="">
                    <!-- <img src="../assets/pricing/pay3.png" alt=""> -->
                  </div>
                </template>
                <template v-if="payType == 2">
                  Paypal
                  <div class="imgs">
                    <img src="../assets/pricing/pay4.png" alt="">
                  </div>
                </template>
                <template v-if="payType == 3">
                  {{this.$i18n.t("pricing.omipay")}}
                  <div class="imgs">
                    <img src="../assets/pricing/pay4.png" alt="">
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
        <div class="price-free">$ <span>0.0</span></div>
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
  </div>
</template>

<script>
import config from '@/config'
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
      payType: '1',
      remember: true,
      autopay: '1',
      choicePlan: 1,
      ifFree: false,
      dialogs: 1,
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
      ezidebit: true
    }
  },
  created() {},
  mounted() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://static.ezidebit.com.au/javascriptapi/js/ezidebit_2_0_0.min.js';
    document.body.appendChild(s);
    this.listPlan();
  },
  methods: {
    openDialog(val) {
      this.dialogs = val
      this.dialogVisible = true
    },
    close() {
      this.dialogVisible = false
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
      if(!this.$store.state.token && sessionStorage.username == undefined) {
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

    },
    renew(){
        this.payment()
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
    payment() {
      const that = this            
      if(this.payType == "1" || this.payType == "2") {                
        const callback = process.env.NODE_ENV === 'development' ? config.EzidebitCallback.dev : config.EzidebitCallback.pro
        const eddr =  process.env.NODE_ENV === 'development' ? config.EzidebitEddr.dev : config.EzidebitEddr.pro
        window.location.href = eddr+'&oAmount='+that.currentPlan.actualFee+'&oDate=0&rAmount=&rDate=0&Freq=4&dur=1&businessOrPerson=1&callback='+callback+'&cmethod=get'
        return
      }

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

      // var key = 'A1001CTYCxgwTHvadCWKyV9m/ixKCimCqN/cv5/2+SiU0iNc267zZAdNMpqUkizVY9tG7J',
      // password = 's4nydboX',
      // endpoint = 'sandbox';// Create the eWAY Client
      // var client = rapid.createClient(key, password, endpoint);
      // client.createTransaction(rapid.Enum.Method.RESPONSIVE_SHARED, {
      // "Payment": {
      // "TotalAmount": amount
      // },
      // // Change these to your server
      // "RedirectUrl": "http://www.eway.com.au",
      // "CancelUrl": "http://www.eway.com.au",
      // "TransactionType": "Purchase"
      // }).then(function(response){
      //   if (response.getErrors().length == 0) {
      //     var redirectURL = response.get('SharedPaymentUrl');
      //     return redirectURL
      //   } else {
      //   response.getErrors().forEach(function(error) {
      //     console.log("Response Messages: " + rapid.getMessage(error, "en"));
      //   });
      //   }
      // }).catch(function(reason){
      //   reason.getErrors().forEach(function(error) {
      //     console.log("Response Messages: " + rapid.getMessage(error, "en"));
      //   });
      // })
    }, 
    changePayment(value) {      
      if(value == "3") {
        this.ezidebit = false
      } else {
        this.ezidebit = true
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
