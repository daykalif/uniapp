<template>
	<view>
		<!-- 顶部导航栏 -->
		<navbar :isHome='true' />

		<!-- 头部公告栏 -->
		<view style="margin-top: 130rpx;">
			<view class="weui-cell" style="background: #fff9eb;">
				<view class="weui-cell__hd">
					<image src="/static/resource/images/ic_myapp.png"
						style="display: block;width:40rpx;height: 40rpx;margin-right: 14rpx;"></image>
				</view>
				<view class="weui-cell__bd">
					<text style="color:#be9719;font-size: 13px;">点击右上角“添加到我的小程序”，方便下次找到！</text>
				</view>
				<view class="weui-cell__ft">
					<image src="/static/resource/images/modal_closer.png"
						style="display: block;width:30rpx;height: 30rpx;"></image>
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';

	const navigatorTo = () => {
		uni.navigateTo({
			url: '/pages/search/index',
		});
	}

	const app = getApp();
	onLoad(() => {
		// 调用用户信息
		app.globalData.utils.getUserInfo();
	});
</script>

<style>

</style>