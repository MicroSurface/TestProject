
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

		let response = await fetch(url, map);
		let responseJson = await response.json();
		return responseJson;
	}

	putFavoriteStatus(_objectId, _isFavorite, _items, _favoriteQuantity){
		let url = "https://leancloud.cn/1.1/classes/" + _items + "/" + _objectId;
		let map = {};
		map.method = "PUT";
		map.headers = privateHeaders;
		map.body = JSON.stringify({
		        'isFavorite': _isFavorite,
		        'favoriteQuantity': _favoriteQuantity ,
		    })
		fetch(url, map)
	}
		
}
