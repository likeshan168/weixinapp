import * as types from '../mutation_types';
import api from '../../api';

//state
const state = {
    user: {
        userName: '',
        password: ''
    },
    isValid: false
}

//getters

//actions
const actions = {
    validateLogin({commit, state}) {

        console.log(state.user);
        // api.ValidateLogin(state.user).then(data => {
        //     console.log(data);
        // })
        let rst = api.ValidateLogin(state.user);
        console.log(rst);
    }
    // updateUserName({commit}, userName) {
    //     commit(types.UPDATE_USERNAME, userName);
    // },
    // updatePassword({commit}, password) {
    //     commit(types.UPDATE_PASSWORD, password);
    // }
}
//mutations
const mutations = {
    [types.VALIDATE_LOGIN](state, rst) {
        state.isValid = rst;
    },
    [types.UPDATE_USERNAME](state, userName) {
        console.log(userName);
        state.user.userName = userName;
    },
    [types.UPDATE_PASSWORD](state, password) {
        state.user.password = password;
    }
}

export default {
    state,
    actions,
    mutations
}