<template>
    <div class='s-box'>
        <div class='s-template'>
            <p class='ser'></p>
            <div class='s-title'>{{title}}</div>
            <p class='ser'></p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .s-box{width:100%;height:100%;
        .s-template{display:flex;align-items:center;
            .s-title{width:100px;height:30px;background:rgb(232,232,232);border-radius:20px;display:flex;justify-content:center;align-items:center;}  
            .ser{width:50%;height:2px;background:rgb(232,232,232);}     
        }      
    }      
</style>


