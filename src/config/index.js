export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'InfiVPN-web',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://3.1.238.2:8080/',
    pro: 'http://3.1.238.2:8080/'
  },
  // 支付成功后的回调地址
  callback: {
    dev: 'http://localhost:8080/pricing',
    pro: 'http://easyvpn.minilott.com/pricing'
  },
  // 电子支付模版
  EzidebitEddr: {
    dev: 'https://easyvpn.pay.demo.ezidebit.com.au/?preview=true',
    pro: 'https://demo.ezidebit.com.au/webddr/Request.aspx?a=A639A994-8449-46B3-870C-AF8E109B2844'
  },
  
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
}
