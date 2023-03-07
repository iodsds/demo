import Mock from "mockjs";




// 接口数据
Mock.mock("/test", 'post', () => {
	return {
		"state": "success",
		"result": {},
		"information": ""
	}
})
