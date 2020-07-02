<template>
    <div class='right-view'>
        <div class='container'>
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2723844734,592102403&fm=11&gp=0.jpg" alt="">
            <div>
                <span>JavaScript</span>
                <span>记录着成长的每一步足迹</span>
            </div>
        </div>

        <div class='news-article'>
            <p class='title'>最新文章</p>
            <div class="article-list-container">
                <p class='item' v-for="(item,index) in news_article" :key="index">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news_article:[
                {
                    title:'javascript中的数据类型javascript中的数据类型javascript中的数据类型javascript中的数据类型',
                    type:'javascript',
                    content:'...',
                    author:'miss_xu',
                    id:1,
                },
                {
                    title:'scrapy爬虫框架',
                    type:'javascript',
                    content:'...',
                    author:'miss_xu',
                    id:1,
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.right-view{width:100%;height:100%;padding:20px;animation: tolong .3s;
    .container{background:#fff;width:100%;border-radius:5px;display:flex;flex-direction: column;align-items: center;;justify-content:center;padding:20px;
        img{max-width:140px;max-height:140px;border-radius:50%}
        div{display: flex;flex-direction: column;align-items: center;
            span{padding:5px 0;}
        }
    }
    .news-article{padding:10px;background:#fff;margin-top:10px;border-radius:5px;
        .title{padding-bottom:10px;border-bottom:1px solid #e8eaec}
        .article-list-container{padding-top:10px;
            .item{padding: 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border:1px solid transparent;cursor:pointer;
                &:hover{color:#2db7f5;}
            }
        }
        
    }
}
@keyframes tolong{
    0%{transform: scale(0);}
    10%{transform: scale(.1);}
    20%{transform: scale(.2);}
    30%{transform: scale(.3);}
    40%{transform: scale(.4);}
    50%{transform: scale(.5);}
    60%{transform: scale(.6);}
    70%{transform: scale(.7);}
    80%{transform: scale(.8);}
    90%{transform: scale(.9);}
    100%{transform: scale(1);}
}
</style>