<template>
<div>
    <button   v-if="isAdmin!='2'">添加通知</button>
    <button>查看通知</button>
</div>
</template>
<script>
import API  from '../common/js/API'
export default {
     data() {
        return {
            isAdmin:sessionStorage.getItem("isAdmin")
        }
    },
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
</style>