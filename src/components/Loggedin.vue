<template>
    <div class='content-logined'>
        <Avatar :src="userInfo.avatar ? userInfo.avatar : 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1990625098,3468619056&fm=111&gp=0.jpg'" />
        <Dropdown trigger="click" @on-click='dropItemTap'>
            <span class='logined-span'>欢迎<a>{{userInfo.user_name}}</a></span>
            <DropdownMenu slot="list">
                <DropdownItem :name='index' v-for="(item,index) of serverList" :key="index">
                    <Icon :type="item.icon" />
                    <span>{{item.title}}</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Modal scrollable title="修改密码" v-model="showPassWord">
            <Form ref='formParams'>
                <FormItem label='旧密码'>
                    <Input type="text" v-model="old_pass_word" placeholder="username"/>
                </FormItem>
                <FormItem label='新密码'>
                    <Input type="text" v-model="new_pass_word" placeholder="password"/>
                </FormItem>
            </Form>
        </Modal>
        
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            serverList:[
                {title:'发布管理',icon:'md-construct'},
                {title:'更换头像',icon:'md-images'},
                {title:'修改密码',icon:'md-key'},
                {title:'退出登录',icon:'md-log-out'},
            ],
            showPassWord:false,
            old_pass_word:'',
            new_pass_word:'',
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    mounted(){
        console.log(this.userInfo)
    },
    methods:{
        loginOut(){
            this.axios.post('/api/user/loginout')
            .then(r=>{
                if(r.success){
                    this.$Message.success(r.message)
                    sessionStorage.removeItem('userInfo')
                    this.$store.state.userInfo = {}
                }
            })
        },
        replacePassword(){
            this.showPassWord = true;
        },
        dropItemTap(e){
            e == 0 ? (()=>{})() 
            : (e == 1 ? (()=>{})() 
            : ( e == 2 ? (()=>{
                this.replacePassword()
            })() 
            : (()=>{
                this.loginOut()
            })()))
        }
    }
}
</script>

<style lang="scss" scoped>
.content-logined{width:20%;display: flex;min-width:180px;align-items: center;margin-right:20px;
    .logined-span{margin-left:10px;a{margin-left:5px;}}
}
</style>