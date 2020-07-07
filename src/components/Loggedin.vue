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
        <Modal scrollable title="修改密码" v-model="showPassWord" :width='400' @on-ok='submitPass'>
            <Form ref='formParams' :model="passInfo" :rules="ruleParams" :label-width='65'>
                <FormItem prop='old_pass_word' label='旧密码'>
                    <Input type="password" v-model="passInfo.old_pass_word"/>
                </FormItem>
                <FormItem prop='new_pass_word' label='新密码'>
                    <Input type="password" v-model="passInfo.new_pass_word"/>
                </FormItem>
            </Form>
            <div slot="footer" class='modal-footer'><Button :loading="loading" type="primary" long @click="handleSubmit('formParams')">确认修改</Button></div>
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
            passInfo:{
                old_pass_word:'',
                new_pass_word:'',
                // id:$store.state.userInfo.id,
                id:this.$store.state.userInfo.id
            },
            ruleParams:{
                old_pass_word:[
                    {required:true,message: '请输入旧密码',trigger:'blur'}
                ],
                new_pass_word:[
                    {required:true,message: '请输入新密码',trigger:'blur'}
                ],  
            },
            loading:false,
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    watch:{
        '$store.state.userInfo':{
            deep:true,
            handler(news,old){
                console.log(1)
                if(news.type == 99){
                    this.serverList.unshift({title:'用户管理',icon:'md-key'})
                }
            },
            immediate: true
        }
    },
    mounted(){

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
        verification_password(){
            if(this.passInfo.old_pass_word.length<6||this.passInfo.new_pass_word.length<6){
                return false
            }
            //此处可继续验证密码
            return true
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if(this.verification_password()){
                        this.loading = true
                        this.axios.post('/api/user/replacepassword',this.passInfo)
                        .then(r=>{
                            this.loading = false;
                            if(r.success){
                                this.$Message.success(r.message)
                            }
                        })
                    }
                }
            })
        },
        submitPass(){
            this.handleSubmit('formParams')
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
.modal-footer{display: flex;justify-content: center;}
</style>