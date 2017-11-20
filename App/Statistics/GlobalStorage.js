global.user = {
	//登录状态
	loginState:'',
	//用户数据
	userData:'',
};

global.headerImage = {
	//是否上传头像
	hasLoaded:'',
	//是否有头像路径
	imagePath:'',
}

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

storage.load({
	key:'headerImage',
}).then(ret => {
	global.headerImage.hasLoaded = true;
	global.headerImage.imagePath = ret;
}).catch(err => {
	global.headerImage.hasLoaded = false;
	global.headerImage.imagePath = '';
})