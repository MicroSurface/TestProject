

var SUBJECT_ITEMS = 'SUBJECT_ITEMS';
var resultData = null;
export default class SubjectService {
	async getItemsData(_subjectProps){
		let url = "https://leancloud.cn/1.1/classes/" + _subjectProps;
		let map = {};
		map.method = "GET";
		map.headers = {
			'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
            'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
            'Content-Type':'application/json',
		};

		let response = await fetch(url, map);
		let responseJson = await response.json();
		return responseJson;
	}

	putFavoriteStatus(_objectId, _isFavorite, _items, _favoriteQuantity){
		let url = "https://leancloud.cn/1.1/classes/" + _items + "/" + _objectId;
		fetch(url,{
			method:'PUT',
			headers:{
				'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
                'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
                'Content-Type':'application/json',
			},
			body: JSON.stringify({
		        'isFavorite': _isFavorite,
		        'favoriteQuantity': _favoriteQuantity ,
		    })
		})
	}
		
}
