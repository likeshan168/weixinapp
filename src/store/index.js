// 每个应用将仅仅包含一个 store 实例

import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';

Vue.use(Vuex);

// store 可以理解为仓库（这个为最简单的store）
export default new Vuex.Store({
    // 这个理解为仓库中的数据
    modules: {
        login
    },
    strict: process.env.NODE_ENV !== 'production'
})