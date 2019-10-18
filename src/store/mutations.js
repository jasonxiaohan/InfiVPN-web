import { setToken  } from '@/libs/util'

export default {
    setToken(state, token) {
        state.token = token
        setToken(token)
    },
    login(state, v) {                
        state.userInfo = v
    },
    setUserInfo(state, v) {
        state.username =  v.username
        sessionStorage.username = v.username;
    },
    addItem(state, v) {
        state.lists.push(v)
    }
}
