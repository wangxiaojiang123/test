//api.js (参考)
var models = require('./db.js');
var express = require('express');
var router = express.Router();

// 注册用户
router.post('/register',(req,res) => {
    let params = req.body;
    // console.log(params)
    // 添加数据
	let users = new models.User({
		username:params.name,
		password:params.password,
		repass:params.password,
        phone:params.phone,
	})
	users.save().then((result)=>{
		console.log(result)
        res.send(result)
	})
	
});
router.post('/register/user',(req,res) => {
    models.User.find().then((result)=>{
        res.send(result)
    })
});
// 登录
router.post('/login',(req,res) => {
    let params = req.body
    console.log(params)
    models.User.find({'phone':params.phone}).then((result)=>{
        res.send(result)
    })
});

// 忘记密码、修改
router.post('/forget',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let params = req.body;
    console.log(params)
    models.User.update({"password":params.pass},{$set:{"password":params.newpass,"repass":params.newpass}}).then((result)=>{
	// console.log(result)
    res.send(true)
	})
});
// 获取已有账号接口
router.get('/selector',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find.then((result)=>{
        console.log(result)
    })
});


 
module.exports = router;
