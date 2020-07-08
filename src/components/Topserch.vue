<template>
    <div>
        <div
        :class="['margin',item.name=='Radio' || item.name=='CheckboxGroup' ? 'checkbox-item' : '']"
        v-for="(item,index) in list" 
        :key="index" 
        :is="item.name" 
        :size="item.size ? item.size : 'small'"
        :placeholder="item.placeholder"
        :clearable ="!item.clearable ? true : false"
        :disabled="item.disabled"
        v-model="item.value"  
        :type="item.type"     
        @on-change="item.change ? change($event,index) : ''"
        >
            <Checkbox v-for="(_item,_index) in item.checklist" :key="_index" :label="_item.label"></Checkbox>
            <Option v-for="(_item,_index) in item.opation" :key="_index" :label="_item.label" :value="_item.value"></Option>
        </div>
        <Button @click="serchDate" :type="btnType" size="small">{{btnName}}</Button>
    </div>
</template>
 
<script>
export default {
    props:{
        list:{
            type:Array,
            required:true,
        },
        btnName:{
            type:String,
            default:"搜索"
        },
        btnType:{
            type:String,
            default:"default"
        }
    },
    data(){
        return {}
    },
    created(){
        
    },
    mounted() {
        let obj = {}   
        this.$emit("init",this.filterDats(obj));
    },
    methods:{
        change(){
            this.$emit("changeSelected",this.list)
        },

        serchDate(){
            let obj = {}
            this.filterDats(obj);
            this.$emit("serchDate",obj);
        },

        filterDats(obj){
            this.list.map(v=>{
                if(Object.prototype.toString.call(v.value) === "[object Date]"){
                    v.value = new Date(v.value).toLocaleDateString().replace(/\//g,"-")
                }                
                v.serverName ? obj[v.serverName] = (typeof v.value === "number"&&v.value === 0 ? 0 : v.value) : '';  
                if(v.value == "null"){
                    obj[v.serverName] = null;
                }            
            })
            return obj
        }
    },

    
}
</script>

<style lang="scss" scoped>
.margin{width:150px;margin:10px;}
.checkbox-item{width:auto;display: inline-block;}
</style>