<template>
  <div class="mask">
    <div class="box">
      <h1 class="text-center text-third">请登录</h1>
      <select v-model="user.type">
        <option value disabled>---请选择---</option>
        <option value="0">超级管理员</option>
        <option value="1">普通管理员</option>
        <option value="2">用户</option>
      </select>
      <input type="text" placeholder="用户名" v-model="user.name" />
      <input type="text" placeholder="密码" v-model="user.pass" />
      <div class="text-center">
        <button @click="login">登录</button>
      </div>
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
        type: ""
      }
    };
  },
  methods: {
    login() {
      this.$axios({
        url: API.login,
        method: "post",
        data: this.user,
      }).then(res => {
          if(res.data.isok){
            sessionStorage.setItem("isAdmin",res.data.isAdmin)
              this.$router.push("/index")
          }else{
              alert(res.data.info)
          }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

h1 {
  margin: 20px auto;
}

input {
  margin-top: 10px;
}
</style>