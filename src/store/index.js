import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// // 创建vuex的store
// export default new Vuex.Store({
//   state: {
//     login: 0,
//     isShow: false
//   },
//   // 更改store的状态
//   mutations: {
//     increment(state) {
//       state.count++
//     },
//     decrement(state) {
//       state.count--
//     }
//   },
//   // 有异步的时候， 需要action
//   actions: {
//     increment(context) {
//       context.commit('increment')
//     },
//     decrement(context) {
//       setTimeout(function() {
//         context.commit('decrement')
//       }, 10)
//     }
//   },
//   // 通过getter 进行数据获取
//   getters: {
//     getState(state) {
//       return state.count > 0 ? state.count : 0
//     }
//   }
// })
