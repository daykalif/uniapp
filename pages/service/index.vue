<template>
	<view>
		<!-- 进度条 -->
		<view class="od-banner">
			<!-- 背景图片 -->
			<image src="/static/resource/images//od_bg_icon.png" mode="widthFix" class="od-banner-icon"></image>
			<view class="od-jd od-jd-0">
				<!-- 进度条 -->
				<view class="od-jd-out">
					<!-- 进度条里面的进度显示 -->
					<view class="od-jd-in"></view>
				</view>
				<!-- 关于进度的文字 -->
				<view class="vp-flex od-jd-text">
					<view class="vp-flex_1">
						<text class="od-jd-st-0">填写订单</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-10">在线支付</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-20">专人服务</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-30">服务完成</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	@import './index.css';
</style>