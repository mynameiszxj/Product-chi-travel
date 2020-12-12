import { apiResquest } from './request.js'

// 用户登录

export const login = (query) => {
	return apiResquest({
		url: '/api/user/login',
		method: 'get',
		query: {...query}
	})
}

// 获取验证码
export const code = (query) => {
	return apiResquest({
		url: '/api/service/sms/send',
		method: 'get',
		query: {...query}
	})
}

//GET 请求案例可以传递参数也可以不传递
export const validateCode  = (query) => {
	let str = query
	return apiResquest({
		url: `您的API地址 ?${str}`,
		method: 'GET'
	})
}