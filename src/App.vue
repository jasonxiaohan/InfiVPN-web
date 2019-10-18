<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <Bottom/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Bottom from '@/components/Bottom.vue'
export default {
  name: 'App',
  components: {
    Header,
    Bottom
  },
  data() {
    return {}
  },
  created() {    
  },
}
</script>
