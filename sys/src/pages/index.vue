<template>
<div class="index">
    <v-header></v-header>
    <div class="main">
    <v-left></v-left>
    <v-right></v-right>
    </div>
</div>
</template>
<script>
import vHeader from '../views/header'
import vLeft from '../views/left'
import vRight from '../views/right'
import API  from '../common/js/API'
export default {
    components:{
        vHeader,
        vLeft,
        vRight
    }
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
 .index{
    width 100vw;
    height 100vh;
    display flex;
    flex-direction column;
    overflow hidden
}
.main{
    flex 1;
     display flex;
}


</style>