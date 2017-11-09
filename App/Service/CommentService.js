
var privateHeaders = {
	'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
    'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
    'Content-Type':'application/json',
}

export default class CommentService {
	async postCommentInfo(_topicId, _commentContent){
		let url = "https://leancloud.cn/1.1/classes/CommentInfo";
		let map = {};
		map.method = "POST";
		map.headers = privateHeaders;
		map.body = JSON.stringify({
		        'topicId': _topicId,
		        'commentContent': _commentContent ,
		    });

		let result = {};
		result.response = await fetch(url, map);
		result.status = result.response.status;
		result.success = result.response.ok;
		return result;
	}

	async getCommentInfo(_topicId){
		let query = "?where={\"topicId\":"+"\""+_topicId+"\""+"}";
		let url = "https://leancloud.cn/1.1/classes/CommentInfo"+query;
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