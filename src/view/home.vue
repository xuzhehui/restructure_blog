<template>
    <div class='content'>
       <div class='container'>
           <List item-layout="vertical">
                <ListItem v-for="item in data" :key="item.title">
                    <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                    <p class="article-content" @click="setclick(item)">{{ item.content }}</p>
                    <template slot="action">
                        <li>
                            <Icon type="md-star" /> 123
                        </li>
                        <li>
                            <Icon type="md-thumbs-up" /> 234
                        </li>
                        <li>
                            <Icon type="md-chatboxes" /> 345
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
            data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ],
            
        }
    },
    methods: {
        setclick(e){
            console.log(e)
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