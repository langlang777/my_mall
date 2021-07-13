// 1.导入 vuex 包 然后到 main.js  use
import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 2.创建并导出 
export default createStore({
    state: {
        carlist: []
    },
    mutations,
    actions,
    getters
})