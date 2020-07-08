<template>
    <div class="center">
        <div class="container">
            <Tabs size="small" @on-click='checkTabs'>
                <TabPane name='1' label="发布文章">
                    <div class='publish-article'>
                        <div>
                            <Form :label-width='80'>
                                <FormItem label='文章标题'><Input v-model="articleInfo.title"/></FormItem>
                                <FormItem label='文章类型'>
                                    <Select v-model="articleInfo.tag">
                                        <Option v-for="item of tags" :key="item.id" :value="item.name" :label='item.name'></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label='文章描述'><Input :autosize="true" type="textarea" placeholder="请用一段文字来描述您即将发布的文章" v-model="articleInfo.description"/></FormItem>
                            </Form>
                        </div>
                        <mavon-editor v-model="articleInfo.content"></mavon-editor>
                        <div class='publish-setup'>
                            <Button @click="publishArticle(2)">保存</Button>
                            <Button @click="publishArticle(1)">发布</Button>
                        </div>
                    </div>
                </TabPane>
                <TabPane name='2' label="已发布">
                    <div class='published-content'>
                        <List item-layout="vertical">
                            <ListItem v-for="item in publishedData" :key="item.title">
                                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                                <p class="article-content" @click="setclick(item)">{{ item.content }}</p>
                                <template slot="action">
                                    <li><Icon type="md-star" /> 123</li>
                                    <li><Icon type="md-thumbs-up" /> 234</li>
                                    <li><Icon type="md-chatboxes" /> 345</li>
                                    <li>撤回</li>
                                </template>
                            </ListItem>
                        </List>
                    </div>
                </TabPane>
                <TabPane name='3' label="未发布">标签三的内容</TabPane>
                <TabPane name='4'  v-if="userInfo.type==99" label="添加分类">
                    <div class='tags'>
                        <Tag @on-close='removeLabel(item)' v-for=" item in tags" :key="item.id" :color="item.color" closable>{{item.name}}</Tag>
                        <Button @click="addLable" size='small' icon='md-add' type="primary">添加</Button>

                        <Modal title='添加分类' v-model="showLabel" :width='400' scrollable>
                            <Form :label-width='50'>
                                <FormItem label='名称'><Input v-model="labelInfo.name"/></FormItem>
                                <FormItem label='类型'>
                                    <Select v-model="labelInfo.color">
                                        <Option v-for="item of labelType" :key="item" :value="item" :label='item'></Option>
                                    </Select>
                                </FormItem>
                            </Form>
                            <div slot="footer" class='label-footer'><Button @click="sendLabelinfo" type='primary' long>确认添加</Button></div>
                        </Modal>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    data(){
        return {
            articles:[],//文章列表
            articleInfo:{
                title:'',
                content:'',
                tag:'',
                avatar:this.$store.state.userInfo.avatar,
                user_name:this.$store.state.userInfo.user_name,
                user_id:this.$store.state.userInfo.id,
                description:'',
                type:null,
            },
            publishedData:[],//已发布文章列表
            tags:[],//已有分类列表
            labelType:['default','primary','success','error','magenta','warning','red','volcano','orange','gold','yellow','lime','green','cyan','blue','geekblue','purple'],
            labelInfo:{
                color:'',
                name:''
            },
            showLabel:false,
        }
    },
    components:{mavonEditor},
    created(){
        this.getLabels()
    },
    methods:{
        checkTabs(name){
            if(name == 2){
                this.get_published()
            }
            if(name == 4){
                this.getLabels()
            }
        },
        publishArticle(type){
            this.articleInfo.type = type;
            this.axios.post('/api/article/publish',this.articleInfo)
            .then(r=>{
                if(r.success){
                    this.$Message.success(r.message)
                }
            })
        },
        get_published(){
            this.axios('/api/article/getlist?type=1')
            .then(r=>{
                if(r.success){
                    this.publishedData = r.data;
                }
            })
        },
        addLable(){
            this.showLabel = true;
        },
        getLabels(){//获取所有分类信息
            this.axios('/api/type/list').then(r=>this.tags = r.data)
        },
        sendLabelinfo(){//添加分类信息
            if(this.labelInfo.color&&this.labelInfo.name){
                this.axios.post('/api/type/add',this.labelInfo)
                .then(r=>{
                    this.getLabels()
                    r.success ? this.$Message.success(r.message) : ''
                    this.showLabel = false
                })
            }else{
                return this.$Message.error('标签信息不可为空')
            }
        },
        removeLabel(row){//移除分类
            this.axios.post('/api/type/deleted',{id:row.id})
            .then(r=>{
                if(r.success){
                    this.$Message.success(r.message)
                    this.getLabels()
                }
            })
        },
    },
    computed:{
        ...mapState(['userInfo'])
    },
    
}
</script>

<style lang="scss" scoped>
.center{width:100%;height:100%;padding:20px;
    .container{width:100%;height:100%;background:#fff;border-radius:5px;
        .tags{padding:10px;}
    }
}
.publish-article{padding:10px;}
.label-footer{display: flex;justify-content: center;}
.publish-setup{display: flex;justify-content: space-around;padding:20px;}
.published-content{padding:10px;}
</style>

<style lang="scss">
.ivu-select-dropdown{z-index:9991;}
</style>