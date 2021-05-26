import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL: 'http://192.168.3.18:8080',
		timeout: 5000
	})
	return instance(config)
}