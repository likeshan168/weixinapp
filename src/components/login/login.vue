<template>
    <div>
        <mt-header title="用户登录"></mt-header>

        <mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" size="large" @click.native="validateLogin">登录</mt-button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        // data() {
        //     return {

        //     }
        // },
        computed: {
            // ...mapState({
            //     userName: state => state.userName,
            //     password: state => state.password
            // })
            userName: {
                get() {
                    return this.$store.state.login.user.userName;
                },
                set(value) {
                    this.$store.commit('UPDATE_USERNAME', value);
                }
            },
            password: {
                get() {
                    return this.$store.state.login.user.password;
                },
                set(value) {
                    this.$store.commit('UPDATE_PASSWORD', value);
                }
            }
        },
        methods: {
            ...mapActions(['validateLogin'])
        }
    };

</script>