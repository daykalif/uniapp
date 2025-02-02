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

		<!-- 轮播图 -->
		<view class="index-swiper" v-if="bannerList && bannerList.length > 0">
			<swiper :indicator-dots="true" circular autoplay :interval="4000" :duration="500">
				<swiper-item v-for="(item,index) in bannerList" :key="item.id">
					<image :src="item.pic_image_url" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
	} from '@dcloudio/uni-app';

	import {
		ref
	} from "vue";


	const navigatorTo = () => {
		uni.navigateTo({
			url: '/pages/search/index',
		});
	}

	const app = getApp() // 获取uniapp实例
	const bannerList = ref([]) // 轮播图

	onLoad(() => {
		// 调用用户信息
		app.globalData.utils.getUserInfo();

		// 先获取地区码
		app.globalData.utils.request({
			url: '/app/init',
			success: ({
				data
			}) => {
				const {
					id
				} = data.data.area;

				// 根据地区码获取该地区的医院信息（轮播图）
				app.globalData.utils.request({
					url: '/Index/index',
					data: {
						aid: id
					},
					success: (ress) => {
						bannerList.value = ress.data.data.slides // 轮播图
						console.log(bannerList.value, 'ress');
					}
				})
			},

		})
	});
</script>

<style>
	.index-swiper {
		overflow: hidden;
		margin: 20rpx 20rpx 0;
	}

	.index-swiper swiper {
		overflow: hidden;
		height: 320rpx;
		border-radius: 10rpx;
	}

	.index-swiper swiper-item image {
		width: 100%;
		height: 100%;
	}
</style>