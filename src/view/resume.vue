<template>
    <div class='c-box'>
        <Row class='c-row'>
           <i-col class-name='mysorch' :xs="{span:24}" :sm="{span:24}" :lg="{span:24}">
                <div class='setbox' >
                    <div style="position:fixed" v-if='flng'>
                         <Anchor style="position:fixed" show-ink>
                            <AnchorLink href="#Personalinformation" title="个人信息" />
                            <AnchorLink href="#Personalintroduction" title="个人介绍" />
                            <AnchorLink href="#workexperience" title="工作经历"/>
                            <AnchorLink href="#Selfdescription" title="自我描述" />
                            <AnchorLink href="#Skill" title="技能评价" />
                        </Anchor>
                    </div>

                    <div :class="flng==true ? 'content' : 'content-m'">
                        <div id='Personalinformation'>
                            <Stitle title='个人信息'/>
                            <div class='Personalinformation-content'>
                                <div style="width:100px;height:100px;border-radius:50%;overflow:hidden;margin-top:20px">
                                    <img style="width 100%;height:100%" src="../assets/lookme.jpg" alt="">
                                </div>
                                
                                <span style="font-size:16px;font-weight:bold">许哲辉</span>
                                <span>前端打杂人员,探索快捷成长之路</span>
                                <span>前端开发</span>
                                <div class='info'>
                                    <p>男</p>
                                    <Divider type="vertical" />
                                    <p>24岁</p>
                                    <Divider type="vertical" />
                                    <p>本科</p>
                                    <Divider type="vertical" />
                                    <p>2年工作经验</p>
                                    <Divider type="vertical" />
                                    <p>杭州</p>
                                </div>
                                <span>13454143096</span>
                                <span>1026248690@qq.com</span>
                            </div>
                        </div>

                        <div id='Personalintroduction'>
                            <Stitle title='个人介绍'/>
                            <ul class='setul'>
                                <li>熟练掌握html、css相关技术。</li>
                                <li>熟悉javascript编程，熟练掌握es6新特性，了解es7部分新特性。</li>
                                <li>掌握react、react-router、mobx等react全家桶技术。</li>
                                <li>掌握webpack包管理工具，能在不同的业务场景下配置相应的配置。</li>
                                <li>了解express、mongodb、nodejs等相关后台技术。</li>
                            </ul>
                        </div>


                        <div id='workexperience'>
                            <Stitle title='工作经历'/>

                            <Timeline style='margin-top:20px'>
                                <TimelineItem>
                                    <p class="time">2016-12 ———— 2018-8</p>
                                    <p style='font-size:14px;font-weight:bold'>杭州华穗科技贸易有限公司</p>
                                    <p>前端工程师</p>
                                    <p>负责公司前端业务的开发，接口联调，页面重构，维护线上的代码</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <p class="time">2018-9 ———— 至今</p>
                                    <p style='font-size:14px;font-weight:bold'>杭州移领网络科技有限公司</p>
                                    <p>前端工程师</p>
                                    <p>负责公司前端框架的选型以及界面的开发。工作期间的主要职责：官网，后台管理系统等页面的开发</p>
                                </TimelineItem>
                                
                            </Timeline>
                        </div>

                        <div id='Selfdescription'>
                            <Stitle title='自我描述'/>
                            <ul  class='setul'>
                                <li>16年毕业，近2年前端开发经验，有企业级系统前后台等各类业务的前端开发经验。数据处理能力强，喜欢探索前端新技术，并能将其运用到实际开发项目中</li>
                                <li>做事踏实认真，能吃苦耐劳，有独立分析解决问题的能力，具备良好的学习、沟通和团队协作能力。</li>
                                <li>热爱代码，喜欢技术，能在开发中寻找到创作的乐趣，乐此不疲。</li>
                            </ul>
                        </div>

                        <div id='Skill'>
                            <Stitle title='技能评价'/>
                            <div :class="flng==true ? 'skill-item' : 'skill-item-m'" v-for='item in dataItems' :key="item.title">
                                <span style="color:red">{{item.title}}</span>
                                <Progress :percent="item.num" status="active" />
                            </div>
                        </div>
                    </div>
                </div>
            </i-col>
            
        </Row>
    </div>
</template>

<script>
import Stitle from '../components/sign'
export default {
    data(){
        return {
          dataItems:[
              {
                  title:'jascript',
                  num:70
              },
              {
                  title:'vue',
                  num:60
              },
              {
                  title:'html',
                  num:80
              },
              {
                  title:'css',
                  num:80
              },
              {
                  title:'node',
                  num:50
              },
              {
                  title:'mongodb',
                  num:50
              },
              {
                  title:'webpack',
                  num:50
              },
              {
                  title:'fetch',
                  num:70
              },

          ],
          flng:true,
        }
    },
    created(){
       
    },
    methods:{
        resize(e){
            if(e.target.innerWidth<800){
                this.flng=false;
            }else{
                this.flng=true
            }
        }
    },
    mounted(){
        window.onresize=this.resize   
    },
    components:{
        Stitle
    }
}
</script>

<style lang="scss" scoped>
.skill-item{width:50%;display:flex;flex-direction:column}
.skill-item-m{width:100%;display:flex;flex-direction:column;}
#Skill{margin-top:30px;display:flex;flex-direction:column;align-items:center;}
#Selfdescription{margin-top:30px;display:flex;flex-direction:column;align-items:center;}
#workexperience{margin-top:30px;display:flex;flex-direction:column;align-items:center;}
.setul{width:auto;margin-top:20px;li{font-size:14px;}}
#Personalintroduction{margin-top:30px;display:flex;flex-direction:column;align-items:center;}
.Personalinformation-content{width:100%;display:flex;flex-direction:column;align-items:center;font-size:14px;
    span{margin-top:10px;}   
    .info{ display:flex;align-items:center;margin-top:10px; }      
}
#Personalinformation{display:flex;flex-direction:column;align-items:center;}
.content{width:100%;margin-left:100px;background:white;border-radius:10px;padding:10px;overflow:hidden;}
.content-m{width:100%;background:white;border-radius:10px;padding:10px;overflow:hidden;}
.setbox{width:100%;margin-top:10px;display:flex;justify-content:space-between;}
.class-box{width:100%;background:white;border-radius:10px;margin-top:20px;padding:20px;}
.c-box{width:100%;height:100%;display:flex;justify-content:center;padding-top:10px;
    .c-row{width:95%;height:auto; display:flex;flex-direction:column;}           
}
       
            

</style>