<template>
  <div class="page-apps">
    <div class="apps-menu">      
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="(item,index) in array" :label="item.text" :name="item.name" v-bind:key="index">
          <span slot="label"><img :src="item.icon" alt="">{{item.title}}</span>
          <el-row :guitter="20">
            <el-col :span="18" class="left">
              <div class="tit">
                <div>{{ $i18n.t(item.subTit) }}</div>
                <!-- <div v-if="item.type != undefined">For {{item.type}}</div>
                <div v-if="item.extension != undefined">extension to {{item.extension}}</div> -->
              </div>
              <div class="dec">{{$i18n.t("apps.dec")}}
                <div v-if="item.text != undefined">{{item.text}}</div>
              </div>
              <div class="btns">
                <a v-if="item.url1 != undefined" :href="item.url1" target="_blank">{{$i18n.t(item.url1Text)}}</a>
                <a v-if="item.url2 != undefined" :href="item.url2" target="_blank">{{item.url2Text}}</a>
                <a v-if="item.urlGoogle != undefined" :href="item.urlGoogle" target="_blank" class="btn">
                  <img src="../assets/apps/down_google.png" alt="">
                </a>
                <a v-if="item.urlIos != undefined" :href="item.urlIos" target="_blank" class="btn">
                  <img src="../assets/apps/down_ios.png" alt="">
                </a>
              </div>
            </el-col>
            <el-col :span="6" class="right">
              <img :src="item.face" alt="">
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
    <section class="block-content apps">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <img class="face" src="../assets/apps/list_icon_1.jpg" alt="">
        </el-col>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="pl-50">
          <h3>{{$i18n.t("apps.el-row1-h3")}}</h3>
          <div class="content">{{$i18n.t("apps.el-row1-div")}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="pr-50">
          <h3>{{$i18n.t("apps.el-row2-h3")}}</h3>
          <div class="content">{{$i18n.t("apps.el-row2-div")}}</div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <img class="face" src="../assets/apps/list_icon_2.jpg" alt="">
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <img class="face" src="../assets/apps/list_icon_3.jpg" alt="">
        </el-col>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="pl-50">
          <h3>{{$i18n.t("apps.el-row3-h3")}}</h3>
          <div class="content">{{$i18n.t("apps.el-row3-div")}}</div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import tab1 from '@/assets/apps/android.png'
import tab2 from '@/assets/apps/windows.png'
import tab3 from '@/assets/apps/macOS.png'
import tab4 from '@/assets/apps/apple.png'
import tab5 from '@/assets/apps/androidtv.png'
import tab6 from '@/assets/apps/linux.png'
import tab7 from '@/assets/apps/chrome.png'
import tab8 from '@/assets/apps/firefox.png'
import face1 from '@/assets/apps/app_1.jpg'
import face2 from '@/assets/apps/app_2.jpg'
import face3 from '@/assets/apps/app_3.jpg'
import face4 from '@/assets/apps/app_4.jpg'
import face5 from '@/assets/apps/app_5.jpg'
import face6 from '@/assets/apps/app_6.jpg'
import face7 from '@/assets/apps/app_7.jpg'
import face8 from '@/assets/apps/app_8.jpg'
export default {
  name: 'Apps',
  components: {},
  data() {
    return {
      activeName: 'app1',
      tab1,
      array: [{
        name: 'app1',
        title: 'Android',
        subTit: 'apps.android-subTip',
        icon: tab1,
        face: face1,
        type: 'Android',
        url1: 'http://baidu.com',
        url1Text: 'apps.android-urlText',
        urlGoogle: 'http://baidu.com'
      }, {
        name: 'app2',
        title: 'Windows',
        subTit: 'apps.windows-subTip',
        icon: tab2,
        face: face2,
        type: 'Windows',
        url1: 'http://baidu.com',
        url1Text: 'apps.windows-urlText'
      }, {
        name: 'app3',
        title: 'macOS',
        subTit: 'apps.macos-subTip',
        icon: tab3,
        face: face3,
        type: 'Mac',
        text: '( macOS Yosemite 10.10 or later; macOS Sierra 10.12 or later )',
        url1: 'http://baidu.com',
        url1Text: 'apps.macos-urlText',
        urlIos: 'http://baidu.com'
      }, {
        name: 'app4',
        title: 'iOS | iPhone | iPad',
        subTit: 'apps.iphone-subTit',
        icon: tab4,
        face: face4,
        type: 'iOS',
        url1: 'http://baidu.com',
        url1Text: 'apps.iphone-urlText',
        urlIos: 'http://baidu.com'
      }
      // , {
      //   name: 'app5',
      //   title: 'Android TV',
      //   subTit: 'Download EasyVPN',
      //   icon: tab5,
      //   face: face5,
      //   type: 'Android TV',
      //   urlGoogle: 'http://baidu.com'
      // }, {
      //   name: 'app6',
      //   title: 'Linux',
      //   subTit: 'Download EasyVPN',
      //   icon: tab6,
      //   face: face6,
      //   type: 'Linux',
      //   url1: 'http://baidu.com',
      //   url1Text: 'Download .rpm',
      //   url2: 'http://baidu.com',
      //   url2Text: 'Download .deb'
      // }, {
      //   name: 'app7',
      //   title: 'Chrome',
      //   subTit: 'Add EasyVPN',
      //   icon: tab7,
      //   face: face7,
      //   extension: 'Chrome',
      //   url1: 'http://baidu.com',
      //   url1Text: 'Add to Chrome'
      // }, {
      //   name: 'app8',
      //   title: 'Firefox',
      //   subTit: 'Add EasyVPN',
      //   icon: tab8,
      //   face: face8,
      //   extension: 'Firefox',
      //   url1: 'http://baidu.com',
      //   url1Text: 'Add to Firefox'
      // }
      ]
    }
  },
  mounted() {},
  methods: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
