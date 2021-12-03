const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost:27017/test'); // 地址跟第一步的地址对应。
 
// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));


const loginSchema = mongoose.Schema({
    phone : String,
    password : String
});
// 注册用户
const userSchema = mongoose.Schema({
    username : String,
    password : String,
    repass:String,
    phone:String
});
 
/************** 定义模型Model **************/
const models = {
    Login : mongoose.model('Login',loginSchema),
    User : mongoose.model('User',userSchema),

}
 
module.exports = models;