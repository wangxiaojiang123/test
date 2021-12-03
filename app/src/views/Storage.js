export default{
	// 设置缓存
	set(key,value){
		window.localStorage.setItem(key,JSON.stringify(value));
	},
	// 获取缓存
	get(key){
		return JSON.parse(window.localStorage.getItem(key)) || [];
	}
}