// 不能使用useRouter ,useRoute，他们需要在setup中调用执行后才能用
import router from '@/router'

import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
	timeout:5000
})

// 请求拦截器
instance.interceptors.request.use(
	(config) => {
		config.headers.authorization = dbUtils.get('token')
	}
)
