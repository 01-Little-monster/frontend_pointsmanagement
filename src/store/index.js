import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)


//2.创建store对象
const store = new Vuex.Store({
	state: {
		isCut: true
	},
	//修改store里的东西都需要经过mutations
	mutations: {
		// [CHANGING_OVER](state, payload) {
		// 	console.log('vuex')
		// 	state.isCut = true
		// 	payload.callback()
		// },
		changing_over_true(state, payload) {
			state.isCut = true
			payload.callback()
		},
		changing_over_false(state, payload) {
			state.isCut = false
			payload.callback()
		}
	}
})

//3.挂载
export default store