import * as types from '../mutation_types';

//init state
const state = {
    count: 12,
    todos: [
        { id: 1, text: 'study vuex', done: true },
        { id: 2, text: 'study vuex-router', done: false }
    ]
}

// getters
// store的计算属性 Getters 接受 state 作为其第一个参数 Getters 会暴露为 store.getters 对象
// Getters 也可以接受其他 getters 作为第二个参数
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length;
    }
}
//actions
const actions = {
    increasement({commit}) {
        commit(types.INCREASEMENT);
    },
    setDone({commit}, id) {
        commit(types.SET_DONE, id);
    }
}
//mutations
const mutations = {
    [types.INCREASEMENT](state) {
        state.count++;
    },
    [types.SET_DONE](state, id) {
        state.todos.filter(t => t.id === id)[0].done = true;
        // console.log(todo);
    }
}

//export
export default {
    state,
    getters,
    actions,
    mutations
}