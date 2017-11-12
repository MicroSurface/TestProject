
var privateHeaders = {
	'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
    'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
    'Content-Type':'application/json',
}

export default class RegisterService {
	async postNewUser(_userName, _phoneNumber, _password ){
		let url = "https://leancloud.cn/1.1/users";
		let map = {};
		map.method = "POST";
		map.headers = privateHeaders;
		map.body = JSON.stringify({
				'username':_userName,
		        'mobilePhoneNumber': _phoneNumber,
		        'password': _password,
		    });

		let result = {};
		result.response = await fetch(url, map);
		result.status = result.response.status;
		result.success = result.response.ok;
		return result;
	}
}