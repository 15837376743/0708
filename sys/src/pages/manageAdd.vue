<template>
<div>
   <div>
       <input type="text" placeholder="账号" v-model="user.name" :disabled="id!=0">
   </div>
    <div>
       <input type="text" placeholder="密码" v-model="user.pass" :disabled="id!=0">
   </div>
    <div>
       <input type="text" placeholder="确认密码" v-model="confirm" v-if="id==0">
   </div>
    <div>
       <input type="text" placeholder="属性" v-model="user.prop">
   </div>
    <div>
       <input type="date" placeholder="时间" v-model="user.time">
   </div>
   <div class="text-center">
          <button @click="add" v-if="id==0">添加</button>
         <button @click="update" v-else>修改</button>
   </div>
   </div>

</template>
<script>
import API  from '../common/js/API'
export default {
    data() {
        return {
            user:{
                name:"",
                pass:"",
                prop:"",
                time:"",
            },
            confirm:"",
            id:""
        }
    },
    mounted(){
        this.id=this.$route.query.id;
        if(this.id==0){

        }else{
            this.$axios({
                url:API.findManage,
                method:'get',
                params:{
                    id:this.id
                }
            }).then(res=>{
               if(res.data.isok){
                    this.user=res.data.data[0]
                    delete this.user._id;
               }else{
                   alert(rs.data.info)
               }
                
            })
        }
    },
  
    methods: {
        add(){
            this.$axios({
                url:API.addManage,
                method:'get',
                params:this.user,
            }).then(res=>{
                //  console.log(res);
                if(res.data.isok){
                   alert(res.data.info)     
                this.$router.replace('/index/manage/')
                }else{
                    alert(res.data.info)
                }
            })
        },
        update(){
            this.$axios({
                url:API.updateManage,
                method:'get',
                params:this.user,
            }).then(res=>{
                if(res.data.isok){
                    this.$router.push('/index/manage')
                }else{
                    alert(res.data.info)
                }
                
            })

        }
    },
  
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
</style>