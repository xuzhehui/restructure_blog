<template>
    <div>
        <Headers class="fix-header" />
    </div>
</template>

<script>
import Headers from '../components/header'
import Footer from '../components/footer'
export default {
    data(){
        return {

        }
    },
    components:{Headers,Footer}
}
</script>

<style lang="scss" scoped>
.fix-header{position:fixed;top:0;}
</style>