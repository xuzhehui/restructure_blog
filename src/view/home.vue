<template>
    <div class='content'>
       <div class='container'>
           <List item-layout="vertical">
                <ListItem v-for="item in data" :key="item.title">
                    <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                    <p class="article-content" @click="setclick(item)">{{ item.content }}</p>
                    <template slot="action">
                        <li>
                            <Icon type="md-star" /> {{item.collect}}
                        </li>
                        <li>
                            <Icon type="md-thumbs-up" /> {{item.thumbs_up}}
                        </li>
                        <li>
                            <Icon type="md-chatboxes" /> {{item.comments}}
                        </li>
                    </template>
                </ListItem>
            </List>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data: [],
        }
    },
    created(){
        this.initData()
    },
    methods: {
        setclick(e){
            console.log(e)
        },
       
        initData(){
            this.axios('/api/article/getlist?type=1')
            .then(res=>{
                if(res.success){
                    this.data = res.data;
                }
            })
        }
    },
    
}
</script>

<style lang="scss" scoped>
.content{width:100%;height:100%;padding: 20px;
    .container{width:100%;height:100%;background:#fff;border-radius: 5px;padding:10px;
    
    }
}
.article-content{cursor: pointer;}
</style>