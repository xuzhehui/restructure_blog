<template>
    <div>
        <div class='regesit'>
            <Button class="limit" size='small' type="primary" ghost @click="showHeader_modal(1)">登录</Button>
            <Button class="limit" size='small' type="primary" ghost @click="showHeader_modal(2)">注册</Button>
        </div>
        <Modal scrollable :title='type == 1 ? "用户登录" : "用户注册"' v-model="modal_flag" :width='400' @on-visible-change='visibleModal'>
            <Form ref='formParams' :model="formParams" :rules="ruleParams">
                <FormItem prop="user">
                    <Input type="text" v-model="formParams.user" placeholder="username">
                        <Icon type="md-person" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop='password'>
                    <Input type="text" v-model="formParams.password" placeholder="password">
                        <Icon type="md-key" slot="prepend"></Icon>
                    </Input>
                </FormItem>
            </Form>

            <p v-if="type == 2">已有账号<a @click="type=1">去登陆？</a></p>
            <div slot="footer" class='modal-footer'><Button type="primary" long @click="handleSubmit('formParams')">{{type == 1 ? '登录' : '注册'}}</Button></div>
        </Modal>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            modal_title:'登录',
            modal_flag:false,
            type:1,// 1:登录  2:注册
            formParams:{
                user:'',
                password:''
            },
            ruleParams:{
                user:[{required:true,message: '请输入用户名',trigger:'blur'}],
                password:[
                    {required:true,message: '请输入密码',trigger:'blur'}
                ],
            }
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    mounted(){
        let data = sessionStorage.getItem('userInfo');
        if(data){
            this.$store.state.userInfo = JSON.parse(data);
        }
    },
    methods:{
        showHeader_modal(type){
            this.modal_flag = true;
            this.type = type
        },
        visibleModal(flag){
            if(!flag){
                this.$refs['formParams'].resetFields();
            }
        },
        userLog(user,type){//type 1:登录 2:注册
            let url = type == 1 ? '/api/user/login' : '/api/user/regisit'
            this.axios.post(url,{user_name:user.user,pass_word:user.password})
            .then(r=>{
                if(r.success){
                    this.$Message.success(r.message);
                    sessionStorage.setItem('userInfo',JSON.stringify(r.data));
                    this.$store.state.userInfo = r.data;
                }
            })
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.userLog(this.formParams,this.type)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.limit{margin:0 10px;}
.regesit{width:20%;display: flex;width:140px;}
.modal-footer{display: flex;justify-content: center;}
</style>