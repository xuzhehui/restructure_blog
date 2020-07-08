<template>
    <div class="content">
        <div class="container">
            <TopSearch :list='list' @init='init' @serchDate='serchDate' />
            <Table :columns="tableColums" :data="tableData">
                <template slot-scope="{ row }" slot="SetUp">
                    <Button @click="openModal(2,row)" size='small' style="margin:2px" type="primary">权限</Button>
                    <Button @click="openModal(1,row)" size='small' style="margin:2px" type='error'>删除</Button>
                </template>
            </Table>
            <div class="footer">
                <Page :total="totalItems" />
            </div>

            <Modal :title='title' v-model="show" :width='400' scrollable>
                <div class='del-class' v-if='type == 1'>
                    <div>
                        <span>确认删除</span>
                        <span style="color:red">{{proxyObj.user_name}}</span>
                        <span>用户么？</span>
                    </div>
                    
                </div>

                <div class='up-class' v-if="type == 2">
                    暂无可修改选项
                </div>

                <div slot='footer' class='modal-footer'>
                    <Button @click='type == 1 ? del_user() : ""'>确定</Button>
                </div>
            </Modal>
        </div>
    </div>
</template>

<script>
import TopSearch from '../components/Topserch'
export default {
    data(){
        return {
            user_list:[],
            title:'',
            show:false,
            type:1,//1删除 2权限
            list:[
                {name:'Input',value:'',placeholder:'输入昵称',serverName:'user_name'}
            ],
            tableColums:[
                {title:'id',align:'center',key:'id'},
                {title:'用户名',align:'center',key:'user_name'},
                {title:'操作',align:'center',slot:'SetUp'},
            ],
            tableData:[],
            totalItems:0,
            proxyObj:{}
        }
    },
    mounted(){
        this.getUser()
    },
    methods:{
        init(item){
            console.log(item)
        },
        serchDate(item){
            console.log(item)
        },
        openModal(type,row){
            this.type = type;
            this.title = type == 1 ? '删除用户' : '权限修改';
            this.show = true;
            this.proxyObj = row;
        },
        async getUser(data){
            let r = await this.axios.get('/api/user/list');
            if(r.success){
                this.tableData = r.data;
            } 
        },
        async del_user(){
            let r = await this.axios.post('/api/user/list/del',{id:this.proxyObj.id});
            if(r.success){
                this.getUser()
                this.show = false
                this.$Message.success(r.message)
            }
        }


    },
    components:{TopSearch}
}
</script>

<style lang="scss" scoped>
.content{width:100%;height:100%;padding:20px;
    .container{width:100%;height:100%;background:#fff;border-radius:5px;padding:10px;position:relative;}
    .footer{position:absolute;bottom:0;width:100%;display: flex;justify-content: center;left:0;padding:10px 0;}
    
}
.del-class{text-align: center;}
.up-class{text-align: center;}
.modal-footer{width:100%;display: flex;justify-content: center;}
</style>