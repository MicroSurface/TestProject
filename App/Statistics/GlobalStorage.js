global.user = {
	//登录状态
	loginState:'',
	//用户数据
	userData:'',
};

//进入App时检查是否存在数据并设置状态；
storage.load({
	key:'loginState',
}).then(ret => {
	global.user.loginState = true;
	global.user.userData = ret;
}).catch(err => {
	global.user.loginState = false;
	global.user.userData = '';
})