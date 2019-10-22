import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 登录接口
export const login = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....请求结束后拦截器')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		baseUrl: 'https://127.0.0.1:8008/api/',
        url: 'users/login',
		dataType: 'json',
        data,
    })
}

//获取用户信息接口
export const userInfo = (data) => {
	return http.request({
		url: 'users/info',
		method:'GET',
		data,
	})
}

// 轮播图接口
export const banner = (data) => {
    return http.request({
        url: '/banner/36kr',
        method: 'GET', 
        data,
		// handle:true
    })
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	login,
	userInfo,
    banner
}