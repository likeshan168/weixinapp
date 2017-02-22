<template>
    <div>
        <mt-button type="default" icon="more">default</mt-button>
        <mt-button type="primary" icon="back">primary</mt-button>
        <mt-button type="danger" size="large" @click.native="increasement">danger</mt-button>
        <mt-field label="测试" placeholder="请输入测试信息" v-model="count"></mt-field>
        <div>hello: {{count}}</div>
        <!--<mt-checklist title="复选框列表" v-model="checkedList" :options="doneTodos">
        </mt-checklist>-->
        <!--<mt-cell-swipe v-for="item in todos" :title="item.text" :right="rights" :class="[{done: item.done}]"></mt-cell-swipe>-->
        <mt-cell-swipe v-for="item in todos" :title="item.text" :right="[
            {
            content: 'Delete',
            style: { background: 'red', color: '#fff' },
            handler: () => setDone(item.id)
            }]" :class="[{done: item.done}]"></mt-cell-swipe>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {
                checkedList: [],
                // rightContent: 'Done',
                rights: [{
                    content: 'Done',
                    style: { background: 'red', color: '#fff' },
                    // handler: () => this.$messagebox('delete')
                    handler: () => this.setDone()
                }]
            }
        },
        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
        //    ...mapGetters(['doneTodosCount', 'doneTodos']),
        //    // 使用对象展开运算符将 state 混入 computed 对象中
        //    ...mapState(['count', 'todos'])
            ...mapGetters({
                doneTodosCount: 'doneTodosCount',
                doneTodos: 'doneTodos'
            }),
            ...mapState({
                count: state => state.login.count,
                todos: state => state.login.todos
            })
        },
        methods: {
            // increase() {
            //     // console.log('increase');
            //     // console.log(this.$store.commit);
            //     this.$store.commit('increase');
            // },
            // setDone(id) {
            //     console.log(obj);
            //     // this.rights[0].content = 'Cancel';
            // }
            // ...mapActions({
            //     increasement: 'increasement',
            //     setDone: 'setDone'
            // })
            ...mapActions(['increasement', 'setDone'])
        }
    };

</script>

<style scoped>
    .done {
        text-decoration: line-through
    }
</style>