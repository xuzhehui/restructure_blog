<template>
    <div class="classify">
        <div class='container'>
            <div class='title'>分类列表</div>

            <div class='content'>
                <p v-for='item of type_list' :key="item.id">{{item.name}}</p>
            </div>

            <div class="fix-page">
                <Page :total="TotalItems" show-sizer />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            type_list:[],
            TotalItems:0,
        }
    },
    components:{},
    mounted(){
        this.get_articleType()
    },
    methods: {
        get_articleType(){
            this.axios('/api/type/list')
            .then(r=>{
                if(r.success){
                    this.type_list=r.data
                    this.TotalItems = r.TotalItems 
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.classify{width:100%;height:100%;padding:20px;
    .container{width:100%;height:100%;background:#fff;border-radius:5px;position:relative;
        .fix-page{position:absolute;bottom:0;display: flex;justify-content: center;width:100%;padding:10px;}
        .title{padding:10px;border-bottom:1px solid #f1f1f1;}
        .content{padding:10px;
            p{padding:10px;border-bottom:1px solid #f1f1f1;cursor:pointer;
                &:hover{color:#2db7f5;}
            }
        }
    }
}
</style>