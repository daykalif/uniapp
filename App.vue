<script>
	import Utils from './common/js/utils.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			Utils.request({
				url: '/app/init',
				success: (res) => {
					uni.setStorageSync('cfg', res.data.cfg)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		// 注册公共的工具函数
		globalData: {
			utils: Utils
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'app.css'
</style>