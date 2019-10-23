// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 请求拦截 config-你发送的参数 
axios.interceptors.request.use(config=>{
  config.a=10;
  return config
})

//响应拦截 config-后端返你的数据
axios.interceptors.response.use(config=>{
  // console.log("=========响应拦截====================")
  // console.log(config)
  if(config.data.code==-1){//未登录
    router.replace("/login")
    return;
  }
  return config;
})

//axios
import axios from'axios'
Vue.prototype.$axios = axios;

//引入公共组件
import commonCom from './components/index'
for(var i in commonCom){
  Vue.component(i,commonCom[i])
}
 
//引入重置样式
import  './assets/css/reset.css'



//全局守卫
router.beforeEach((to, from, next) => {
  if(to.path=='/login'){
    next();
    return
  }
  //如果没有登录就去登录
  if(sessionStorage.getItem('isAdmin')==null){
    next('/login')
    return
  }
  
  //超管
  if(to.path.includes('manage')){
    if(sessionStorage.getItem('isAdmin')=='0'){
      next();
      return
    }else{
      next('/login')
    }
    return
  }
  //普通管理员
  if(to.path.includes('user')){
    if(sessionStorage.getItem('isAdmin')=='0'||sessionStorage.getItem('isAdmin')=='1'){
      next();
      return
    }else{
      next('/login')
    }
    return
  }
  next()
   
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})



