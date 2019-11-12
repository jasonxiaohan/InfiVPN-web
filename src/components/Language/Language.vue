<template>
  <div>    
     <el-select v-model="selected" :placeholder="translation()" @change="selectLang">
        <el-option
          v-for="item in localList"
          :key="item.value"
          :label="item.label"
          :value="item.label">
        </el-option>
      </el-select>
  </div>
</template>

<script>
export default {
  name: 'Language',
  props: {
    lang: String
  },
  data () {
    return {
      langList: [
        {
          value: 'zh',
          label: '翻译'
        },
        {
          value: 'en',
          label: 'Translation'
        }
      ],
      localList: [{
        value: 'zh',
        label: '中文简体'
      },
      {
        value: 'en',
        label: 'English'
      }
      ],
      selected: '',
      value:''
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }    
  },
  mounted() {
    // this.translation()
  },
  computed: {
    
  },
  created() {
    let obj = {};
    obj = this.localList.find((item)=>{
          return item.value === i18n.locale;
    });
    // this.selected = obj.label
  },
  methods: {
    selectLang (val) {
      let obj = {};
      obj = this.localList.find((item)=>{
          return item.label === val;
      });
      i18n.locale = obj.value
      localStorage.setItem('localeLanguage',obj.value);
    },
    translation() {
      let val = localStorage.localeLanguage
      let obj = {}
      
      obj = this.langList.find((item) => {
        return item.value === val;
      });
      if(obj) {
        return obj.label
      }
      return "翻译"
    }
  }
}
</script>
