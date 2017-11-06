
var resultData = null;
var privateHeaders = {
	'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
    'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
    'Content-Type':'application/json',
}

export default class SubjectService {
	async getItemsData(_subjectProps){
		let url = "https://leancloud.cn/1.1/classes/" + _subjectProps;
		let map = {};
		map.method = "GET";
		map.headers = privateHeaders;

		let result = {};
		result.response = await fetch(url, map);
		result.responseData = await result.response.json();
		result.status = result.response.status;
		result.success = result.response.ok;
		return result;
	}

	async putFavoriteStatus(_objectId, _isFavorite, _items, _favoriteQuantity){
		let url = "https://leancloud.cn/1.1/classes/" + _items + "/" + _objectId;
		let map = {};
		map.method = "PUT";
		map.headers = privateHeaders;
		map.body = JSON.stringify({
		        'isFavorite': _isFavorite,
		        'favoriteQuantity': _favoriteQuantity ,
		    })

		let result = {};
		result.response = await fetch(url, map);
		result.status = result.response.status;
		result.success = result.response.ok;
		return result;
	}

	async getSubjectPlazaData(){
		let url = "https://leancloud.cn/1.1/classes/SubjectPlaza";
		let map = {};
		map.method = "GET";
		map.headers = privateHeaders;

		let result = {};
		result.response = await fetch(url, map);
		result.responseData = await result.response.json();
		result.status = result.response.status;
		result.success = result.response.ok;
		return result;
	}

	async getChargeSubjectData(){
        let url = "https://leancloud.cn/1.1/classes/ChargeSubject";
       	let map = {};
		map.method = "GET";
		map.headers = privateHeaders;

		let result = {};
		result.response = await fetch(url, map);
		result.responseData = await result.response.json();
		result.status = result.response.status;
		result.success = result.response.ok;
		return result;
    }
		
}
