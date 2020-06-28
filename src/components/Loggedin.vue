<template>
    <div class='content-logined'>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <!-- <span>Miss<a>小李</a></span> -->
        <Dropdown trigger="click">
            <span class='logined-span'>Miss<a>小李</a></span>
            <DropdownMenu slot="list">
                <DropdownItem v-for="(item,index) of serverList" :key="index">
                    <Icon :type="item.icon" />
                    <span>{{item.title}}</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            serverList:[
                {title:'后台管理',icon:'md-construct'},
                {title:'更换头像',icon:'md-images'},
                {title:'修改密码',icon:'md-key'},
                {title:'退出登录',icon:'md-log-out'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.content-logined{width:20%;display: flex;width:140px;align-items: center;
    .logined-span{margin-left:10px;}
}
</style>