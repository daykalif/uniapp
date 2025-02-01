import App from './App'
import Component from './mycomponents/component.vue';

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)

	// 全局引入第三方组件
	app.component('my-component', Component);

	return {
		app
	}
}
// #endif