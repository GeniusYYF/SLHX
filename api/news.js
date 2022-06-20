import request from '@/common/request.js'

export function getNewsTabList(data) {
	return request.request({
		url: '/news/getNewsTabList',
		method: 'GET',
		data,
		authType: 'None', // 判断该接口是否需要登录授权
		// toggle: true,
	})
}

