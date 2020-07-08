<template>
    <div class='footer'>
        <Page :total="totalItems" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageIndex:1,
            totalItems:0
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer{display: absolute;justify-content: center;position:fixed;bottom:0;background:red;}
</style>