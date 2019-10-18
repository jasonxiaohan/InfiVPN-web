<template>
  <div class="page-bottom">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="6" :md="5" :lg="5" :xl="5">
        <ul>
          <li>
            <img class="logo" src="../assets/bottom/logo_bottom.png" alt="">
          </li>
        </ul>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
        <ul>
          <li class="title">InfiVPN</li>
          <li>
            <router-link to="/">User Agreement</router-link>
          </li>
          <li>
            <router-link to="/">Private Policy</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
        <ul>
          <li class="title">About Us</li>
          <li>
            <router-link to="/">About InfiVPN</router-link>
          </li>
          <li>
            <router-link to="/">Tutorial</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
        <ul>
          <li class="title">Support</li>
          <li>
            <router-link to="/">FAQ</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <ul class="center">
          <li class="title">Follow Us</li>
          <li>
            <a href="https://facebook.com/" target="_blank"><img src="../assets/bottom/facebook.png" alt=""></a>
            <a href="www.twitter.de/" target="_blank"><img src="../assets/bottom/twitter.png" alt=""></a>
            <a href="https://www.linkedin.com/" target="_blank"><img src="../assets/bottom/linkedin.png" alt=""></a>
            <a href="https://www.pinterest.com/" target="_blank"><img src="../assets/bottom/pinterest.png" alt=""></a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
