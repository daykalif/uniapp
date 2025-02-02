<template>
	<view>
		<view class="od-banner">
			<image class="od-banner-icon" src="/static/resource/images/od_bg_icon.png" mode="widthFix" />
			<view class="od-jd od-jd-0">
				<view class="od-jd-out">
					<view class="od-jd-in"></view>
				</view>
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
		<view class="pub-box">
			<view class="pub-box-bd">
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<image class="serv-icon"
							:src="service.icon_image ? service.icon_image_url : '../../static/resource/images/avatar.jpg'"
							mode='widthFix' />
					</view>
					<view class="weui-cell__bd">
						<text class="serv-name">{{ service.name }}</text>
					</view>
					<view class="weui-cell__ft">
						<view class="f5 ic_info" @click="handleServiceTap">服务内容</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"

	import {
		ref,
		reactive,
		computed,
		toRaw
	} from "vue"

	const app = getApp() // 获取uniapp实例
	const service = ref({}) // 服务内容

	onLoad((option) => {
		getServiceDetail(option)
	});

	// 获取服务详情
	const getServiceDetail = (option) => {
		const {
			svid
		} = option;

		app.globalData.utils.request({
			url: '/Service/order',
			data: {
				svid
			},
			success: (res) => {
				service.value = res.data.data.service // 服务相关信息
			}
		})
	}

	// 服务内容
	const handleServiceTap = () => {

	}
</script>

<style>
	@import './index.css';
</style>