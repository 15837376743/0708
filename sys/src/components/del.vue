<template>
<div style="display:inline-block">
   <button @click="isDel=true">删除</button>
   <div class="mask" v-if="isDel"  @click.self="isDel=false">
       <div class="box">
           <h3>你确定要删除吗?</h3>
           <button @click="del()">确定</button>
           <button @click="isDel=false">取消</button>
       </div>
   </div>
</div>
</template>
<script>
import API  from '../common/js/API'
export default {
    props:["idx"],
    data(){
        return{
            isDel:false
        }
    },
    methods: {
        del(){
            this.isDel=false
            this.$emit("del",this.idx)
        }
    },
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
</style>