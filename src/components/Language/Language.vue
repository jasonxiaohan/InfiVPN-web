<template>
  <div>    
    <select trigger="click" v-model="selected" @change="selectLang">
      <option v-for="(value, key) in localList" :name="key" :key="`lang-${key}`" :value="key">{{value}}</option>
    </select><br>
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
      langList: {
        'zh-CN': '语言',
        'en-US': 'Lang'
      },
      localList: {
        'zh': '中文简体',
        'en': 'English'
      },
      selected: ''
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }    
  },
  computed: {
    title () {
      return this.langList[this.lang]
    },    
  },
  created() {
    this.selected = i18n.locale
  },
  methods: {
    selectLang () {
      i18n.locale = this.selected
      localStorage.setItem('localeLanguage',this.selected);
    }
  }
}
</script>
