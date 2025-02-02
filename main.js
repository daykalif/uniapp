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


/**
 * 这段代码的主要作用是为 Date 对象的原型添加一个自定义的格式化方法 VP_FORMAT，用于将日期对象按照指定的格式进行格式化，
 * 同时根据该日期与当前日期的差值添加相应的中文描述（如 “今天”“明天” 等）。
 */
Date.prototype.VP_FORMAT = function(format) {
	console.log('==========>this.getDate() ' + this.getTime() / (24 * 60 * 60 * 1000));
	console.log('==========>new Date().getDate() ' + new Date().getTime() / (24 * 60 * 60 * 1000));
	var ds = parseInt(this.getTime() / (24 * 60 * 60 * 1000)) - parseInt(new Date().getTime() / (24 * 60 * 60 *
		1000));
	var n = '';
	if (ds == 0) {
		n = '(今天)';
	}
	if (ds == 1) {
		n = '(明天)';
	}
	if (ds == 2) {
		n = '(后天)';
	}
	if (ds == -1) {
		n = '(昨天)';
	}
	if (ds == -2) {
		n = '(前天)';
	}
	var date = {
		'M+': this.getMonth() + 1,
		'd+': this.getDate(),
		'h+': this.getHours(),
		'm+': this.getMinutes(),
		's+': this.getSeconds(),
		'q+': Math.floor((this.getMonth() + 3) / 3),
		'S+': this.getMilliseconds(),
		'n+': n
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ('00' + date[k]).substr(('' + date[
				k]).length));
		}
	}
	return format;
};


export function createApp() {
	const app = createSSRApp(App)

	// 全局引入第三方组件
	app.component('my-component', Component);

	return {
		app
	}
}
// #endif