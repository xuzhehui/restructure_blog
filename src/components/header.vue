<template>
    <div class='content'>
         <Row>
             <!-- pc -->
            <i-col :sm='{span:20}' :xs='{span:0}'>
                <div class="pc-header">
                   <div class="header-nav">
                       <div @click="tag_click(item)" :class='["pc-item",item.foc ? "pc-item-foc" : ""]' v-for="(item,index) of navigation" :key="index">
                           <Icon :type="item.icon" />
                           <span>{{item.title}}</span>
                        </div>
                   </div>

                   <Login v-if="!userInfo.login"/>
                   <LoggedIn v-if="userInfo.login"/>
                </div>
                
            </i-col>

            <!-- mobile -->
            <i-col :xs='{span:24}' :sm='{span:0}'>
                <div class='mobile-header'>
                    <Dropdown trigger="click">
                        <Icon type="md-reorder" :size='28'></Icon>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="(item,index) of navigation" :key="index">
                                <Icon :type="item.icon" />
                                <span>{{item.title}}</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Login v-if="!userInfo.login"/>
                    <LoggedIn v-if="userInfo.login"/>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Login from './login'
import LoggedIn from './Loggedin'
export default {
    data(){
        return {
            navigation:[
                {title:'首页',icon:'md-home',foc:true,page:''},
                {title:'分类',icon:'md-list-box',foc:false,page:''},
                {title:'关于',icon:'md-at',foc:false,page:''},
                {title:'简历',icon:'md-eye',foc:false,page:''},
            ],
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    mounted(){
        console.log(this.userInfo)
    },
    methods:{
        tag_click(item){
            this.navigation.map(e=>e.foc=false)
            item.foc = true
        }
    },
    components:{Login,LoggedIn}
}
</script>

<style lang="scss" scoped>
.content{
    width:100%;padding:10px 0;background:#fff;
    .pc-header{display: flex;justify-content: space-between;align-items: center;width:100%;
        .header-nav{display: flex;justify-content: space-around;width:90%;cursor:pointer;
            .pc-item{border-bottom:2px solid transparent;padding-bottom:5px;}
            .pc-item-foc{border-bottom:2px solid #2d8cf0;color:#2d8cf0;}
        }
        
    }
    .mobile-header{display: flex;justify-content: space-between;align-items: center;}

}
</style>

<style lang="scss">
.ivu-tabs-nav{width:100%;display: flex;justify-content: space-around;}
.ivu-tabs-ink-bar{display: none!important;}
</style>