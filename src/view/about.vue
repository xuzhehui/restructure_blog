<template>
    <div class='a-box'>
        <Row class='a-row'>
            <i-col style='margin-top:10px;height:auto;background:white' :xs="{span:24}" :sm="{span:24}" :lg="{span:24}">
                <div class='about-me'>关于我</div>
                <div class='about-me-content'>
                    <span class='span'>你好！我是博主！该博客主要用于记录我在技术方面的所见所闻！与大家一起成长！</span>
                    <span class='span'>本人2016年入坑前端,一直想搞一个自己的博客,记录自己的成长，奈何技术有限，经过一年多的成长，经历的东西越来越多，想对自己一年的成长有一个总结，于是有了这个博客！</span>
                    <span class='span'>前端路很漫长也很遥远，希望自己在这条道上越走越远~~</span>
                </div>
            </i-col>

            <i-col style='margin-top:10px;background:white;' :xs="{span:24}" :sm="{span:24}" :lg="{span:24}">
               <div class='about-me'>联系我</div>
               <div class='about-me-content'>
                   <p><Icon size='16' type="ios-call-outline" /><span style='margin-left:5px'>13454143096</span></p>
                   <p><Icon size='16' type="ios-mail-outline" /><span style='margin-left:5px'>1026248690@qq.com</span></p>
                   <p><Icon size='16' type="logo-github" /> <span @click='gohub' class='about-hover' style='margin-left:7px;'>xuzhehui</span></p>
               </div>
            </i-col> 
        </Row> 
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        gohub(){
            window.open('https://github.com/xuzhehui')
        }
    },
    components:{
       
    }
}
</script>

<style lang="scss" scoped>

</style>
<style lang="scss" scoped>
.brief{margin-top:10px;position:absolute;border-radius:10px;}
.mysorch{margin-top:10px;border-radius:10px;}
.a-box{width:100%;height:100%;display:flex;justify-content:center;padding-top:10px;;
    .a-row{width:95%;height:auto;display:flex;flex-direction:column;}
    .about-me{width:100%;height:40px;display:flex;justify-content:center;align-items:center;border-bottom:1px solid #e8eaec;font-size:16px;}
    .about-me-content{width:100%;padding:10px;display:flex;flex-direction:column;justify-content:space-between;font-size:14px;
        .span{margin-top:20px;}
        p{height:40px;display:flex;align-items:center;
            .about-hover{cursor:pointer;&:hover{color:rgb(45,183,245)}      
            }      
        }     
    }      
}
</style>