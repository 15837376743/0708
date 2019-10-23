import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index=()=>import('../pages/index.vue')
const login=()=>import('../pages/login.vue')

const manage=()=>import('../pages/manage.vue')
const news=()=>import('../pages/news.vue')
const user=()=>import('../pages/user.vue')
const welcome=()=>import('../pages/welcome.vue')

const manageList=()=>import('../pages/manageList.vue')
const manageAdd=()=>import('../pages/manageAdd.vue')


export default new Router({
  routes: [
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'manage',
          component:manage,
          children:[
            {
              path:'',
              component:manageList,
              name:"管理员管理",
            },
            {
              path:'manageAdd',
              component:manageAdd,
              name:"管理员添加",
            }
          ]
        },
        {
          path:'news',
          component:news,
          name:"通知管理"
        },
        {
          path:'user',
          component:user,
          name:"用户管理"
        },
        {
          path:'welcome',
          component:welcome,
        },
        {
          path:'',
          redirect:'welcome',
        }
      ]
    },
    {
      path:'/login',
      component:login,
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
