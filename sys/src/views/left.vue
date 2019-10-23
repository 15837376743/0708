<template>
<div class="left">
   <router-link to='/index/manage' active-class="select"
   v-if="isAdmin=='0'"
   >管理员管理</router-link>
   <router-link to='/index/user' active-class="select"
   v-if="isAdmin=='0'||isAdmin=='1'"
   >用户管理</router-link>
   <router-link to='/index/news' active-class="select">通知管理</router-link>
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
    .left{
    width 150px;
     background $info;
    }   
    a{
        display block
        text-align center
        line-height 40px
        font-size 20px
    }
    .select{
        background $select-color 
        color $color4
    }
</style>