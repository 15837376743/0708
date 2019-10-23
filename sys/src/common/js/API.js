const baseUrl = './api';
// const baseUrl = '';
const login = baseUrl+'/login'
const findManage = baseUrl+'/findManage'
const addManage = baseUrl+'/addManage'
var updateManage=baseUrl+"/updateManage"
var delManage=baseUrl+"/delManage"
var addUser=baseUrl+"/addUser"
export default{
    login,
    findManage,
    addManage,
    updateManage,
    delManage,
    addUser
}