<template>
  <div>
    <div>
      <input type="text" placeholder="用户名" v-model="user.name" />
    </div>
    <div>
      <input type="text" placeholder="密码" v-model="user.pass" />
    </div>
    <div>
      <input type="tel" placeholder="电话" v-model="user.tel" />
    </div>
    <div>
      <input type="email" placeholder="邮箱" v-model="user.email" />
    </div>
    <div class="text-center">
      <input type="radio" name="sex" class="sex" value="男" v-model="user.sex" />男
      <input type="radio" name="sex" class="sex" value="女" v-model="user.sex" />女
    </div>
    <div>
      <input type="text" placeholder="身份证号" v-model="user.idx" />
    </div>
    <div>
      <input type="text" placeholder="备注" v-model="user.des" />
    </div>
    <div>
      <input type="date" placeholder="时间" v-model="user.time" />
    </div>
    <div class="text-center">
      <button @click="add">添加</button>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
        name: "",
        pass: "",
        tel: "",
        email: "",
        sex: "",
        idx: "",
        des: "",
        time: ""
      }
    };
  },
  methods: {
    add() {
      this.$axios({
        url: API.addUser,
        method: "get",
        params: this.user
      }).then(res => {
       if(res.data.isok){
            alert(res.data.info)
            this.user=[]
       }else{
           alert(res.data.info)
       }
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.sex {
  font-size: 20px;
  display: inline;
  width: 50px;
  line-height: 20px;
  height: auto;
}
</style>